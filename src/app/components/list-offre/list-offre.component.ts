import { Component, OnInit } from '@angular/core';
import { OffresServiceService } from 'src/app/services/offres-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Offre, Fournisseur } from '../../../model/Offre';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {

  offre: Offre[];

  offreprog: Offre;

  fournisseur: Fournisseur;

  constructor(private router: Router, private route: ActivatedRoute, private offreServ: OffresServiceService) {
    this.getAllOffre();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_of') != null) {
        console.log(params.get('id_of'));
        this.offreServ.getOffreById(parseInt(params.get('id_of'), 10)).subscribe(
          (response) => {
            this.offreprog = response;
          }
        );
      }
    });
  }

  // Obtenir l'id des offres
  public getOffreById(id: number): void {
    this.offreServ.getOffreById(id).subscribe(
      (response) => {
        this.offreprog = response;
        console.log(this.offreprog);

      });
  }

  // Afficher la liste de fournisseur
  public getAllOffre(): void {
    this.offreServ.getAllOffre().subscribe((response) => {
      // tslint:disable-next-line: no-string-literal
      // console.log(response['_body']);
      this.offre = response;
      console.log(this.offre);
    });
  }

  // Redirection vers le formulaire d'ajout
  public addOffreClicked() {
    console.log(JSON.stringify(this.offreprog, null, 2));
    this.offre.unshift(this.offreprog);
    this.offreprog = Offre.createBlank();
  }

  addNewOffrePressed(): void {
    this.router.navigateByUrl('/offres');
  }

  // Supprimer un fournisseur
  public deleteOffrePressed(offre: Offre): void {
    this.offreServ.deleteOffre(offre).subscribe(
      (response) => {
        this.getAllOffre();
      }
    );
  }

  // Redirection vers le formulaire de modification
  public updateOffreClicked(offre: Offre): void {
    this.router.navigateByUrl('/edit-offres/' + offre.id);
  }

}
