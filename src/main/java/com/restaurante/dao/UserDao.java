package com.restaurante.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurante.model.UserModel;

public interface UserDao extends JpaRepository<UserModel, Long> {
	 UserModel findByCorreo(String correo);

}
