import { createCustomElement } from '@angular/elements';
import { CardElementComponent } from './card-element/card-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

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
    customElements.define('post-cell', el);
   }
 }
