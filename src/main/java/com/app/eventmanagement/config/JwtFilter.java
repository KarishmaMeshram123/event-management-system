package com.app.eventmanagement.config;

import com.app.eventmanagement.service.CustomUserDetailsService;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService service;

    public JwtFilter(JwtUtil j, CustomUserDetailsService s){
        jwtUtil=j;
        service=s;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain)
            throws ServletException, IOException {

        String header=req.getHeader("Authorization");

        if(header!=null && header.startsWith("Bearer ")){
            String token=header.substring(7);
            String email=jwtUtil.extractEmail(token);

            var userDetails=service.loadUserByUsername(email);

            var auth=new UsernamePasswordAuthenticationToken(
                    userDetails,null,userDetails.getAuthorities());

            auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        chain.doFilter(req,res);
    }
}
