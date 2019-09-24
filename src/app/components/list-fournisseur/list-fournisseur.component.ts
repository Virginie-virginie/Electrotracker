import { Component, OnInit, Input } from '@angular/core';
import { FournisseurServiceService } from 'src/app/services/fournisseur-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Fournisseur } from '../../../model/Fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs: Fournisseur[];

  // tslint:disable-next-line: variable-name
  four_in_progress: Fournisseur;

  constructor(private router: Router, private route: ActivatedRoute, private fournisseurServ: FournisseurServiceService) {

    this.getAllFournisseur();
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
  // Obtenir l'id des fournisseurs
  public getFournisseurById(id: number): void {
    this.fournisseurServ.getFournisseurById(id).subscribe(
      (response) => {
        this.four_in_progress = response;
        console.log(this.four_in_progress);

      });
  }

  // Afficher la liste de fournisseur
  public getAllFournisseur(): void {
    this.fournisseurServ.getAllFournisseurs().subscribe((response) => {
      // tslint:disable-next-line: no-string-literal
      console.log(response['_body']);
      this.fournisseurs = response;
      console.log(this.fournisseurs);
    });
  }

  // Redirection vers le formulaire d'ajout
  public addFournisseurClicked() {
    console.log(JSON.stringify(this.four_in_progress, null, 2));
    this.fournisseurs.unshift(this.four_in_progress);
    this.four_in_progress = Fournisseur.createBlank();
  }

  addNewFournisseurPressed(): void {
    this.router.navigateByUrl('/fournisseurs');
  }

    
  addNewEoliennePressed(): void {
    this.router.navigateByUrl('eolien/addEolien');
  }


  // Supprimer un fournisseur
  public deleteFournisseurPressed(fournisseur: Fournisseur): void {
    this.fournisseurServ.deleteFournisseur(fournisseur).subscribe(
      (response) => {
        this.getAllFournisseur();
      }
    );
  }

  // Redirection vers le formulaire de modification
  public updateFournisseurClicked(fournisseur: Fournisseur): void {
    this.router.navigateByUrl('/edit-fournisseurs/' + fournisseur.id_Fournisseur);

  }
}



