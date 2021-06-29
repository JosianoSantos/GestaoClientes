import {Component, OnInit} from '@angular/core';
import {Cliente} from 'src/app/models/cliente.model';
import {ClienteService} from 'src/app/services/cliente.service';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'add-cliente',
  templateUrl: './cliente-form.component.html',
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '' ,
    idade: '',
    cidade: ''
  };

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getDetalhesCliente(this.route.snapshot.params.id);
    }
  }

  isValidFormSubmitted = false;

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.cliente = form.value;
    this.salvarCliente();
    form.resetForm();
  }

  getDetalhesCliente(id: string): void {
    this.clienteService.getDetalhesCliente(id)
      .subscribe(
        (data: any) => {
          this.cliente = data;
        },
        (error: any) => {
          this.toastr.error("Não foi possível buscar os dados do cliente, tente novamente.");
        });
  }

  salvarCliente(): void {
    const data = {
      nome: this.cliente.nome,
      idade: this.cliente.idade,
      cidade: this.cliente.cidade
    };

    if (this.cliente.id) {

      this.clienteService.update(this.cliente.id, data)
        .subscribe(
          response => {
            this.router.navigate(['/clientes']).then(() => {
              this.toastr.success('Cliente ' + this.cliente.nome + ' atualizado(a) com sucesso.')
            })
          },
          error => {
            this.toastr.error("Não foi possível atualizar o cliente, tente novamente.");
          });

    } else {

      this.clienteService.create(data)
        .subscribe(
          response => {
            this.router.navigate(['/clientes']).then(() => {
              this.toastr.success('Cliente ' + this.cliente.nome + ' cadastrado(a) com sucesso.')
            })
          },
          error => {
            this.toastr.error("Não foi possível cadastrar o cliente, tente novamente.");
          });

    }
  }

}
