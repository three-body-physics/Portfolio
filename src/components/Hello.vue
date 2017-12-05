<template>
<div class="container">

<div class="row"  id="banner">

<!-- <transition name="profile-ani" appear>
  <div class="col-xs-12 col-md-6" id="profileImg" v-if="home">
    <img src="static/boy.svg">
  </div>
</transition> -->

<transition name="info-ani" appear>
  <div class="col-xs-12 col-md-6 col-md-offset-3" id="info" v-if="home">
      <div id="profileImg">
      <img src="static/aboutme.jpg">
      </div>   
      <h1>Hello, my name is Myint.</h1> <p>I'm a web developer based in Birmingham, West Midlands. I'm a very passionate developer with a demonstratable capacity to learn
      new technologies and concepts on my own initiative as I am entirely self taught. I work on both <strong>Frontend and Backend</strong> with popular libraries and frameworks such as VueJS, Angular, Bootstrap as well as Node, Express, Mongo and Socket.io backend.</p>
   
    <div class="btn btn-default">Git Hub</div>
    <div class="btn btn-default" @click="goToPortfolio">Portfolio</div>
 
  </div>
</transition>      
</div>

<transition name="frame-ani" appear>

  <div class="row" id="frameworks" v-if="home">
    <div class="col-xs-12">

    <h3><span>Libraries</span> and <span>Frameworks</span></h3>


      <img src="static/html5.png">
      <img src="static/css3.png">
      <img src="static/js5.png">
      <img src="static/jquery.png">
      <img src="static/Vue.png">
      <img src="static/angular.png">
      <img src="static/bootstrap.png">
      <img src="static/node.png">
      <img src="static/mongodb.png">
      <img src="static/socketio.png">
     

    </div>
  </div>
</transition> 
</div>
</template>

<script>
import projects from "./projects.vue"

export default {
  
  components: {
    "app-projects": projects
  },
  data () {
    return {
      home: true
    }
  },

  methods: {
    goToPortfolio() {
      this.home = false;
      setTimeout(() => {
        this.$router.push("/Portfolio")
      }, 600)
    }
  }
}
</script>

<style scoped>

/*#profile {
  border: 1px solid grey;
  border-radius: 100%;
}
*/

@import url('https://fonts.googleapis.com/css?family=Lato|Ubuntu:700');


h1,
h2,
h3,
h4 {
    font-family: 'Crimson Text', serif;
    text-transform: uppercase;
}

p {
    font-family: 'Source Sans Pro', sans-serif;

}


#profileImg {
  margin-top: 1em;
  
}

#profileImg img {
  max-width: 50%;
  height: auto;
  margin-bottom: 1em;
  border: 1px solid white;
  border-radius: 50%;

}

#info { 
  line-height: 2em;
  text-align: center;

}

#frameworks {

   text-align: center; 

}

#frameworks h3 {
  margin-bottom: 1em;
}


#frameworks img {
  max-width: 4em;
  height: auto;
  margin: 0.5em;
  filter: grayscale(1);
  cursor: pointer;
}

#frameworks img:hover {
  filter: grayscale(0);
  transform: scale(1.1, 1.1);
}

.profile-ani-enter-active, .profile-ani-leave-active {
  transition: all 1s;
}

.profile-ani-enter, .profile-ani-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.info-ani-enter-active, .info-ani-leave-active {
  transition: all 1s;
}

.info-ani-enter {
  opacity: 0;
  transform: translateX(-50px);
}

.info-ani-leave-to {
  opacity: 0;
}



.frame-ani-enter-active, .frame-ani-leave-active {
  transition: all 2s;
}

.frame-ani-enter, .frame-ani-leave-to {
  opacity: 0;
}

</style>
