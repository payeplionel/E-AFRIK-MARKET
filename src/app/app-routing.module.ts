import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { ModesComponent } from './modes/modes.component';

const routes: Routes = [
  {path: '', redirectTo: 'plats', pathMatch: 'full'},
  {path: 'plats', component: HomePresentationComponent},
  {path: 'modes', component: ModesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
