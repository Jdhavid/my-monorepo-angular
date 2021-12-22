import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const appComponent = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('second-element', appComponent);

  }

 }
