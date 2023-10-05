package com.uppermoons.sanjay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uppermoons.sanjay.dto.request.UserRequestDto;
import com.uppermoons.sanjay.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
//@RequiredArgsConstructor
public class UserController {
	
	//private final UserService userService;
	
/*	public ResponseEntity<String> saveUser(@RequestBody UserRequestDto userRequest){
	//	boolean isDataSaved=userService.saveUser(userRequest);
		//return isDataSaved ? ResponseEntity.status(200).body("User added successfully") :ResponseEntity.status(403).body("Something went wrong");
	}
	//public ResponseEntity<String>*/ 
}
