import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  Temp: boolean = true
  tarefas: any[] = [{id: 1, title:"arrumar a casa", finished : "- concluída"},
                    {id: 2, title:"tarefa pw", finished : ""},
                    {id: 3, title:"arrumar as malas", finished : ""},
                    {id: 4, title:"comprar passagem", finished : "- concluída"},
                    {id: 5, title:"preparar a comida", finished : ""},
                    {id: 6, title:"devocional", finished : "- concluída"}];
  showThis () {
    this.Temp = !this.Temp
  }
}
