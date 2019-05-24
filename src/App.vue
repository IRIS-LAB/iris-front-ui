<template>
  <v-app>
    <h1>Hello World!</h1>
    <div style="display:flex">
      <!-- No avatar, no username, no tooltip, default dropdown menu -->
      <iris-logout-dropdown></iris-logout-dropdown>
    </div>
    <iris-dialog-icon title="My title">
      <div>My dialog content</div>
    </iris-dialog-icon>

    <iris-logout-dropdown></iris-logout-dropdown>

    <h2>{{date}}</h2>
    <v-layout ustify-start fill-height row wrap align-center>
      <v-flex xs2>
        <date-picker
          label="Date"
          :date-data="date"
          placeholder-date="2019-04-12"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
          locale="fr"
        ></date-picker>
      </v-flex>
      <v-flex xs8></v-flex>
      <v-flex xs2>
        <date-picker
          label="Date"
          placeholder-date="2019-04-12"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
    </v-layout>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <v-layout ustify-start fill-height row wrap align-center>
      <v-flex xs2>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs9>
        <v-card dark color="purple">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs2>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="yellow">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs4>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="orange">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Mandatory']"
          validate-on-blur
        ></date-picker>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="orange">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <date-picker
          label="Date"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD.MM.YY"
          :rules="[value => !!value || 'Obligatoire']"
          validate-on-blur
          locale="fr"
        ></date-picker>
      </v-flex>
      <v-flex xs8>
        <v-card dark color="green">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <date-picker
          label="Date DD/MM/YYYY"
          :date-data="date"
          :loading="false"
          @input="setDateDebut"
          text-field-date-format="DD/MM/YYYY"
          validate-on-blur
          clearable
          locale="fr"
        ></date-picker>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import datePicker from './components/datepicker/IrisDatePicker'

export default {
  data: () => ({ date: '2019-04-12' }),
  methods: {
    setDateDebut(val) {
      this.date = val
    }
  },
  components: { datePicker }
}
</script>
