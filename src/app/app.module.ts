import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { CardbannerComponent } from './cardbanner/cardbanner.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ProjectsComponent } from './projects/projects.component';
import { InteriorComponent } from './interior/interior.component';
import { MedicalComponent } from './medical/medical.component';
import { FarmsComponent } from './farms/farms.component';
import { Banner1Component } from './banner1/banner1.component';
import { Aboutcompany1Component } from './aboutcompany1/aboutcompany1.component';
import { Cardbanner1Component } from './cardbanner1/cardbanner1.component';
import { Clients1Component } from './clients1/clients1.component';
import { Team1Component } from './team1/team1.component';
import { Specialist1Component } from './specialist1/specialist1.component';
import { Projects1Component } from './projects1/projects1.component';
import { Banner2Component } from './banner2/banner2.component';
import { Aboutcompany2Component } from './aboutcompany2/aboutcompany2.component';
import { Clients2Component } from './clients2/clients2.component';
import { Specialist2Component } from './specialist2/specialist2.component';
import { Team2Component } from './team2/team2.component';
import { Projects2Component } from './projects2/projects2.component';
import { MedicalsfieldComponent } from './medicalsfield/medicalsfield.component';
import { LabfieldComponent } from './labfield/labfield.component';
import { CategoriesComponent } from './categories/categories.component';
import { Banner3Component } from './banner3/banner3.component';
import { FilteringComponent } from './filtering/filtering.component';
import { AllProductsComponent } from './services/all-products/all-products.component';
import { FormsModule } from '@angular/forms';
import { Banner4Component } from './banner4/banner4.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ConstructionComponent } from './construction/construction.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { EmailComponent } from './email/email.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    HerosectionComponent,
    AboutcompanyComponent,
    CardbannerComponent,
    SpecialistComponent,
    FooterComponent,
    TeamComponent,
    ClientsComponent,
    ProjectsComponent,
    InteriorComponent,
    MedicalComponent,
    FarmsComponent,
    Banner1Component,
    Aboutcompany1Component,
    Cardbanner1Component,
    Clients1Component,
    Team1Component,
    Specialist1Component,
    Projects1Component,
    Banner2Component,
    Aboutcompany2Component,
    Clients2Component,
    Specialist2Component,
    Team2Component,
    Projects2Component,
    MedicalsfieldComponent,
    LabfieldComponent,
    CategoriesComponent,
    Banner3Component,
    FilteringComponent,
    AllProductsComponent,
    Banner4Component,
    FeedbackComponent,
    ConstructionComponent,
    Feedback1Component,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
