<template>
  <div>
    <b-button-group v-for="item in menu" :key="item.title">
      <b-dropdown right :text="item.title">
        <b-dropdown-item
          v-for="subItem in item.subMenu"
          :key="subItem.title"
          v-on:click="handleClick(subItem.action)"
        >{{subItem.title}}</b-dropdown-item>
      </b-dropdown>
    </b-button-group>
    <b-modal id="config">
      <component v-bind:is="'ConfigModal'" />
    </b-modal>
  </div>
</template>

<script>
import * as agentsApi from "../api/agents";
import * as adminApi from "../api/admin";
import ConfigModal from "./ConfigModal";

var stagers = [];
var modules = [];
var menu = [
  {
    title: "Admin",
    subMenu: [
      { title: "View Version", action: "getVersion" },
      { title: "View Config", action: "getConfig" },
      { title: "Restart API Server", action: "restartApiServer" },
      { title: "Shutdown API Server", action: "shutdownApiServer" },
      { title: "Logout", action: "logout" }
    ]
  },
  {
    title: "Listeners",
    subMenu: [
      { title: "Create A Listener", action: "Create" },
      { title: "List All Listeners", action: "List" }
    ]
  },
  {
    title: "Agents",
    subMenu: [
      { title: "Refresh", action: "refreshAgents" },
      { title: "Remove Stale", action: "removeStaleAgents" },
      { title: "Kill All", action: "killAllAgents" }
    ]
  },
  {
    title: "Modules",
    subMenu: [{ title: "List All Modules", action: "" }]
  },
  {
    title: "Stagers",
    subMenu: [
      { title: "List All Stagers", action: "" },
      { title: "Generate Stager", action: "" }
    ]
  }
];
export default {
  name: "MenuBar",
  props: {},
  data() {
    return { menu: menu, stagers: stagers, modules: modules };
  },
  methods: {
    handleClick(action) {
      this[action]();
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/login");
    },
    refreshAgents() {
      //todo
    },
    getVersion() {
      adminApi
        .getVersion()
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Remove Stale Agents ${
              response.data.success ? "Success" : "Failed"
            }`,
            {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false
            }
          );
        })
        .catch(error => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: false
          });
        });
    },
    getConfig() {
      this.$bvModal.show("config");
    },
    restartApiServer() {
      adminApi
        .restartApiServer()
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Restart API Server ${
              response.data.success ? "Success" : "Failed"
            }`,
            {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false
            }
          );
        })
        .catch(error => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: false
          });
        });
    },
    shutdownApiServer() {
      adminApi
        .shutdownApiServer()
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Shutdown API Server ${
              response.data.success ? "Success" : "Failed"
            }`,
            {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false
            }
          );
        })
        .catch(error => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: false
          });
        });
    },
    removeStaleAgents() {
      agentsApi
        .removeStaleAgents()
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Remove Stale Agents ${
              response.data.success ? "Success" : "Failed"
            }`,
            {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false
            }
          );
        })
        .catch(error => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: false
          });
        });
    },
    killAllAgents() {
      agentsApi
        .killAllAgents()
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Kill All Agent ${response.data.success ? "Success" : "Failed"}`,
            {
              title: "Info",
              autoHideDelay: 5000,
              appendToast: false
            }
          );
        })
        .catch(error => {
          this.$bvToast.toast(error, {
            title: "Error",
            autoHideDelay: 5000,
            appendToast: false
          });
        });
    }
  },
  components: {
    ConfigModal
  },
  mounted() {
    this.$store.dispatch("getStagers");
    this.$store.dispatch("getModules");
  }
};
</script>

<style>
</style>