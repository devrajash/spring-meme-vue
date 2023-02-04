<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-toolbar color="indigo" dark> Register </v-toolbar>
    <form style="margin: 30px">
      <v-text-field
        v-model="fName"
        :error-messages="v$.fName.$errors.map((e) => e.$message)"
        label="First Name"
        required
        @input="v$.fName.$touch"
        @blur="v$.fName.$touch"
      ></v-text-field>
      <v-text-field
        v-model="lName"
        :error-messages="v$.lName.$errors.map((e) => e.$message)"
        label="Last Name"
        required
        @input="v$.lName.$touch"
        @blur="v$.lName.$touch"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="Email"
        required
        value="email"
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>

      <v-text-field
        v-model="password1"
        type="password"
        :error-messages="v$.password1.$errors.map((e) => e.$message)"
        label="Password"
        required
        @input="v$.password1.$touch"
        @blur="v$.password1.$touch"
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        label="Confirm Password"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>

      <v-btn
        class="mb-n2"
        color="blue"
        :disabled="dataValCheck"
        @click="clickSubmit"
      >
        submit
      </v-btn>
    </form>
    <span class="mb-2"
      >Already have account??
      <router-link to="/login"> Login Here</router-link></span
    >
  </v-card>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      password: "",
      password1: "",
      email: "",
      fName: "",

      lName: "",
    };
  },

  computed: {
    dataValCheck() {
      return this.v$.$invalid;
      //   this.dataValCheck = await this.v$.$validate();
    },
  },
  methods: {
    async clickSubmit() {
      //   console.log(x);
    },
  },

  mounted() {},
  validations() {
    return {
      password: { required },
      password1: { required },
      email: { required, email },
      fName: { required },
      lName: { required },
    };
  },
};
</script>
