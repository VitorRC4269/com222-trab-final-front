import { Component, OnInit } from '@angular/core';

import { Emprestimo } from 'src/app/models/emprestimo.model';
import { EmprestimoService } from 'src/app/services/emprestimo.service';

@Component({
  selector: 'app-atrasado-emprestimo',
  templateUrl: './atrasado-emprestimo.component.html',
  styleUrls: ['./atrasado-emprestimo.component.css']
})
export class AtrasadoEmprestimoComponent implements OnInit {

  emprestimos?: Emprestimo[];
  currentEmprestimo: Emprestimo = {};
  currentIndex = -1;
  isbn = '';

  constructor(private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.retrieveEmprestimo();
  }

  retrieveEmprestimo(): void {
    

      this.emprestimoService.findAtrasados().subscribe(data => {
  
        
        this.emprestimos = data;
      });
    

  }

  refreshList(): void {
    this.retrieveEmprestimo();
    this.currentEmprestimo = {};
    this.currentIndex = -1;
  }

  setActiveEmprestimo(emprestimo: Emprestimo, index: number): void {
    this.currentEmprestimo = emprestimo;
    this.currentIndex = index;
  }

 searchIsbn():void{}
}

