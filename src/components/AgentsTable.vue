<template>
  <div>
    <!--b-table striped hover :items="agents" :fields="fields"></b-table-->
    <b-table-simple striped hover>
      <b-thead>
        <b-tr>
          <b-th v-for="field in fields" :key="field.label">{{field.label}}</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="agent in agents" :key="agent.name">
          <b-td>
            <b-dropdown id="dropdown-1" v-bind:text="agent.name">
              <b-dropdown-item v-on:click="interact(agent.name)">Interact</b-dropdown-item>
              <b-dropdown-item>Use Module</b-dropdown-item>
              <b-dropdown-item v-on:click="kill(agent.name)">Kill</b-dropdown-item>
              <b-dropdown-item v-on:click="remove(agent.name)">Remove</b-dropdown-item>
            </b-dropdown>
          </b-td>
          <b-td>{{agent.language}}</b-td>
          <b-td>{{agent.external_ip}}</b-td>
          <b-td>{{agent.hostname}}</b-td>
          <b-td>{{agent.username}}</b-td>
          <b-td>{{agent.process_name}}</b-td>
          <b-td>{{agent.process_id}}</b-td>
          <b-td>{{agent.delay}}</b-td>
          <b-td>{{agent.lastseen_time}}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import * as agentsApi from "../api/agents";

export default {
  name: "AgentsTable",
  data() {
    return {
      timer: 0,
      fields: {
        name: { label: "Name" },
        language: { label: "La" },
        external_ip: { label: "Internel IP" },
        hostname: { label: "Machine Name" },
        username: { label: "Username" },
        process_name: { label: "Process" },
        process_id: { label: "PID" },
        delay: { label: "Delay" },
        lastseen_time: { label: "Last Seen" }
      }
    };
  },
  mounted() {
    this.$store.dispatch("getAgents");
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.$store.dispatch("getAgents");
      }, 5000);
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
    agents() {
      return this.$store.state.agents;
    }
  },
  methods: {
    interact(agentName) {
      this.$store.dispatch("addTab", {
        id: agentName,
        title: agentName,
        type: "AgentInteractPane",
        props: { agentName: agentName }
      });
    },
    kill(agentName) {
      agentsApi
        .killAgent(agentName)
        .then(response => {
          //console.log(response);
          this.$bvToast.toast(
            `Kill Agent ${agentName} ${
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
    remove(agentName) {
      agentsApi
        .removeAgent(agentName)
        .then(response => {
          //console.log(response.data);
          this.$bvToast.toast(
            `Remove Agent ${agentName} ${
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
    }
  }
};
</script>
