import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { InteriorComponent } from './interior/interior.component';
import { MedicalComponent } from './medical/medical.component';
import { FarmsComponent } from './farms/farms.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'construction', component: ConstructionComponent },
  { path: 'interior', component: InteriorComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'category/:categoryName', component: CategoriesComponent },
  { path: '**', component: WelcomeComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
