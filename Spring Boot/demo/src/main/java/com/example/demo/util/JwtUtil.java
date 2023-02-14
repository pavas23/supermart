package com.example.demo.util;

import com.example.demo.model.Customer;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    public static String secret = "bbb@supermart_secretKey#$%_";
    public String generateJwt(Customer customer){
        Date issuedAt = new Date();
        // claims
        Claims claims = Jwts.claims().setIssuer(customer.getEmail().toString()).setIssuedAt(issuedAt);
        // generate Jwt using claims
        return Jwts.builder().setClaims(claims).compact();
    }
}
