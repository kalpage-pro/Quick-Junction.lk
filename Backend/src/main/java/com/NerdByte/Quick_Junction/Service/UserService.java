package com.NerdByte.Quick_Junction.Service;

import com.NerdByte.Quick_Junction.Model.User;
import com.NerdByte.Quick_Junction.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public void createAdminAccounts() {
        if (userRepository.findByUsername("admin1") == null) {
            userRepository.save(new User("admin1", passwordEncoder.encode("admin123"), "ADMIN"));
        }
        if (userRepository.findByUsername("admin2") == null) {
            userRepository.save(new User("admin2", passwordEncoder.encode("admin456"), "ADMIN"));
        }
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        return userRepository.save(user);
    }

    public User login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;
    }
}
