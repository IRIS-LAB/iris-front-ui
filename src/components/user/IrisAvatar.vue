<template>
  <avatar
    :username="username"
    :src="src"
    :initials="initials"
    :backgroundColor="backgroundColor"
    :color="color"
    :size="size"
    :rounded="rounded"
  ></avatar>
</template>
<script>
import { Avatar } from 'vue-avatar'
/**
 * ### Description
 *
 * This component display an avatar image.
 * If none is provided, fallback to the user initials.
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
  components: { Avatar },
  props: {
    /**
     * The user name that will be used to compute user initial.
     */
    username: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Force the displayed initials by overriding the computed ones.
     */
    initials: {
      type: String,
      required: false
    },
    /**
     * Path to the avatar image to display.
     */
    src: {
      type: String,
      required: false
    },
    /**
     * The avatar background color to use if no image is provided. If none is specified, a background color will be picked depending on the user name length.
     */
    backgroundColor: {
      type: String,
      required: false
    },
    /**
     * The font color used to render the user initials. If none is provided, the background color is used to compute the font color.
     */
    color: {
      type: String,
      required: false
    },
    /**
     * The avatar size in pixel.
     */
    size: {
      type: Number,
      required: false,
      default: 50
    },
    /**
     * True if the avatar must be rounded.
     */
    rounded: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<docs>
### Examples

#### Simple Example

```vue
<div style="display:flex">
<iris-avatar backgroundColor="#8D0036" :rounded="false"></iris-avatar>
<iris-avatar username="Homer Simpson" :size="60"></iris-avatar>
<iris-avatar username="Homer Simpson" initials="MS" backgroundColor="#00FFB6" color="#000027" :size="75" ></iris-avatar>
<iris-avatar src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png" :size="100"></iris-avatar>
</div>
```
</docs>
