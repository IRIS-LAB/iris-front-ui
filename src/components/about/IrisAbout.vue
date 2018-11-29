<template>
  <div>
    <h2>{{ i18n.aboutTitle }} {{ _cApplicationName }}</h2>
    <h3>{{ packageJson.name }} v{{ packageJson.version }}</h3>
    <span>{{ _cApplicationDescription }}</span>
    <br>
    <br>
    <span>
      {{ i18n.aboutProductDevelopLabel }} {{ _cApplicationCompany }} -
      {{ _cApplicationTeam }}
    </span>
    <br>
    <span>
      &copy; Copyright {{ _cApplicationCompany }} -
      {{ _cApplicationCopyrightYear }}
    </span>
    <br>
    <span>{{ i18n.aboutLibraryLabel }} :</span>
    <ul v-if="packageJson.dependencies">
      <li
        v-for="dependency of Object.keys(packageJson.dependencies)"
        :key="dependency"
      >{{ dependency }} {{ packageJson.dependencies[dependency] }}</li>
    </ul>
    <br>
    <span>{{ i18n.aboutEngineLabel }} :</span>
    <ul>
      <li>node {{ _cApplicationEnginesNode }}</li>
      <li>npm {{ _cApplicationEnginesNpm }}</li>
    </ul>
    <span>{{ i18n.aboutFooterLabel }}</span>
  </div>
</template>
<script>
import IrisUtils from '../mixins/IrisUtils.js'
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
      default: (function () { return {} })
		},
		/**
		 * Object referenced json files contained application informations
		 */
		applicationJson: {
			type: Object,
      default: (function () { return {} })
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
			default: 'fr',
		},
	},
	mixins: [IrisUtils],
	data() {
		return {
			i18n: {},
		};
	},
	computed: {
		_cApplicationName() {
			return this._firstNotEmpty(this.applicationName, this.applicationJson.name)
		},
		_cApplicationDescription() {
			return this._firstNotEmpty(
				this.applicationDescription,
				this.applicationJson.description
			);
		},
		_cApplicationTeam() {
			return this._firstNotEmpty(this.applicationTeam, this.applicationJson.team)
		},
		_cApplicationCopyrightYear() {
			return this._firstNotEmpty(
				this.applicationCopyrightYear,
				this.applicationJson.copyrightYear
			);
		},
		_cApplicationEnginesNode() {
			return this._firstNotEmpty(
				this.applicationEnginesNode,
				this.applicationJson.engines ? this.applicationJson.engines.node : ''
			);
		},
		_cApplicationEnginesNpm() {
			return this._firstNotEmpty(
				this.applicationEnginesNpm,
				this.applicationJson.engines ? this.applicationJson.engines.npm : ''
			);
		},
		_cApplicationCompany() {
			return this._firstNotEmpty(this.applicationCompany, this.applicationJson.company)
		},
	},
	mounted() {
    this.i18n = lang[this.language]
	},
};
</script>

<docs>
  ### Examples 

  #### Prerequisites

  In your `main.js`, create a constant in a global mixins to serialize `package.json`.
  You can add the information about the application in the another constants.

  ```html
    Vue.mixin({
      data: function() {
        return { 
          PACKAGE_JSON: require('../package.json'),
          APPLICATION_JSON: require('../static/example-application-information.json')
        }
      }
    })
  ```

  #### Object entries Example 

  ```html 
  <iris-about
    :package-json="PACKAGE_JSON"
    :application-json="APPLICATION_JSON"
    language="fr"
  ></iris-about>
  ```
  #### String entries Example 

  ```html 
  <iris-about
    :package-json="PACKAGE_MODULE"
    application-name="Another application"
    application-description="The description of the application"
    application-company="U GIE Iris"
    application-copyright-year="2018"
    application-engines-node="5.0"
    application-engines-npm="7.0"
    application-team="AIL"
    language="en"
  ></iris-about>
  ```
</docs>
