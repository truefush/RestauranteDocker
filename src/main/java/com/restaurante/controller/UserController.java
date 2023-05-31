package com.restaurante.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restaurante.dao.UserDao;
import com.restaurante.model.UserModel;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

	@Autowired
	private UserDao userdao;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserModel usermodel) {
        UserModel usuarioExistente = userdao.findByCorreo(usermodel.getCorreo());

        if (usuarioExistente != null && usuarioExistente.getContrasena().equals(usermodel.getContrasena())) {
            return ResponseEntity.ok("Inicio de sesión exitoso");
        } else {
            return ResponseEntity.badRequest().body("Credenciales inválidas");
        }
    }

    @PostMapping("/registro")
    public ResponseEntity<String> registro(@RequestBody UserModel usermodel) {
        if (userdao.findByCorreo(usermodel.getCorreo()) != null) {
            return ResponseEntity.badRequest().body("El correo ya está registrado");
        }

        userdao.save(usermodel);
        return ResponseEntity.ok("Registro exitoso");
    }
}
