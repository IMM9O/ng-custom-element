# Angular Element

## How To genrate custom element to use it ouside angular app

1. Add `@angular/elements`

```bash
$ ng add @angular/elements --project=[project-name]
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
$ ng g c [angular-element]
```

- Just change ViewEncapsulation to be Native

```ts
@Component({
  selector: 'angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.css'],
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
import { AngularElementComponent } from './angular-element/angular-element.component';

@NgModule({
  declarations: [AngularElementComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AngularElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(AngularElementComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name [HTML Tag]
    customElements.define('web-element', el);
  }
}
```

5. Build

Run `ng build --project=[project-name]` to build the element.
The build artifacts will be stored in the dist/[project-name] directory.

## How to use this project

1. Type `npm install` in your termainal to install packages dependencies
2. Type `npm run serve:ng-element` in your termainal to start card project
3. You code live and running at [http://localhost:4200](http://localhost:4200/#)
