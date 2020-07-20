# iris-front-ui

## Project setup

```
npm install
```

### Compiles and minifies library VueJs for production

```
npm run build
```

### Compiles and minifies library WebComponents for production

```
npm run build:wc
```

### Run your unit tests

```
npm run unit
```

### Run documentation server

```
npm run styleguide
```

### Use the library in another project

```
npm install --save @u-iris/iris-front-ui
```

In your main.js, add the imports

```
import "@u-iris/iris-front-ui"
import "@u-iris/iris-front-ui/dist/iris-front-ui.css"
// If you want importing all the components from the library and use them
import IrisFronUI from 'iris-front-ui'
Vue.use(IrisFronUI)
// If you want importing and use only a few components from the library
import { IrisHelloWorld, IrisAbout } from 'iris-front-ui'
Vue.use(IrisHelloWorld)
Vue.use(IrisAbout)
// A tester
Vue.use(IrisHelloWorld, IrisAbout)
```

### How add a new component

See [Wiki](https://wikidev.groupement.systeme-u.fr/wikidev/doku.php/tran/java/socle/frontjs/librairie_commune_de_composants_ui_vuejs?s[]=iris&s[]=ui&s[]=elements).

## Generate the documentation

npm run styleguide:build

## Refer back to the documentation

https://iris-lab.github.io/iris-front-ui/

## How to change the version of the library

```
In your package.json, you can see something like this : "@u-iris/iris-front-ui": "^0.2.10".
It means major version 0, minor 2, patch 10.
And the ^ means that you allow the npm update command to update your minor and patch version.
If you want to update the major version, it is recommended to update it manually cause impacts are possible.
For example here, if you want the major version 1, you can set : "@u-iris/iris-front-ui": "^1.0.0"
```
