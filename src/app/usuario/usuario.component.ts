import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm=this.fb.group({
  usuario:[null, Validators.required],
  contraseña:[null, Validators.required]

  });

  constructor(private fb: FormBuilder) {}

  

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('Gracias!');
    console.log('Formulario', this.usuarioForm);
  }
}
