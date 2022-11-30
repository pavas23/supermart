package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.example.demo.model.User;
@NoRepositoryBean
public interface UserRepository<T extends User> extends JpaRepository <User,Integer>{

}
