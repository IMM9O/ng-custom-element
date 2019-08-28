# CardElement

## How To genrate custom element to use it ouside angular app

1. Add `@angular/elements`

```bash
$ ng add @angular/elements --project=card-element
```

2. Add nessry polyfills

```bash
$ npm i @webcomponents/custom-elements --save
```

- Don't forget to add it to `polyfills.ts` file

```ts
import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';
```

3. Create your component

```bash
$ ng g c card-element
```

- Just change ViewEncapsulation to be Native

```ts
@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
```

4. Change your module to use custom element

```ts
// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// Component that needs to convert it to customElement
import { CardElementComponent } from './card-element/card-element.component';

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
    customElements.define('card-element', el);
  }
}
```

## Build

Run `npm run build:card` to build the element. The build artifacts will be stored in the elements/ directory.

## How to use this project

1. Type `npm install` in your termainal to install packages dependencies
2. Type `npm run serve:ng-element` in your termainal to start card project
3. You code live and running at [http://localhost:4200](http://localhost:4200/#)
