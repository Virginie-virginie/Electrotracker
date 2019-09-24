import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/model/Fournisseur';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FournisseurServiceService } from 'src/app/services/fournisseur-service.service';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})

export class EditFournisseurComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  four_in_progress: Fournisseur;


  constructor(private router: Router, private route: ActivatedRoute, private fournisseurServ: FournisseurServiceService) {
    // this.four_in_progress = Fournisseur.createBlank();
    console.log(this.four_in_progress);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_fr') != null) {
        console.log(params.get('id_fr'));
        this.fournisseurServ.getFournisseurById(parseInt(params.get('id_fr'), 10)).subscribe(
          (response) => {
            this.four_in_progress = response;
            console.log(this.four_in_progress);
          }
        );
      }
    });
  }

  // Afficher par id
  public getFournisseurById(id: number): void {
    this.fournisseurServ.getFournisseurById(id).subscribe(
      (response) => {
        this.four_in_progress = response;
        console.log(this.four_in_progress);

      });
  }

  // Modifier le fournisseur
  public updateFournisseurClicked(): void {
    this.fournisseurServ.updateFournisseur(this.four_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/fournisseurs-list');

      }
    );
  }

}



