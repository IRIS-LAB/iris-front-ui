<template>
  <div>
    <h1>Helloworld2 </h1>
    <div>{{ username }}</div>
  </div>
</template>
<script>
/**
 * Helloworld2 component
 * @author Benjamin Corré
 */
export default {
  name: 'iris-helloworld2',
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
     * This is another example method
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
<iris-helloworld2 username="benjamin"></iris-helloworld2>
```

</docs>