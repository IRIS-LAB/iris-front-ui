### Examples

#### Prerequisites

In your `main.js`, create a constant in a global mixins to serialize `package.json`. You can add information about the application in the another constants.

```html
<script>
  Vue.mixin({
    data: function() {
      return {
        PACKAGE_JSON: require('../package.json'),
        APPLICATION_JSON: require('../static/example-application-information.json')
      }
    }
  })
</script>
```

#### Object entries Example

```vue
<template>
  <iris-about
    :package-json="PACKAGE_JSON"
    :application-json="APPLICATION_JSON"
    language="fr"
  ></iris-about>
</template>
```

#### String entries Example

```vue
<template>
  <iris-about
    application-name="Another application"
    application-description="The description of the application"
    application-company="U GIE Iris"
    application-copyright-year="2018"
    application-engines-node="5.0"
    application-engines-npm="7.0"
    application-team="AIL"
    language="en"
  ></iris-about>
</template>
```
