package com.dejavue.api.auth;

import org.springframework.security.web.RedirectStrategy;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NoRedirectStrategy implements RedirectStrategy {

    public void sendRedirect(final HttpServletRequest request, final HttpServletResponse response, final String url) {
    }

}
