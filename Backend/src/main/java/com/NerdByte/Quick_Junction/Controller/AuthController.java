package com.NerdByte.Quick_Junction.Controller;

import com.NerdByte.Quick_Junction.Model.User;
import com.NerdByte.Quick_Junction.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User loggedIn = userService.login(user.getUsername(), user.getPassword());
        if (loggedIn == null) {
            throw new RuntimeException("Invalid username or password");
        }
        return loggedIn;
    }
}
