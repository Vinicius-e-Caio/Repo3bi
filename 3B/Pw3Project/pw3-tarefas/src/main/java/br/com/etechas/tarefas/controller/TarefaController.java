package br.com.etechas.tarefas.controller;

import br.com.etechas.tarefas.entity.Tarefa;
import br.com.etechas.tarefas.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {
    @Autowired
    private TarefaService service;

    @GetMapping("/listar")
    public List<Tarefa> listar(){
        return service.listarTarefas();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        if(service.deletarPorId(id)){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/adicionar")
    public ResponseEntity<Void> adicionarTarefa(@RequestBody Tarefa tarefa){
        service.adicionarTarefa(tarefa);
        return ResponseEntity.accepted().build();
    }

}


