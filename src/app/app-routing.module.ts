import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'eb',
    pathMatch: 'full'
  },
  {
    path: 'eb',
    loadChildren: () => import('./escritorio/escritorio.module').then(e => e.EscritorioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
