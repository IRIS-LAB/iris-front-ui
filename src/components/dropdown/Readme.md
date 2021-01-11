### Examples

#### JUST THE ARROW

```vue
<template>
  <div style="display:flex">
    <!-- No avatar, no username, no tooltip, default dropdown menu -->
    <iris-logout-dropdown></iris-logout-dropdown>
  </div>
</template>
```

#### AVATAR WITH TOOLTIP AND ADDITIONAL CONTENT

```vue
<template>
  <div style="display:flex">
    <!-- English labels, avatar with initials, default tooltip, additional menus in the dropdown menu without username -->
    <iris-logout-dropdown language="en" :tooltip="true" v-on:logoutEvent="">
      <template slot="avatar">
        <iris-avatar username="Enrico Nacias"></iris-avatar>
      </template>
      <template slot="content">
        <el-dropdown-item v-on:click.native>More</el-dropdown-item>
        <el-dropdown-item v-on:click.native>A Bit More</el-dropdown-item>
      </template>
    </iris-logout-dropdown>
  </div>
</template>
```

#### AVATAR WITH IMAGE, USERNAME AND NO ARROW

```vue
<template>
  <div style="display:flex">
    <!-- Avatar with image, tooltip with a different text, no arrow, default dropdown menu with username -->
    <iris-logout-dropdown
      :arrow="false"
      username="Homer Simpson"
      src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png"
      :tooltip="true"
      tooltipContent="Déconnexion utilisateur"
      v-on:logoutEvent=""
    >
      <template slot="avatar">
        <iris-avatar
          src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png"
        ></iris-avatar>
      </template>
    </iris-logout-dropdown>
  </div>
</template>
```
