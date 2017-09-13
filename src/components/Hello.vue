<template>
  <div>


  <div class="ui centered container">
    <img src="static/boy.svg" class="ui medium centered image" id="profile">
    <h2 class="ui header">About me</h2>
    <div class="ui divider">
    </div>
    <div class="ui text container">
      <p>Hello, my name is <strong>Myint</strong>. I'm a web developer based in Birmingham, West Midlands. I'm a very passionate developer with a demonstratable capacity to learn
      new technologies and concepts on my own initiative as I am entirely self taught. I work on both <strong>Frontend and Backend</strong> with popular libraries and frameworks such as VueJS,
    Angular as well as NodeJs, Express, MongoDB, Socket.io and Firebase.</p>
    <h3 class="ui header">Languages, Libraries and Frameworks</h3>
    <div class="ui divider">
    </div>
    <div class="ui mini images">
      <img src="static/html5.png" class="ui image">
      <img src="static/css3.png" class="ui image">
      <img src="static/js5.png" class="ui image">
      <img src="static/jquery.png" class="ui image">
      <img src="static/Vue.png" class="ui image">
      <img src="static/semantic.png" class="ui image">
      <img src="static/node.png" class="ui image">
      <img src="static/mongodb.png" class="ui image">
      <img src="static/socketio.png" class="ui image">
      <img src="static/firebase.png" class="ui image">
    </div>
    <div class="ui divider">
    </div>
    </div>
  </div>

  <app-projects></app-projects>
</div>
</template>

<script>
import projects from "./projects.vue"

export default {
  name: 'hello',
  components: {
    "app-projects": projects
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

#profile {
  border: 1px solid grey;
  border-radius: 100%;
}

.ui.mini.images .ui.image {
  cursor: pointer;
}

.ui.mini.images .ui.image:hover {
  transform: scale(1.5, 1.5);
}

i {
animation: bounce 3s infinite;
}

@@keyframes bounce {

  from {transform: translateY(5px);}
  to {transform: translateY(10px);}

}

</style>
