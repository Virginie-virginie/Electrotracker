import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { User } from 'src/model/User';

@Component({
  selector: 'app-acceuil-user',
  templateUrl: './acceuil-user.component.html',
  styleUrls: ['./acceuil-user.component.css']
})
export class AcceuilUserComponent implements OnInit {

  userprog: User;

  constructor(private router: Router, private route: ActivatedRoute, private userServ: UserServiceService) { 
    this.userprog = User.createBlank();
    console.log(this.userprog);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_us') != null) {
        console.log(params.get('id_us'));
        this.userServ.getUserById(parseInt(params.get('id_us'), 10)).subscribe(
          (response) => {
            this.userprog = response;
          }
        );
      }
    });
  }

  // Add
  public addUserClicked(): void {
    this.addUser(this.userprog);
  }

  public addUser(user: User): void {
    this.userServ.createUser(this.userprog).subscribe(
      (response) => {
        this.router.navigateByUrl('/fournisseurs-list');
      }
    );

  }

}
