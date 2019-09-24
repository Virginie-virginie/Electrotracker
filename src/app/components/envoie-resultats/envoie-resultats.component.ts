import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { NotifierService, NotifierOptions } from 'angular-notifier';
import { Mail } from 'src/model/mail';


@Component({
  selector: 'app-envoie-resultats',
  templateUrl: './envoie-resultats.component.html',
  styleUrls: ['./envoie-resultats.component.css']
})
export class EnvoieResultatsComponent implements OnInit {

  

  private readonly notifier: NotifierService;

  mail: Mail;
  constructor(private mailService: MailService, notifierService: NotifierService) {
    this.mail = Mail.createBlank();
    this.notifier = notifierService;
  }

  ngOnInit() {
  }


  public envoieMailClicked(): void {
    this.envoieMail(this.mail);
    this.notifier.show( {
      type: 'success',
      message: 'You are awesome! I sent you a email!'
    } );
  }

  public envoieMail(mail: Mail): void {
    console.log('eeeeeeeeeeee');
    console.log(mail);
    this.mail.content = 'holaaaaa';
    this.mail.subject = 'trabajar trabajar';
    this.mailService.envoieMail(mail).subscribe(
      (response) => {
      }
    );
  }
}
