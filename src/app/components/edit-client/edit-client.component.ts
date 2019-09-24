import { Component, OnInit } from '@angular/core';
import { Client_F } from '../../../model/Client_F';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  clientprog: Client_F;

  constructor(private router: Router, private route: ActivatedRoute, private clitnServ: ClientServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_cli') != null) {
        console.log(params.get('id_cli'));
        this.clitnServ.getClientById(parseInt(params.get('id_cli'), 10)).subscribe(
          (response) => {
            this.clientprog = response;
            console.log(this.clientprog);
          }
        );
      }
    });
  }

  // Afficher par id
  public getClientById(id: number): void {
    this.clitnServ.getClientById(id).subscribe(
      (response) => {
        this.clientprog = response;
        console.log(this.clientprog);

      });
  }

  // Modifier le fournisseur
  public updateClientClicked(): void {
    this.clitnServ.updateClient(this.clientprog).subscribe(
      (response) => {
        this.router.navigateByUrl('/offres-list');

      }
    );
  }

}
