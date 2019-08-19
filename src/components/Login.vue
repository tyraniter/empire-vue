<template>
  <div>
    <b-form>
      <b-form-group id="host" label="Host:" label-for="input-host">
        <b-form-input id="input-host" v-model="host" type="text" placeholder="127.0.0.1"></b-form-input>
      </b-form-group>

      <b-form-group id="port" label="Port:" label-for="input-port">
        <b-form-input id="input-port" v-model="port" type="text" placeholder="1337"></b-form-input>
      </b-form-group>

      <b-form-group id="host" label="Username:" label-for="input-username">
        <b-form-input id="input-username" v-model="username" type="text" placeholder="empireadmin"></b-form-input>
      </b-form-group>

      <b-form-group id="host" label="Password:" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="password"
          type="password"
          placeholder="10233210d"
        ></b-form-input>
      </b-form-group>

      <b-button variant="dark" v-on:click="login">Login</b-button>
    </b-form>
  </div>
</template>

<script>
//import auth from "../common/auth";

export default {
  name: "Login",
  props: {},
  data() {
    return {
      host: "127.0.0.1",
      port: "1337",
      username: "empireadmin",
      password: "10233210d",
      error: false
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          host: this.host,
          port: this.port,
          username: this.username,
          password: this.password
        })
        .then(() => {
          //console.log(this.$store.state.isAuthenticated)
          if (this.$store.state.isAuthenticated) {
            this.$router.replace("/main");
          } else {
            //this.error = true;
          }
        });
    }
  }
};
</script>

<style>
</style>