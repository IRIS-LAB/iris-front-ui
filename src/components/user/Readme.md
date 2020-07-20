### Examples

#### Simple Example

```vue
<template>
  <div style="display:flex">
    <iris-avatar backgroundColor="#8D0036" :rounded="false"></iris-avatar>
    <iris-avatar username="Homer Simpson" :size="60"></iris-avatar>
    <iris-avatar
      username="Homer Simpson"
      initials="MS"
      backgroundColor="#00FFB6"
      color="#000027"
      :size="75"
    ></iris-avatar>
    <iris-avatar
      src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png"
      :size="100"
    ></iris-avatar>
  </div>
</template>
```
