import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../components/create/create.component';
import { EditComponent } from '../components/edit/edit.component';
import { IndexComponent } from '../components/index/index.component';
import { ViewComponent } from '../components/view/view.component';
const routes: Routes = [
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'index',component: IndexComponent},
  {path:'create',component: CreateComponent},
  {path:'edit/:id',component: EditComponent},
  {path:'view/:id',component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
