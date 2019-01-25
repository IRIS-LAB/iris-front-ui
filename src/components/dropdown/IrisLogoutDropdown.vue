<template>
  <el-tooltip
    effect="light"
    placement="bottom"
    :disabled="!tooltip"
    :content="tooltipContent != '' ? tooltipContent : this.i18n.user"
  >
    <el-dropdown :style="arrow ? 'margin-right: 20px;' : ''" trigger="click">
      <div class="slot-wrapper">
        <!-- @slot For adding an 'iris-avatar' component -->
        <slot name="avatar"></slot>
        <i class="el-icon-caret-bottom arrow-icon" v-if="arrow"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-if="!usernameEmpty" disabled id="username">{{username}}</el-dropdown-item>
        <!-- @slot For adding 'el-dropdown-item' components to the dropdown menu -->
        <slot name="content"></slot>
        <el-dropdown-item id="logout" :divided="displayDivided">
          <span @click="logout($event)">{{i18n.logout}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-tooltip>
</template>
<script>
import lang from '../../assets/lang/i18n.js'
/**
 * ### Description
 *
 * Display a dropdown with a logout button.
 * When the button is clicked, a 'logout' event can be catched
 * @author Alan Duchêne
 * @version 1.0.0
 *
 * ### Styling
 *
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-logout-dropdown',
  props: {
    /**
     * Language `en, fr`
     */
    language: {
      type: String,
      required: false,
      default: 'fr'
    },
    /**
     * The user name that will be displayed in the dropdown menu.
     */
    username: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Wheter a tooltip is displayed.
     */
    tooltip: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
     * The tooltip display content if the tooltip prop is set to true.
     */
    tooltipContent: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Wheter an arrow is displayed.
     */
    arrow: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      i18n: {},
      displayDivided: this.usernameEmpty || this.$slots.content !== undefined,
      usernameEmpty: this.username === '',
      tooltipContentEmpty: this.tooltipContent === ''
    }
  },
  methods: {
    /**
     * Triggered when the logout button is clicked
     * @event logout
     * @type {Event}
     */
    logout: function(event) {
      this.$emit('logout', event)
    }
  },
  mounted() {
    this.i18n = lang[this.language]
  }
}
</script>
<style scoped>
.slot-wrapper {
  display: flex;
  cursor: pointer;
}
.arrow-icon {
  cursor: pointer;
  position: absolute;
  right: -20px;
  bottom: 0;
  font-size: 20px;
}
</style>

<docs>
### Examples

#### Simple Example

```vue
<div style="display:flex">
<!-- Example 1 : Pas d'avatar, pas de nom d'utilisateur, pas de tooltip, dropdown menu par défaut -->
  <iris-logout-dropdown></iris-logout-dropdown>

<!-- Example 2 : Avatar avec initiales, tooltip par défaut, dropdown menu par défaut -->
  <iris-logout-dropdown :tooltip="true" v-on:logout="logoutFunction">
    <template slot="avatar">
  <iris-avatar username="Franck Rovost"></iris-avatar>
</template>
    <template slot="content">
  <el-dropdown-item v-on:click.native="plusMethod">Plus</el-dropdown-item>
  <el-dropdown-item v-on:click.native="petitPlusMethod">Petit plus</el-dropdown-item>
</template>
  </iris-logout-dropdown>

<!-- Example 3 : En anglais, avatar avec image, sans flèche, tooltip par défaut, des menus additionnels dans le dropdown menu -->
  <iris-logout-dropdown  language="en" :tooltip="true" :arrow="false" username="Homer Simpson" v-on:logout="logoutFunction">
    <template slot="avatar">
  <iris-avatar username="Enrico Nacias"></iris-avatar>
</template>
    <template slot="content">
  <el-dropdown-item v-on:click.native="plusMethod">Plus</el-dropdown-item>
  <el-dropdown-item v-on:click.native="petitPlusMethod">Petit plus</el-dropdown-item>
</template>
  </iris-logout-dropdown>

<!-- Example 4 : Avatar avec image, sans flèche, tooltip avec texte différent, des menus additionnels dans le dropdown menu -->
  <iris-logout-dropdown  src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png":tooltip="true" tooltipContent="Déconnexion utilisateur" v-on:logout="logoutFunction">
    <template slot="avatar">
  <iris-avatar src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png"></iris-avatar>
</template>
  </iris-logout-dropdown>
</div>

</div>
```
</docs>