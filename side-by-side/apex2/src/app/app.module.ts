import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, SidebarComponent],
  entryComponents: [
    SidebarComponent
  ]
})
export class AppModule {
  constructor(private injector : Injector){
    const el = createCustomElement(SidebarComponent, { injector });
    customElements.define('app-sidebar', el);
  }
  ngDoBootstrap(){}

}
