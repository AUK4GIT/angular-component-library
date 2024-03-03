# NwWorkSpace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Code scaffolding

1. weather-components-ui: Angular library with one standalone component 'weather-component<nw-weather-components-ui>' and related service(weather-components-ui.service), interfaces and pipes

2. my-weather-app: Angular app that assists in developing the components in the library 'weather-components-ui'

3. web-component: Angular app that assist in converting the standalone component to a custom element that is framework agnostic.

4. Vanilla-JS-app: A javascript app to demo the itegration of the custom element.

## Build

1. Run `npm run build:lib` to build the library. The build artifacts will be stored in the `dist/weather-components-ui` directory.
2. Run `npm run build:component` to build the custom element created out of standalone web component. The build artifacts will be stored in the `dist/web-component` directory.
3. Run `npm run build:copy` to copy the main.js and polyfills.js files from `dist/web-components/browser/` directory to `Vanilla-JS-app` directory. Add the tag `nw-weather-components-ui` in the index.html file in the directory along with bootstrap css cdn and custom fonts cdn. Also, add/override the below styles
   `CSS variable to be overridden styles.scss global styles`
   `@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");`
   `--w-font-family: "Poppins",'Times New Roman',Times,serif;`
   `--w-bg-gradient: linear-gradient(120deg, #834e9c, #d42643);`

   `<nw-weather-components-ui></nw-weather-components-ui>`
   `<script>`
   `const weather_element = document.querySelector('nw-weather-components-ui');`
   `weather_element.apiKey = "APIKEY";`
   `</script>`

## Pending unit tests

## Theory

1. Create angular workspace `ng new nw-work-space --create-application=false`
2. Create an angular library in the workspace to develop the standalone components `ng g library weather-components-ui --prefix nw`
3. Create an angular application in the same workspace to develop the component in the library visually `ng g application my-weather-app`
4. Create another angular application and @angular/elements package and convert the standalone component inside the library to a custom element that is framework agnostic.
