<template>
  <div class>
    <div class="overflow-auto">
      <b-list-group>
        <b-list-group-item v-for="task in logEvents" :key="task.taskID">{{task}}</b-list-group-item>
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
  name: "AgentInteractPane",
  data() {
    return {
      tasks: [],
      logEvents: [],
      timer: 0
    };
  },
  props: {
    meta: Object
  },
  methods: {
    executeCommand(event) {
      //console.log(this.meta);
      if (event.key === "Enter") {
        agentsApi
          .runShellCommand(this.meta.agentName, event.target.value)
          .then(response => {
            this.logEvents.push({
              taskId: response.data.taskID,
              command: event.target.value
            });
            this.tasks.push(response.data.taskID);
            //console.log(this.logEvents);
          })
          .catch(error => {
            console.log(error);
          });
        //this.logEvents.push(event.target.value);
        //event.target.value = "";
      }
    }
  },
  mounted() {
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        agentsApi
          .getAgentResults(this.meta.agentName)
          .then(response => {
            //console.log(response.data.results);
            response.data.results.map(result => {
              result.AgentResults.map(result => {
                var index = this.tasks.indexOf(result.taskID);
                if (index > -1) {
                  this.logEvents.push({
                    taskId: result.taskID,
                    command: result.command,
                    results: result.results
                  });
                  this.tasks.splice(index, 1);
                  //console.log(this.tasks);
                }
              });
            });
          })
          .catch(error => {
            console.log(error);
            //this.logEvents.push("error:" + error);
          });
      }, 5000);
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>>