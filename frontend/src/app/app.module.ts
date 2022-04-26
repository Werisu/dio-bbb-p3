import { FooterModule } from './components/footer/footer.module';
import { BannerModule } from './components/banner/banner.module';
import { NavtopModule } from './components/navtop/navtop.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { RegistrarVotacaoComponent } from './registrar-votacao/registrar-votacao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    VotacaoComponent,
    RegistrarVotacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    NavtopModule,
    FontAwesomeModule,
    BannerModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
