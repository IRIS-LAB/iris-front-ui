<template>
  <div>
    <h1>Helloworld</h1>
    <div>{{ username }}</div>
  </div>
</template>
<script>
/**
 * Helloworld component
 * @author Benjamin Corré
 */
export default {
  name: 'iris-helloworld',
  props: {
    /**
     * username to display
     */
    username: {
      type: String,
      default: 'benjamin'
    }
  },
  methods: {
    /**
     * This is an example method
     *
     * @param {string} param
     * @public
     */
    example(param) {}
  }
}
</script>

<docs>
### Examples

#### Simple Example

```jsx
<iris-helloworld username="benjamin"></iris-helloworld>
```

</docs>