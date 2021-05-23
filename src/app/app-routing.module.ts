import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule) },
  { path: 'info/:id', loadChildren: () => import('./pages/info-details/info-details.module').then(m => m.InfoDetailsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
