import { Component, OnInit } from '@angular/core';

import { Exemplar } from 'src/app/models/exemplar.model';
import { ExemplarService } from 'src/app/services/exemplar.service';

@Component({
  selector: 'app-publicacao-list',
  templateUrl: './publicacao-list.component.html',
  styleUrls: ['./publicacao-list.component.css']
})
export class PublicacaoListComponent implements OnInit {

  exemplares?: Exemplar[];
  currentExemplar: Exemplar = {};
  currentIndex = -1;
  isbn = '';

  constructor(private exemplarService: ExemplarService) { }

  ngOnInit(): void {
    this.retrieveExemplar();
  }

  retrieveExemplar(): void {

  
    if (this.isbn) {
      console.log(this.isbn);
      this.exemplarService.findAllByIsbn(this.isbn).subscribe(data => {

      
        this.exemplares = data;
      });
    } else {
      this.exemplares = [];
      this.currentExemplar = {};
    }


  }

  refreshList(): void {
    this.retrieveExemplar();
    this.currentExemplar = {};
    this.currentIndex = -1;
  }

  setActiveExemplar(exemplar: Exemplar, index: number): void {
    this.currentExemplar = exemplar;
    this.currentIndex = index;
  }

  searchIsbn(): void { }
}

