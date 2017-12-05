<template>
  <div id="app">

  <router-view></router-view>

  </div>
</template>

<script>

import footer from "./components/footer.vue"

export default {
  name: 'app',
  components: { 
    "app-footer": footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text|Source+Sans+Pro');


a, a:hover {
	text-decoration: none;
	color: inherit;
}
</style>
