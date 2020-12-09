import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectEmpleado: Empleado = new Empleado();
  empleadoArray: Empleado[] = [
    { id: 1, name: 'Richard', country: 'USA' },
    { id: 2, name: 'Fernando', country: 'USA' },
    { id: 3, name: 'Jose', country: 'USA' },
  ];
  // METODOS
  addOrEdit() { 
    if (this.selectEmpleado.id === 0) {
      this.selectEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selectEmpleado);
    }
    this.selectEmpleado = new Empleado();

  }
  openEdit(empleado) { 
    this.selectEmpleado = empleado;
  }
  delete() {
    if (confirm('Are you sure to delete it?')) {
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectEmpleado);
      this.selectEmpleado = new Empleado();
    }
  }
}
