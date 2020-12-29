import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-myynti',
  templateUrl: './myynti.component.html',
  styleUrls: ['./myynti.component.css']
})
export class MyyntiComponent implements OnInit {
  faCoffee = faCoffee;
  @Input() ohje: {tyo: string, poydanNumero: string, myyntiMaara: string};

  poydanNumero = '';
  myyntiMaara = '';
  
  constructor() {
    console.log()
   }

  ngOnInit(): void {
  }

}
