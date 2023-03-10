import { ConsultaCepService } from "./../service/consulta-cep.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultacepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    form.valid
      ? this.router.navigate(["./sucesso"])
      : alert("Formulario inválido");
    console.log(form.controls);
  }

  consultaCEP(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if ( cep !== ''){
      this.consultacepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f)
        
      })
    }
  }

  populandoEndereco(dados : any, f : NgForm){
    f.form.patchValue({
      endereco:dados.logradouro,
      complemento:dados.complemento, 
      bairro:dados.bairro,
      cidade:dados.localidade,
      estado:dados.uf
    })
  }
}
