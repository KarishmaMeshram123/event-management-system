package com.app.eventmanagement.service;

import com.app.eventmanagement.model.User;
import com.app.eventmanagement.repository.UserRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository repo;

    public CustomUserDetailsService(UserRepository repo){
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String email){
        User user = repo.findByEmail(email);

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().replace("ROLE_",""))
                .build();
    }
}
