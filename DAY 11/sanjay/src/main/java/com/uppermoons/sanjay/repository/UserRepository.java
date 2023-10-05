package com.uppermoons.sanjay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uppermoons.sanjay.model.User;

public interface UserRepository extends JpaRepository<User,String>{
	
}
