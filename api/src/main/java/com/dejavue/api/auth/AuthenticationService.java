package com.dejavue.api.auth;

import com.dejavue.api.user.User;
import java.util.Optional;

public interface AuthenticationService {

    Optional<String> login(String login, String password);

    Optional<User> findByToken(String token);

    void logout(User user);
}