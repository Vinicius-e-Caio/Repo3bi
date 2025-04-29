import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  // Temp: boolean = true
  // tarefas: any[] = [{id: 1, title:"arrumar a casa", finished : "- concluída"},
  //                   {id: 2, title:"tarefa pw", finished : ""},
  //                   {id: 3, title:"arrumar as malas", finished : ""},
  //                   {id: 4, title:"comprar passagem", finished : "- concluída"},
  //                   {id: 5, title:"preparar a comida", finished : ""},
  //                   {id: 6, title:"devocional", finished : "- concluída"}];
  // showThis () {
  //   this.Temp = !this.Temp
  // }
  exibirTudo: boolean = true
  tarefas = [
    {"id": 1, "nome": "Arrumar a casa", concluida : true},
    {"id": 2, "nome": "Devocional", concluida : false},
    {"id": 3, "nome": "Estudo", concluida : true},
    {"id": 4, "nome": "Comida", concluida : false}
  ]
  onExibirTudo() {
    this.exibirTudo = !this.exibirTudo
  }
}
