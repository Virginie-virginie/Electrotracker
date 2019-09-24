import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OffresServiceService } from 'src/app/services/offres-service.service';
import { Offre } from 'src/model/Offre';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent implements OnInit {

  offrprog: Offre;

  constructor(private router: Router, private route: ActivatedRoute, private offreServ: OffresServiceService) {
    // this.four_in_progress = Fournisseur.createBlank();
    console.log(this.offrprog);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_of') != null) {
        console.log(params.get('id_of'));
        this.offreServ.getOffreById(parseInt(params.get('id_of'), 10)).subscribe(
          (response) => {
            this.offrprog = response;
          }
        );
      }
    });
  }

  addOriginePressed(): void {
    if (!this.offrprog.origines) {
      this.offrprog.origines = [{ /* id_origine: null, typeOrigine : null,*/ nucleaire: null, hydraulique: null, gaz: null, eolien: null,
                                   solaire: null, biomasse: null, charbon: null}];
        } else {
          this.offrprog.origines.push ({ /*id_origine: null, typeOrigine : null,*/ nucleaire: null, hydraulique: null, gaz: null, 
            eolien: null, solaire: null, biomasse: null, charbon: null});
          console.log('AAAAAAAAh');
          }
        }

  // Afficher par id
  public getOffreById(id: number): void {
    this.offreServ.getOffreById(id).subscribe(
      (response) => {
        this.offrprog = response;
        console.log(this.offrprog);

      });
  }

  // Modifier l'offre'
  public updateOffreClicked(): void {
    this.offreServ.updateOffre(this.offrprog).subscribe(
      (response) => {
        this.router.navigateByUrl('/offres-list');

      }
    );
  }

}
