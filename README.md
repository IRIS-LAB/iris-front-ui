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

### Run your tests

```
npm run test:unit
```

### Run documentation server

```
npm run styleguide
```

### Use the library in another project

```
npm install --save iris-front-ui
```

In your main.js, add the imports

```
import 'iris-front-ui'
import 'iris-front-ui/dist/iris-front-ui.css'
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
