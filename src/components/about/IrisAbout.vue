<template>
  <div class="parent-about">
    <span>{{ i18n.aboutTitle }} {{ _cApplicationName }}</span>
    <br />
    <span>{{ packageJson.name }} v{{ packageJson.version }}</span>
    <br />
    <span>{{ _cApplicationDescription }}</span>
    <br />
    <br />
    <span>
      {{ i18n.aboutProductDevelopLabel }} {{ _cApplicationCompany }} -
      {{ _cApplicationTeam }}
    </span>
    <br />
    <span>
      &copy; Copyright {{ _cApplicationCompany }} -
      {{ _cApplicationCopyrightYear }}
    </span>
    <br />
    <span>{{ i18n.aboutLibraryLabel }} :</span>
    <ul v-if="packageJson.dependencies">
      <li v-for="dependency of Object.keys(packageJson.dependencies)" :key="dependency">
        {{ dependency }} {{ packageJson.dependencies[dependency] }}
      </li>
    </ul>
    <br />
    <span>{{ i18n.aboutEngineLabel }} :</span>
    <ul>
      <li>node {{ _cApplicationEnginesNode }}</li>
      <li>npm {{ _cApplicationEnginesNpm }}</li>
    </ul>
    <span>{{ i18n.aboutFooterLabel }}</span>
  </div>
</template>
<script>
import { IrisUtils } from '../../mixins/IrisUtils.js'
import lang from '../../assets/lang/i18n.js'

/**
 * ### Description
 *
 * About panel that display informations contained to `package.json`
 * @author Benjamin Corré
 * @version 1.0.0
 *
 * ### Styling
 *
 * ### Properties and Methods
 */
export default {
  name: 'iris-about',

  props: {
    /**
     * Object referenced package.json
     */
    packageJson: {
      type: Object,
      default: function() {
        return {}
      }
    },
    /**
     * Object referenced json files contained application informations
     */
    applicationJson: {
      type: Object,
      default: function() {
        return {}
      }
    },
    /**
     * Application name
     */
    applicationName: String,
    /**
     * Application description
     */
    applicationDescription: String,
    /**
     * Application team
     */
    applicationTeam: String,
    /**
     * Application Copyright year
     */
    applicationCopyrightYear: String,
    /**
     * Application node version
     */
    applicationEnginesNode: String,
    /**
     * Application npm version
     */
    applicationEnginesNpm: String,
    /**
     * Application company
     */
    applicationCompany: String,
    /**
     * Language `en, fr`
     */
    language: {
      type: String,
      default: 'fr'
    }
  },
  mixins: [IrisUtils],
  data() {
    return {
      i18n: {}
    }
  },
  computed: {
    _cApplicationName() {
      return this._firstNotEmpty(this.applicationName, this.applicationJson.name)
    },
    _cApplicationDescription() {
      return this._firstNotEmpty(this.applicationDescription, this.applicationJson.description)
    },
    _cApplicationTeam() {
      return this._firstNotEmpty(this.applicationTeam, this.applicationJson.team)
    },
    _cApplicationCopyrightYear() {
      return this._firstNotEmpty(this.applicationCopyrightYear, this.applicationJson.copyrightYear)
    },
    _cApplicationEnginesNode() {
      return this._firstNotEmpty(
        this.applicationEnginesNode,
        this.applicationJson.engines ? this.applicationJson.engines.node : ''
      )
    },
    _cApplicationEnginesNpm() {
      return this._firstNotEmpty(
        this.applicationEnginesNpm,
        this.applicationJson.engines ? this.applicationJson.engines.npm : ''
      )
    },
    _cApplicationCompany() {
      return this._firstNotEmpty(this.applicationCompany, this.applicationJson.company)
    }
  },
  mounted() {
    this.i18n = lang[this.language]
  }
}
</script>
<style scoped>
.parent-about {
  text-align: left;
}
</style>
