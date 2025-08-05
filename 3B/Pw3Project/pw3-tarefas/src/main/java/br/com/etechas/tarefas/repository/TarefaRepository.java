package br.com.etechas.tarefas.repository;


import br.com.etechas.tarefas.entity.Tarefa;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TarefaRepository extends JpaRepository<Tarefa, Long>{
}
