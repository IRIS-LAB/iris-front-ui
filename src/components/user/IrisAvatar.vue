<template>
  <div class="iris-user-style">
    <avatar username="Jane Doe"></avatar>
  </div>
</template>
<script>
import IrisHelloWorld from '../helloworld/IrisHelloWorld'
/**
 * ### Description
 *
 * This a faboulous Helloworld component.
 * @author Alan Duchêne
 * @version 1.0.0
 *
 * ### Styling
 *
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-avatar',
  components: { IrisHelloWorld },
  props: {},
  methods: {}
}
</script>
<style scoped>
</style>

<docs>
### Examples

#### Simple Example

```vue
<iris-avatar username="Alan Duchêne"></iris-avatar>
```
</docs>