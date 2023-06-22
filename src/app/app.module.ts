import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostRoutingModule } from './post/post-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { ViewComponent } from './components/view/view.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent,

  ],
  imports: [
    BrowserModule,
    PostRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
