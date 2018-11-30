<template>
  <div class="iris-helloworld-style">
    <h1>Helloworld</h1>
    <div>{{ username }}</div>
  </div>
</template>
<script>
/**
 * ### Description
 *
 * This a faboulous Helloworld component.
 * @author Benjamin Corré
 * @version 1.0.0
 *
 * ### Styling
 *
 * The following custom variables are available for styling:
 *
 * | Custom variable  | Description  | Default  |
 * |---|---|---|
 * | <b>--iris-helloworld-color</b>  | Font color of helloworld  | <i>blue</i> |
 *
 * ### Properties and Methods
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
     * @public
     */
    example() {}
  }
}
</script>
<style scoped>
.iris-helloworld-style {
  color: var(--iris-helloworld-color);
}
</style>

<docs>
### Examples

#### Simple Example

```html
<iris-helloworld username="benjamin"></iris-helloworld>
```

</docs>