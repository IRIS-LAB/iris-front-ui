### EXAMPLES DIFFERENT

#### SIMPLE DATE PICKER

```vue
<template>
  <iris-date-picker></iris-date-picker>
</template>
```

#### DATE PICKER PLACEHOLDER

```vue
<template>
  <iris-date-picker placeholder-date="2019-04-12"></iris-date-picker>
</template>
```

#### DATE PICKER FED WITH INTITIAL VALUE AND FORMAT

```vue
<template>
  <iris-date-picker
    label="Date Picker Label"
    date-data="2019-05-12"
    :disabled="false"
    text-field-date-format="DD.MM.YY"
  ></iris-date-picker
></template>
```

#### DATE PICKER RULES

```vue
<template>
  <iris-date-picker
    label="Date Picker Label"
    date-data="2019-05-12"
    :disabled="false"
    text-field-date-format="DD.MM.YY"
    :rules="[value => !!value || 'Mandatory']"
  ></iris-date-picker
></template>
```

#### DATE PICKER RULES VALIDATION WHEN FOCUCED LOST

```vue
<template>
  <iris-date-picker
    label="Date Picker Label"
    date-data="2019-05-12"
    :disabled="false"
    text-field-date-format="DD.MM.YY"
    :rules="[value => !!value || 'Mandatory']"
    validate-on-blur
  ></iris-date-picker
></template>
```
