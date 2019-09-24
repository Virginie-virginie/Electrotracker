import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/model/Fournisseur';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FournisseurServiceService } from '../../services/fournisseur-service.service';

@Component({
  selector: 'app-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.css']
})
export class FormFournisseurComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  four_in_progress: Fournisseur;

  constructor(private router: Router, private route: ActivatedRoute, private fournisseurServ: FournisseurServiceService) {
  this.four_in_progress = Fournisseur.createBlank();
  console.log(this.four_in_progress);
}


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_Fournisseur') != null) {
        console.log(params.get('id_Fournisseur'));
        this.fournisseurServ.getFournisseurById(parseInt(params.get('id_Fournisseur'), 10)).subscribe(
          (response) => {
            this.four_in_progress = response;
          }
        );
      }
    });
  }
// Add
  public addFournisseurClicked(): void {
    this.addFournisseur(this.four_in_progress);
  }

  public addFournisseur(fournisseur: Fournisseur): void {
    this.fournisseurServ.createFournisseur(this.four_in_progress).subscribe(
      (response) => {
        this.router.navigateByUrl('/fournisseurs-list');
      }
    );

  }


}
