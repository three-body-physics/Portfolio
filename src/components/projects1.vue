<template>
<transition name="blink" appear>
<div class="ui vertical stripe segment" style="background: #F5F5F5;">
  <div class="ui centered middle aligned stackable grid container">
    <div class="row" id="header">
      <h1 class="ui header"><i class="fa fa-briefcase" aria-hidden="true"></i>Projects</h1>
    </div>
    <div class="row">
    <div class="ui stackable centered cards">
<transition name="project-ani" appear>
      <div class="doubling six wide column card" v-if="project1">
        <div class="image">
        <img src="static/project5.png">
        </div>
        <div class="content">
          <div class="header">
            Travelog
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">Fully mobile responsive SPA blog application built with VUE.js. It is linked to a seperate RESTAPI and provides User Authentication and many CRUD operations.     
          </div>
        </div>
        <div class="extra content">
          <a href="#" target="_blank" class="left floated">Git Hub</a>
          <a href="https://salty-chamber-39698.herokuapp.com/home" target="_blank" class="right floated">View Live</a>
        </div>
      </div>
</transition>
<transition name="project2-ani" appear>
      <div class="doubling six wide column card" v-if="project1" @click="toggleProject">
        <div class="image">
        <img src="static/project7.png">
        </div>
        <div class="content">
          <div class="header">
            JSON RESTAPI
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">            JSON API written in Node.JS, Express and MongoDB. It provides User authentication, data association, admin privileges as well as CRUD operations implemented by the apps that consumes the API.
          </div>
        </div>
        <div class="extra content">
          <a href="#" class="left floated">Git Hub</a>
          <a href="#" class="right floated">View Live</a>
        </div>
      </div>
</transition>
      <div class="doubling six wide column card">

        <div class="image">
        <img src="static/project8.png">
        </div>
        <div class="content">
          <div class="header">
           VibeCiti - music visualizer
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">            VibeCiti is a showcase web audio visualizer app built on vanilla javascript.
            It makes use of Web Audio Api to intercept music frequencies and Canvas element to render the output.
          </div>
        </div>
        <div class="extra content">
          <a href="#" class="left floated">Git Hub</a>
          <a href="#" class="right floated">View Live</a>
        </div>
      </div>


      <div class="doubling six wide column card">
        <div class="image">
        <img src="static/project1.png">
        </div>
        <div class="content">
          <div class="header">
            SentiBot - Twitter Sentiment Analysis
          </div>
          <div class="ui divider">
          </div>
          <div class="left aligned description">
            SentiBot uses NodeJS backend to stream data from twitter's public API. The data stream is then funneled to VueJS frontend through a web socket where it
            is reactively rendered for visualization.
<!--             <div class="ui mini images">
              <div class="ui divider">
              </div>
              <img src="static/html5.png" class="ui image">
              <img src="static/css3.png" class="ui image">
              <img src="static/js5.png" class="ui image">
              <img src="static/Vue.png" class="ui image">
              <img src="static/node.png" class="ui image">
              <img src="static/socketio.png" class="ui image">
            </div> -->
          </div>
        </div>
        <div class="extra content">
          <a href="#" class="left floated">Git Hub</a>
          <a href="#" class="right floated">View Live</a>
        </div>
      </div>



    </div>
    </div>
  </div>



</div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      project1: true
    }
  },

  methods: {
    toggleProject() {
      this.project1 = !this.project1;
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Lora');
@import url('https://fonts.googleapis.com/css?family=Maven+Pro:500,700');


.description {

  font-family: 'Maven Pro', sans-serif;

}

/*.content .header {
   font-family: 'Maven Pro', sans-serif; 
   color:red;
}
*/

#header {
  margin: 2em 0 1em 0;
}

#header .ui.header {
  font-family: 'Raleway', sans-serif;
  letter-spacing: 3px;
}

.card:hover {
  transform: translateY(-0.5em);
  cursor: pointer;

}

.column.card {
  transition: all 1s;
}

.project-ani-enter-active, .project-ani-leave-active {
  transition: all 1s;
}

.project-ani-enter, .project-ani-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.project2-ani-enter-active, .project2-ani-leave-active {
  transition: all 1s;
}

.project2-ani-enter, .project2-ani-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}


.blink-enter-active, .blink-leave-active {
  transition: all 1s;
}

.blink-enter, .blink-leave-to {
  opacity: 0;
  
}

</style>
