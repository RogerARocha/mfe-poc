# Angular

Web framework with OOP concepts,  maintained by Google. Used abroad for being robust, consistent and scalable. Angular 17 and 18 transformed the framework into its current modern state. These releases introduced major features such as Signals, template syntax, and the foundation for a Zoneless architecture.

## Zoneless Angular

- Better Performance

ZoneJS guesses when to update the screen by intercepting all browser events and async tasks, which often triggers unnecessary change detection. Going zoneless ensures Angular only updates when the data actually changes.

- Improved Core Web Vitals

Dropping the ZoneJS dependency significantly reduces your application's payload size and speeds up the initial startup time.

- Easier Debugging

It cleans up messy, complicated stack traces and eliminates the common bugs associated with code accidentally running "outside the Angular Zone."

## Application builder and Local server

Angular performance was limited by its heavy dependency on Webpack. By adopting the new Application Builder with esbuild and Vite, compilation times and local server initialization have become drastically faster and more efficient.

## Quick Review Fundamental Concepts

Should be familiar with OOP, JS, TS and it's decorators.

### JavaScript Classes

Classes are something like special functions, basically you can define as class expression or as class declaration.

```(javascript)

// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

```

A class element can be characterized by three aspects:

- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visibility: Public or private

Constructor
A method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

### TypeScript

Working with TS means working with JS, but with the additional TS type system.

#### Types By Inference

TS always will try to generate types for you automatically.

```(ts)

let helloWord = "String"

//inferred
const user = {
  name: "roger",
  id: 0,
};

//explicitly object shape
interface User {
  name: string;
  id: number;
}
```

#### Generics

Generics provide variables to types.

```(ts)

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//Can declare own types using generics

interface User<Type> {
  name: string;
  id: number;
  data: Type;
}
```

### Decorators

Special declaration that can be attached to classes, methods, accessors and parameters

#### Factory

Customize or create a decorator

```(ts)

function first() {
  console.log("first(): factory evaluated");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called");
  };
}

class Test{
    @first()
    @second()
    method(){}
}

//expected output
//first(): factory evaluated
//second(): factory evaluated
//second(): called
//first(): called

```

The behavior of this, first creates the decorator, then saves and finally executes, but the external first. That way this can behavior like a composition of functions (A(B(method))).

#### Evaluation

Priority order for execution

1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
3. Parameter Decorators are applied for the constructor.
4. Class Decorators are applied for the class.

#### Decorator Types and Function

- **Decorator > Used On > Parameters > Commom Uses**

- Class > Class > (constructor) > Register metadata, dependency injection, modify or extend class behavior

- Method > Method > (target, propertyKey, descriptor) > Logging, authorization, validation, caching, performance measurement, modifying method behavior

- Accessor > get / set > (target, propertyKey, descriptor) > Validate or intercept property access, modify getter/setter behavior

- Property > Property > (target, propertyKey) > Register metadata, validation rules, ORM mapping, dependency injection

- Parameter > Method/Constructor Parameter > (target, propertyKey, parameterIndex) > Mark parameters for validation, metadata collection, dependency injection

## Angular Components

Components follow the principle of modularity, acting as building blocks of a larger web page. Organizing the application into components separates the code into specific parts, making it easier to maintain and scale.

### Modularity

1. @Component decorator by Angular
2. HTML template to renders
3. CSS selector, defines how the component it's used
4. Typescript class that defines the behaviors, user input or requests.

```(ts)

// user-profile.ts
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})

export class UserProfile {
  /* component code goes here */
}

```

We can separate the components HTML and CSS in to separated files using templateUrl and styleURL.

```(ts)

// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}

<!-- user-profile.html -->
<h1>User profile</h1>
<p>This is the user profile page</p>


/* user-profile.css */
h1 {
  font-size: 3em;
}

```

We also can compose multiple components together by importing them at imports array.

```(ts)

// user-profile.ts
import {ProfilePhoto} from 'profile-photo.ts';
@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto], // HERE
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  // Component behavior is defined in here

}
```

## Signals

At Angular to manage states creating reactivity we use signals, works like a wrapper that tells angular every time the value changes.

```(ts)

import {signal} from '@angular/core';

// Create a signal with the `signal` function.
const firstName = signal('Morgan');

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update((name) => name.toUpperCase());

```

### Computed

Its a signal that its read-only, it produces based on other signals.

```(ts)

import {signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());

console.log(firstNameCapitalized()); // MORGAN

firstName.set('Jaime');
console.log(firstNameCapitalized()); // JAIME

```

## Templates

Templates Syntax are a buffed HTML, they can use data from components, set up user interactions.

- Dynamic Text
Render dynamic text directly onto the page.

```(ts)

<h1>Welcome, {{ userName() }}!</h1>

```

- Dynamic properties and attributes
Control HTML properties.

```(ts)

<button [disabled]="isProcessing()">Submit</button>

```

- User Interaction
Catch user actions like clicks, keystrokes, or mouse movements and trigger a function in your component.

```(ts)
<button (click)="saveData()">Submit</button>
```

- Conditionals
We can use @if, @else or @for blocks to add or remove elements from the DOM based on specific conditions.

```(ts)

<h1>User profile</h1>
@if (isAdmin()) {
  <h2>Admin settings</h2>
  <!-- ... -->
} @else {
  <h2>User settings</h2>
  <!-- ... -->
}


<h1>User profile</h1>
<ul class="user-badge-list">
  @for (badge of badges(); track badge.id) {
    <li class="user-badge">{{ badge.name }}</li>
  }
</ul>

```

---
All information was obtained from <https://v21.angular.dev/>
