import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondcompoComponent } from './secondcompo/secondcompo.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipecompComponent } from './pipecomp/pipecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondcompoComponent,
    BindingComponent,
    PipecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
