import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VacancyByCompanyComponent } from './vacancy-by-company/vacancy-by-company.component';
import { RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { RegistrComponent } from './registr/registr.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    
    AppComponent,
    VacancyByCompanyComponent,
    CompaniesComponent,
    RegistrComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: MainComponent},
      { path: "Login", component: LoginComponent},
      { path: "Registration", component: RegistrComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
