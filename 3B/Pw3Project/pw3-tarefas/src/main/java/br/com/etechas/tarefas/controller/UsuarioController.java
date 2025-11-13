package br.com.etechas.tarefas.controller;

import br.com.etechas.tarefas.entity.Usuario;
import br.com.etechas.tarefas.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
    @Autowired
    private UsuarioService service;

    @PostMapping("/adicionar")
    public ResponseEntity<Usuario> adicionarUsuario(@RequestBody Usuario user){
        Usuario response = service.adicionarUsuario(user);
        return ResponseEntity.ok(response);
    }

}
