<template>
  <b-list-group>
    <b-list-group-item v-for="item in config" :key="item">{{item}}</b-list-group-item>
  </b-list-group>
</template>

<script>
import * as adminApi from "../api/admin";

export default {
  name: "ConfigModal",
  data() {
    return { config: [] };
  },
  mounted() {
    adminApi
      .getConfig()
      .then(response => {
        response.data.config.map(item => {
          Object.keys(item).map(key => {
            this.config.push(key + " : " + item[key]);
          });
        });
      })
      .catch(error => {
        config.push(error);
      });
  }
};
</script>