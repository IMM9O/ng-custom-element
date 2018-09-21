# CardElement

How To genrate custom element to use it ouside angular app

First add `@angular/elements`

```bash
$ ng add @angular/elements --project=card-element
```

Second add nessry polyfills

```bash
$ npm i @webcomponents/custom-elements --save
```

Don't forget to add it to `polyfills.ts` file

```ts
import "@webcomponents/custom-elements/src/native-shim";
import "@webcomponents/custom-elements/custom-elements.min";
```

Third create your component

```bash
$ ng g c card-element
```

Just change ViewEncapsulation to be Native

```ts
@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
```

Finnaly change your module to use custom element

```ts
// Angular imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";

// Component that needs to convert it to customElement
import { CardElementComponent } from "./card-element/card-element.component";

@NgModule({
  declarations: [CardElementComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [CardElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CardElementComponent, {
      injector: this.injector
    });
    customElements.define("card-element", el);
  }
}
```

### Build

Run `npm run build:elements` to build the element. The build artifacts will be stored in the elements/ directory.
