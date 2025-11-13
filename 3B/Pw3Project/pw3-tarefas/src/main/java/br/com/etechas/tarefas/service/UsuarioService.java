package br.com.etechas.tarefas.service;

import br.com.etechas.tarefas.entity.Usuario;
import br.com.etechas.tarefas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public Usuario adicionarUsuario(Usuario user){
        var userExist = repository.findByuserName(user.getUserName());
        if (userExist.isPresent()){
            throw new RuntimeException("Nome de usuário já existe");
        }
        // Senha cifrada
        var senhaCifrada = passwordEncoder.encode(user.getPassword());
        user.setPassword(senhaCifrada);
        var salvo = repository.save(user);
        return salvo;

    }
}
