import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: '**', component: OtherComponent },

  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
