import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FormFournisseurComponent } from './components/form-fournisseur/form-fournisseur.component';
import { ListFournisseurComponent } from './components/list-fournisseur/list-fournisseur.component';
import { EditFournisseurComponent } from './components/edit-fournisseur/edit-fournisseur.component';
import { FormOffreComponent } from './components/form-offre/form-offre.component';
import { ListOffreComponent } from './components/list-offre/list-offre.component';
import { EditOffreComponent } from './components/edit-offre/edit-offre.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AcceuilUserComponent } from './components/acceuil-user/acceuil-user.component';
import { EolienComponent } from './components/eolien/eolien.component';
import { ResultComponent } from './components/result/result.component';
import { AdressTosearchComponent } from './components/adress-tosearch/adress-tosearch.component';
import { AddEolienComponent } from './components/add-eolien/add-eolien.component';
import { EnvoieResultatsComponent } from './components/envoie-resultats/envoie-resultats.component';

import { GMapModule } from 'primeng/gmap';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { GaugeChartModule } from 'angular-gauge-chart';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    FormFournisseurComponent,
    ListFournisseurComponent,
    EditFournisseurComponent,
    FormOffreComponent,
    ListOffreComponent,
    EditOffreComponent,
    FormClientComponent,
    ListClientComponent,
    EditClientComponent,
    AcceuilUserComponent,
    EolienComponent,
    AddEolienComponent,
    AdressTosearchComponent,
    ResultComponent,
    EnvoieResultatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule,
    GaugeChartModule,
    ChartsModule,
    BrowserAnimationsModule,
    GMapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtUDhrA3nSUy8hzmbaCu0_hyK--DSB44Y'
    }),
    AccordionModule,
    RouterModule.forRoot([
      {
        path: 'fournisseurs',
        component: FormFournisseurComponent
      },
      {
        path: 'fournisseurs-list',
        component: ListFournisseurComponent
      },
      {
        path: 'edit-fournisseurs',
        component: EditFournisseurComponent
      },
      {
        path: 'edit-fournisseurs/:id_fr',
        component: EditFournisseurComponent
      },
      //
      {
        path: 'offres',
        component: FormOffreComponent
      },
      {
        path: 'offres-list',
        component: ListOffreComponent
      },
      {
        path: 'edit-offres',
        component: EditOffreComponent
      },
      {
        path: 'edit-offres/:id_of',
        component: EditOffreComponent
      },
      //
      {
        path: 'clients',
        component:  FormClientComponent
      },
      {
        path: 'clients-list',
        component: ListClientComponent
      },
      {
        path: 'edit-clients',
        component: EditClientComponent
      },
      {
        path: 'edit-clients/:id_cli',
        component: EditClientComponent
      },
      //
      {
        path: 'eolien',
        component: EolienComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: 'SearchAdress',
        component: AdressTosearchComponent
      },
      {
        path: 'eolien/addEolien',
        component: AddEolienComponent
      },
      {
        path: '',
        redirectTo: '/SearchAdress',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
