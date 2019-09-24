import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Client_F } from 'src/model/Client_F';
import { Offre } from 'src/model/Fournisseur';
import { OffresServiceService } from 'src/app/services/offres-service.service';
import { Adresse } from '../../../model/Client_F';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  clientprog: Client_F;

  offre: Offre;

  ad: Adresse;

  constructor(private router: Router, private route: ActivatedRoute, private clientServ: ClientServiceService, 
              private offreServ: OffresServiceService) {
    this.clientprog = Client_F.createBlank();
    console.log(this.clientprog);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.offreServ.getAllOffre().subscribe(
        (resp) => {
          this.offre = resp;
          console.log('eeeeeee');
          console.log(resp);
        }
      );
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


// Add
public addClientClicked(): void {
  console.log('eeeeeeeeeee');
  console.log(this.clientprog);

  this.addClient(this.clientprog);
}

public addClient(client: Client_F): void {
  this.clientServ.createClient(this.clientprog).subscribe(
    (response) => {
      this.router.navigateByUrl('/clients-list');
    }
  );

}

}
