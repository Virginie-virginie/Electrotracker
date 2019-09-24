import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Client_F } from 'src/model/Client_F';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientf: Client_F[];

  clientprog: Client_F;

  constructor(private router: Router, private route: ActivatedRoute, private clientServ: ClientServiceService) { 
    this.getAllClients();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_cli') != null) {
        console.log(params.get('id_cli'));
        this.clientServ.getClientById(parseInt(params.get('id_cli'), 10)).subscribe(
          (response) => {
            this.clientprog = response;
          }
        );
      }
    });
  }

  // Obtenir l'id des fournisseurs
  public getClientById(id: number): void {
    this.clientServ.getClientById(id).subscribe(
      (response) => {
        this.clientprog = response;
        console.log(this.clientprog);

      });
  }

  // Afficher la liste de fournisseur
  public getAllClients(): void {
    this.clientServ.getAllClients().subscribe((response) => {
      // tslint:disable-next-line: no-string-literal
      console.log(response['_body']);
      this.clientf = response;
      console.log(this.clientf);
    });
  }

  // Redirection vers le formulaire d'ajout
  public addClientClicked() {
    console.log(JSON.stringify(this.clientprog, null, 2));
    this.clientf.unshift(this.clientprog);
    this.clientprog = Client_F.createBlank();
  }

  addNewClientPressed(): void {
    this.router.navigateByUrl('/clients');
  }

    // Supprimer un fournisseur
    public deleteClientPressed(client: Client_F): void {
      this.clientServ.deleteClient(client).subscribe(
        (response) => {
          this.getAllClients();
        }
      );
    }

    // Redirection vers le formulaire de modification
    public updateClientClicked(clients: Client_F): void {
      this.router.navigateByUrl('/edit-clients/' + clients.id_Client);

    }

}
