import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { HomeComponent } from './component/home/home.component';
import { InputComponent } from './component/input/input.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
  },
  {
    path: 'autoComplete',
    component: AutocompleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
