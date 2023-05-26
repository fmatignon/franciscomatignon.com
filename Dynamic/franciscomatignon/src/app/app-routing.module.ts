import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path:'', redirectTo: '/work', pathMatch:'full'},
  { path:'work', title:'A - rendering studio', component:WorkComponent},
  { path:'work/:*', redirectTo:'/404', pathMatch:'full'},
  { path:'about', title:'Francisco Matignon - About', component:AboutComponent},
  { path:'404', title:'404 not found', component:NoPageComponent},
  { path:':project', component:ProjectdetailsComponent},
  { path:':*/:*', redirectTo:'/404', pathMatch:'full'},
  { path:':*:/:*', redirectTo:'/404', pathMatch:'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
