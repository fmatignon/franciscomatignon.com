import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path:'', title:'Francisco Matignon - Work', component:WorkComponent},
  { path:'work', title:'Francisco Matignon - Work', component:WorkComponent},
  { path:'about', title:'Francisco Matignon - About', component:AboutComponent},
  { path:':project', title:':project', component:ProjectdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
