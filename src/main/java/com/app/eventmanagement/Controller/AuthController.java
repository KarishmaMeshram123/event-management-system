package com.app.eventmanagement.Controller;

import com.app.eventmanagement.model.User;
import com.app.eventmanagement.repository.UserRepository;
import com.app.eventmanagement.config.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository r, PasswordEncoder e, JwtUtil j){
        repo=r;
        encoder=e;
        jwtUtil=j;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        return repo.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        User dbUser=repo.findByEmail(user.getEmail());

        if(encoder.matches(user.getPassword(), dbUser.getPassword())){
            return jwtUtil.generateToken(user.getEmail());
        }
        return "Invalid credentials";
    }
}
