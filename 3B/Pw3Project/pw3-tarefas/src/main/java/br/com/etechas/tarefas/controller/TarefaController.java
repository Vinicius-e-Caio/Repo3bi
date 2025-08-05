package br.com.etechas.tarefas.controller;

import br.com.etechas.tarefas.entity.Tarefa;
import br.com.etechas.tarefas.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class TarefaController {
    @Autowired
    private TarefaService service;

    @GetMapping
    public List<Tarefa> listar(){
        return service.listarTarefas();
    }
}


