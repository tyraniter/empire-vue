<template>
  <div class>
    <div class="overflow-auto">
      <b-list-group>
        <b-list-group-item v-for="log in logEvents" :key="log">{{log}}</b-list-group-item>
      </b-list-group>
    </div>
    <div class="fix-bottom">
      <input class="w-100" type="text" v-on:keyup.enter="executeCommand($event)" />
    </div>
  </div>
</template>

<script>
import * as agentsApi from "../api/agents";

export default {
  name: "EventLogPane",
  data() {
    return {
      logEvents: []
    };
  },
  methods: {
    executeCommand(event) {
      if (event.key === "Enter") {
        agentsApi
          .runShellCommand("E6M7UX9A", event.target.value)
          .then(response => {
            this.logEvents.push(
              "taskID:" +
                response.data.taskID +
                " command:" +
                event.target.value
            );
          })
          .catch(error => {
            //console.log(error);
            this.logEvents.push("error:" + error);
          });
        //this.logEvents.push(event.target.value);
        //event.target.value = "";
      }
    }
  }
};
</script>>