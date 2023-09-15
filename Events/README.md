# Events

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run first `npm run server`. this gonna create a call  on port 8808... (Listening on port 8808...)

and the next tab (other tab) run `npm start`
 
 You can change the setting on proxy.conf.json file:
{
  "/api": {
    "target": "http://localhost:8808",
    "secure": false,
    "changeOrigin": true,
     "logLevel": "debug"
  }
}


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
