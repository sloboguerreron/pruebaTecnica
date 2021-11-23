import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent implements OnInit {
  title = 'Prueba Tecnica';

  constructor() { }
  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.contactos.forEach(element => console.log(element));
  }

  contactos= [
    {nombre:"Jhon", apellido:"Castaño"},
    {nombre:"Alex", apellido:"Lopez"},
    {nombre:"Maria", apellido:"Cardona"}
  ];
  model: any = {};
  model2: any = {};

  addEmployee() {
    this.contactos.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.contactos.splice(i, 1);

  }

  myValue;
  editEmployee(k) {
    this.model2.nombre = this.contactos[k].nombre;
    this.model2.apellido = this.contactos[k].apellido;
    this.myValue = k;

  }
  updateEmployee() {
    let k = this.myValue;
    for (let i = 0; i < this.contactos.length; i++) {
      if (i == k) {
        this.contactos[i] = this.model2;
        this.model2 = {};
      }

    }

  }
}
