import { Component, OnInit } from '@angular/core';
import { OffresServiceService } from 'src/app/services/offres-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Offre, Origine } from 'src/model/Offre';
// import { OrigineServiceService } from 'src/app/services/origine-service.service';
import { Fournisseur } from '../../../model/Offre';
import { FournisseurServiceService } from '../../services/fournisseur-service.service';

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.css']
})
export class FormOffreComponent implements OnInit {

  offreprog: Offre;

  fournisseur: Fournisseur;


  constructor(private fourServ: FournisseurServiceService, private router: Router,
              private route: ActivatedRoute, private offreServ: OffresServiceService) {
    this.offreprog = Offre.createBlank();
    console.log(this.offreprog);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.fourServ.getAllFournisseurs().subscribe(
        (resp) => {
          this.fournisseur = resp;
          console.log('eeeeeee');
          console.log(resp);
        }
      );

      if (params.get('Offre_id') != null) {
        console.log(params.get('Offre_id'));
        this.offreServ.getOffreById(parseInt(params.get('Offre_id'), 10)).subscribe(
          (response) => {
            this.offreprog = response;

          }
        );
      }
    });
  }

  // Add
  public addOffreClicked(): void {
    this.addOffre(this.offreprog);
  }

  public addOffre(offre: Offre): void {

    this.offreServ.createOffre(this.offreprog).subscribe(
      (response) => {

        this.router.navigateByUrl('/offres-list');
      }
    );

  }

  removeOrigineAtIndex(index): void {
    this.offreprog.origines.splice(index, 1);
  }

  addOriginePressed(): void {
    if (!this.offreprog.origines) {
      this.offreprog.origines = [{ /* id_origine: null, typeOrigine : null,*/ nucleaire: null, hydraulique: null, gaz: null, eolien: null,
                                   solaire: null, biomasse: null, charbon: null}];
        } else {
          this.offreprog.origines.push ({ /*id_origine: null, typeOrigine : null,*/ nucleaire: null, hydraulique: null, gaz: null, 
            eolien: null, solaire: null, biomasse: null, charbon: null});
          console.log('AAAAAAAAh');
          }

  }



}
