// Caio Bernardo - 231130
// Vini Jesus - 231116
package br.com.etechas.tarefas.service;

import br.com.etechas.tarefas.entity.Tarefa;
import br.com.etechas.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TarefaService {
    @Autowired
    private TarefaRepository repository;

    public List<Tarefa> listarTarefas(){
        return repository.findAll();
    }
    public boolean deletarPorId(Long id){
        var tarefa = repository.findById(id);
        if(tarefa.isEmpty()){
            return false;
        }
        if(tarefa.get().isPending()){
            repository.deleteById(id);
            return true;
        }
        throw new RuntimeException("Tarefa em progresso ou concluída");
    }
    public void adicionarTarefa(Tarefa tarefa) {
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String dataConvert = tarefa.getDtLimite().format(formatador);
        LocalDate dataLocalDate = LocalDate.parse(dataConvert);
        tarefa.setDtLimite(dataLocalDate);
        System.out.println("STATUS: "+tarefa.getStatus());
        if (tarefa.getDtLimite().isBefore(LocalDate.now())){

            throw new RuntimeException("Data limite não pode ser menor que a atual");
        }
        repository.save(tarefa);
    }
}
