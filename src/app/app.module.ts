import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { CardElementComponent } from './card-element/card-element.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [CardElementComponent],
  entryComponents: [CardElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CardElementComponent, { injector: this.injector });
    customElements.define('facebook-card', el);
   }
 }
