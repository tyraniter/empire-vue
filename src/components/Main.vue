<template>
  <div>
    <MenuBar />
    <AgentsTable />
    <CommandTabs />
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";
import AgentsTable from "./AgentsTable.vue";
import CommandTabs from "./CommandTabs.vue";

export default {
  name: "Main",
  components: {
    MenuBar,
    AgentsTable,
    CommandTabs
  },
  props: {}
};
</script>

<style>
</style>
