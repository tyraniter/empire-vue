<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab v-bind:title="tab.id" active v-for="tab in tabs" :key="tab.id">
        <template slot="title">
          <span>
            {{tab.title}}
            <a href="/#" v-on:click="remove(tab.id)">x</a>
          </span>
        </template>
        <component v-bind:is="tab.type" v-bind:meta="tab.props"/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import EventLogPane from "./EventLogPane";
import AgentInteractPane from "./AgentInteractPane";
export default {
  name: "CommandTabs",
  computed: {
    tabs() {
      return this.$store.state.tabs;
    }
  },
  methods: {
    add(title, type) {
      //event.stopPropagation();
      this.$store.dispatch("addTab", { id: title, title: title, type: type });
    },
    remove(id) {
      //event.stopPropagation();
      this.$store.dispatch("removeTab", { id: id });
    }
  },
  components: {
    EventLogPane,
    AgentInteractPane,
  }
};
</script>