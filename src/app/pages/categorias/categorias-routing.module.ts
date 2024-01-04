import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriaListaComponent} from "./categoria-lista/categoria-lista.component";
import {CategoriaFormComponent} from "./categoria-form/categoria-form.component";

const routes: Routes = [
  { path:'', component:CategoriaListaComponent} ,
  { path:'novo', component: CategoriaFormComponent },
  { path:'id/editar', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
