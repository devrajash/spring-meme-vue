<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-toolbar color="indigo" dark> Login </v-toolbar>
    <form style="margin: 30px">
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
        v-model="password"
        type="password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        label="Password"
        required
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>

      <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="v$.select.$errors.map((e) => e.$message)"
        label="Item"
        required
        @change="v$.select.$touch"
        @blur="v$.select.$touch"
      ></v-select> -->

      <!-- <v-checkbox
        v-model="checkbox"
        :error-messages="v$.checkbox.$errors.map((e) => e.$message)"
        label="Do you agree?"
        required
        @change="v$.checkbox.$touch"
        @blur="v$.checkbox.$touch"
      ></v-checkbox> -->

      <!-- <v-btn class="mb-n2 mr-2" dark color="blue" @click="clickSubmit">
        <v-icon color="red">mdi-google</v-icon> Google Login
      </v-btn> -->'
      <button type="button" class="login-with-google-btn mr-2">Login</button>
      <v-btn
        style="margin-top: -8px; height: 42px; color: blanchedalmond"
        class="mb-n2"
        color="blue"
        :disabled="dataValCheck"
        @click="clickSubmit"
      >
        submit
      </v-btn>
    </form>
    <span class="mb-2"
      >Dont have account??
      <router-link to="/register"> Register Here</router-link></span
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
      email: "",
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
      email: { required, email },
    };
  },
};
</script>
<style scoped>
.login-with-google-btn {
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 11px 15px 9px 39px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
}
.login-with-google-btn:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
}

.login-with-google-btn:active {
  background-color: #eeeeee;
}

.login-with-google-btn:focus {
  outline: none;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
    0 0 0 3px #c8dafc;
}

.login-with-google-btn:disabled {
  filter: grayscale(100%);
  background-color: #ebebeb;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
</style>
