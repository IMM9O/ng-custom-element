import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { NgCardElementComponent } from './ng-card-element/ng-card-element.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NgCardElementComponent],
  entryComponents: [NgCardElementComponent] // use entryComponents array instaed of bootstrap because it will be added dynamically.
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
  }
}
