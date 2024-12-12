# Angular Showcase Sample Configuration

This application includes a sample of the Angular Showcase template along with essential configurations and router integration, designed to facilitate a seamless start for your own projects.

The Angular showcase demo can be accessed at the following location:

[https://npmci.syncfusion.com/development/showcase/angular/sample_template/](https://npmci.syncfusion.com/development/showcase/angular/sample_template/)

## package.json

* Replace the name from `@syncfusion/ej2-angular-sample_template` with `@syncfusion/ej2-angular-{sample-name}`.
* Replace the description from `Essential JS 2 - Sample name` with `Essential JS 2 - {Your sample-Name}`.
* Place the required ej2 component dependencies inside the `dependencies` section.

## angular.json

* Search and replace the `ej2-angular-showcase-template` with `ej2-angular-{sample-name}` in the angular.json file.
* Change the `outputPath` value to `dist/` in the angular.json file.

## Installation

To install the application dependencies, use the following command:

```sh
npm install
```

## Build the application

To Build the application, use the below command,

```sh
ng build
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Run the application

To run the sample in the browser with live reload, use the following command:

```sh
ng serve
```
