import { createCustomElement } from '@angular/elements';
import { CardElementComponent } from './card-element/card-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

@NgModule({
  declarations: [CardElementComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [CardElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CardElementComponent, { injector: this.injector });
    customElements.define('card-element', el);
   }
 }
