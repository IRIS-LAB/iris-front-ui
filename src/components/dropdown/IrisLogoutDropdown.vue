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
        <el-dropdown-item id="username" v-if="!usernameEmpty" disabled>{{username}}</el-dropdown-item>
        <!-- @slot For adding 'el-dropdown-item' components to the dropdown menu -->
        <slot name="content"></slot>
        <el-dropdown-item :divided="displayDivided">
          <span id="logout" @click="logout($event)">{{i18n.logout}}</span>
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
 * When the button is clicked, a 'logoutEvent' event can be catched
 * @author Alan Duchêne
 * @version 1.0.0
 *
 * ### Styling
 *
 * The following custom variables are available for styling:
 *
 * | Custom variable  | Description  | Default  |
 * |---|---|---|
 * | <b>--iris-logout-dropdown-color</b>  | Font color | <i>black</i> |
 * | <b>--iris-logout-dropdown-font-family</b>  | Font family | <i>arial</i> |
 * | <b>--iris-logout-dropdown-font-size</b>  | Font size | <i>1em</i> |
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-logout-dropdown',
  props: {
    /**
     * Language `fr, en`
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
     * @event logoutEvent
     * @type {Event}
     */
    logout(event) {
      this.$emit('logoutEvent', event)
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
#logout {
  color: var(--iris-logout-dropdown-color);
  font-family: var(--iris-logout-dropdown-font-family);
  font-size: var(--iris-logout-dropdown-font-size);
}
</style>

<docs>
### Examples

#### JUST THE ARROW
```vue
<div style="display:flex">
<!-- No avatar, no username, no tooltip, default dropdown menu -->
  <iris-logout-dropdown></iris-logout-dropdown>
</div>
```

#### AVATAR WITH TOOLTIP AND ADDITIONAL CONTENT
```vue
<div style="display:flex">
<!-- English labels, avatar with initials, default tooltip, additional menus in the dropdown menu without username -->
  <iris-logout-dropdown  language="en" :tooltip="true" v-on:logoutEvent="">
    <template slot="avatar">
  <iris-avatar username="Enrico Nacias"></iris-avatar>
</template>
    <template slot="content">
  <el-dropdown-item v-on:click.native>More</el-dropdown-item>
  <el-dropdown-item v-on:click.native>A Bit More</el-dropdown-item>
</template>
  </iris-logout-dropdown>
</div>
```

#### AVATAR WITH IMAGE, USERNAME AND NO ARROW
```vue
<div style="display:flex">
<!-- Avatar with image, tooltip with a different text, no arrow, default dropdown menu with username -->
  <iris-logout-dropdown :arrow="false"  username="Homer Simpson" src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png" :tooltip="true" tooltipContent="Déconnexion utilisateur" v-on:logoutEvent="">
    <template slot="avatar">
  <iris-avatar src="https://www.clipartmax.com/png/middle/132-1327420_homer-simpson-head-png.png"></iris-avatar>
</template>
  </iris-logout-dropdown>
</div>
```
</docs>