package com.uppermoons.sanjay.service.impl;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.uppermoons.sanjay.dto.request.UserRequestDto;
import com.uppermoons.sanjay.model.User;
import com.uppermoons.sanjay.repository.UserRepository;
import com.uppermoons.sanjay.service.UserService;




import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
//@Service
//@Transactional
//@RequiredArgsConstructor
/*public class UserServiceImpl implements UserService{
private final UserRepository userRepository;
@Override 

public boolean saveUser(UserRequestDto userRequest) {
		Optional<User> isUserOptional=userRepository.existsByEmail(userRequest.getEmail());
		return false;
	}
}*/
