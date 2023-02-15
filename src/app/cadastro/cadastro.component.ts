import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(form : NgForm ){
     form.valid ? this.router.navigate(['./sucesso']) : alert('Formulario inválido');
      console.log(form);
  }
}
