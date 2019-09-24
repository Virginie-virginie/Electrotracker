import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EolienServiceService } from 'src/app/services/eolien-service.service';
import { Eolien } from 'src/model/eolien';

@Component({
  selector: 'app-add-eolien',
  templateUrl: './add-eolien.component.html',
  styleUrls: ['./add-eolien.component.css']
})
export class AddEolienComponent implements OnInit {

  eolien: Eolien;
  constructor(private router: Router, private eolienService: EolienServiceService) {
    this.eolien = Eolien.createBlank();

  }

  ngOnInit() {

  }

  public addNewEolien(): void {
    this.eolienService.addNewEolien(this.eolien).subscribe(
      (response) => {
        this.eolien = response;

      }

    );
    this.router.navigateByUrl('/eolien');
  }

}
