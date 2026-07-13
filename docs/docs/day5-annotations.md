# Generating components

`ng generate component <name> --project shared-ui`

Error at tsconfig, rootDir not setted

Adding new scripts to run more easily root at package.json

```(json)
    "build:shared": "ng build shared-ui",
    "start:all": "npx lerna run start --parallel",
    "build:all": "npm run build:shared && npx lerna run build"
```

--parallel tag because lerna executes in order and waits the other finish to initiate, but with the ng serve they keep active so the other won't initiate. With parallel it starts all at the same time so we can see.

## Starting by the shared-ui

cleaning all the placeholders

starting on button gonna pass through all

`ng-content` to a better reusability

Importing to this components at host

## host

removing template, create a html to accomodate this

adding routing for the other mfe ( can be better I think, lack of indenpendency)

adding some css
