package com.dejavue.api.user;

import com.dejavue.api.auth.AuthenticationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/users")
final class PublicUserController {
    AuthenticationService authentication;
    UserRepository userRepository;

    @PostMapping("/register")
    String register(@RequestParam("login") final String login, @RequestParam("password") final String password) {
        User user = new User();
        user.setName(login);
        user.setPassword(password);
        userRepository.save(user);

        return login(login, password);
    }

    @PostMapping("/login")
    String login(@RequestParam("username") final String login, @RequestParam("password") final String password) {
        return authentication
                .login(login, password)
                .orElseThrow(() -> new RuntimeException("Can`t find account with this credentials"));
    }
}
