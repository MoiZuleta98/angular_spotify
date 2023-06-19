import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''  //Declaramos un decorador de un input. El decorador marca un campo de clase como propiedad de entrada y proporciona metadatos de configuración 

  constructor() {  }

  ngOnInit(): void {
  }

}