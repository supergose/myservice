# MyService Sample project

[![npm version](https://badge.fury.io/js/%40supergose%2Fmyservice.svg)](https://badge.fury.io/js/%40supergose%2Fmyservice)

A sample project to demonstrate how to bundle a vuejs stand-alone service for wrapping back-end API.

## HOW-TO create a standalone Vue Service

With vue-cli >= 3.0 you have create a new vuejs project:
```
    vue create <my-service>
```

Delete components and asset folder.
Add MyService.js and put the service logic and the bundle.js in order to bundling the service
```javascript
    import MyService from './MyService'
    export default MyService

```

Modify the package.json by adding a 'license', a 'main' and a new script named 'bundle':
```json
  "name": "@supergose/myservice",
  "license": "MIT",
  "main": "./dist/myservice.common.js",
  "scripts": {
    "bundle": "vue-cli-service build --target lib --name myservice ./src/bundle.js"
  },
```

In order to build the bundle launch the new script:
```
npm run bundle
```

## HOW-TO use the component
In your application include the service in this way
```javascript
    import MyService from '@supergose/myservice'
```
and use the component in your template

```javascript
    MyService.getItems().then(response => {
      ...........
    })
```