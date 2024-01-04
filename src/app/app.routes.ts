import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'categorias',
  loadChildren: () => import('./pages/categorias/categorias.module').then(m => m.CategoriasModule)
}];
