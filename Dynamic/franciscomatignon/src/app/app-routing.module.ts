import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path:'work', component:WorkComponent},
  { path:'about', component:AboutComponent},
  // Wildcard route
  { path: '**', redirectTo:'work', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
