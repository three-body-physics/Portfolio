<template>
<div class="ui vertical stripe segment">
  <div class="ui centered middle aligned stackable grid container">

    <div class="ui raised stackable centered cards grid">

      <div class="doubling six wide column card">

        <div class="image">
        <img src="static/project2.png">
        </div>
        <div class="content">
          <div class="header">
          VibeCiti - music visualizer
          </div>
          <div class="ui divider">
          </div>
          <div class="description">
            VibeCiti is a showcase web audio visualizer app built on vanilla javascript.
            It makes use of Web Audio Api to intercept music frequencies and Canvas element to render the output.
            <div class="ui mini images">
              <div class="ui divider">
              </div>
              <img src="static/html5.png" class="ui image">
              <img src="static/css3.png" class="ui image">
              <img src="static/js5.png" class="ui image">

            </div>
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
          <div class="description">
            SentiBot uses NodeJS backend to stream data from twitter's public API. The data stream is then funneled to VueJS frontend through a web socket where it
            is reactively rendered for visualization.
            <div class="ui mini images">
              <div class="ui divider">
              </div>
              <img src="static/html5.png" class="ui image">
              <img src="static/css3.png" class="ui image">
              <img src="static/js5.png" class="ui image">
              <img src="static/Vue.png" class="ui image">
              <img src="static/node.png" class="ui image">
              <img src="static/socketio.png" class="ui image">
            </div>
          </div>
        </div>
        <div class="extra content">
          <a href="#" class="left floated">Git Hub</a>
          <a href="#" class="right floated">View Live</a>
        </div>
      </div>

      <div class="doubling six wide column card">
        <div class="image">
        <img src="static/project3.png">
        </div>
        <div class="content">
          <div class="header">
            Arrolex - Travel planner
          </div>
          <div class="ui divider">
          </div>
          <div class="description">
            This is a fully responsive front-end replica of Kayak.com. Fully implemented with my own markup and interpretation of the original site.
            Built with Bootstrap.
            <div class="ui mini images">
              <div class="ui divider">
              </div>
              <img src="static/html5.png" class="ui image">
              <img src="static/css3.png" class="ui image">
              <img src="static/js5.png" class="ui image">
              <img src="static/semantic.png" class="ui image">
            </div>
          </div>
        </div>
        <div class="extra content">
          <a href="#" class="left floated">Git Hub</a>
          <a href="#" class="right floated">View Live</a>
        </div>
      </div>

      <div class="doubling six wide column card">
        <div class="image">
        <img src="static/project4.png">
        </div>
        <div class="content">
          <div class="header">
            Personal Porfolio
          </div>
          <div class="ui divider">
          </div>
          <div class="description">
            A fully mobile responsive portfolio to showcase my personal projects. It is built using Semantic UI with VueJS for templating.
            <div class="ui mini images">
              <div class="ui divider">
              </div>
              <img src="static/html5.png" class="ui image">
              <img src="static/css3.png" class="ui image">
              <img src="static/js5.png" class="ui image">
              <img src="static/Vue.png" class="ui image">
            </div>
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
</template>

<script>
export default {
}
</script>

<style scoped>

.ui.vertical.stripe {
  padding: 8em 0em;
}


.card:hover {
  transform: translateY(-0.5em);
  cursor: pointer;
}

</style>
