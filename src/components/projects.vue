<template>
<div>    

<app-header></app-header>
<div class="container-fluid">
	<div class="row" id="projects">
		<transition-group name="img-ani" v-for="(p , i) in project" :key="i" v-if="i === projectNo" class="col-xs-12 col-md-7" tag="div" appear>
		<div :key="i">
			<div class="img-frame"></div>
			<img :src="p.img">
		</div>
		</transition-group>
	
		<transition-group name="des-ani" v-for="(p , i) in project" :key="i" v-if="i === projectNo" class="col-xs-12 col-md-4" tag="div" appear>
			<div :key="i">
			<h2>{{ p.name }}</h2>
			<p>{{  p.des }}</p>
			<div class="btn btn-default"><a target="_blank" v-bind:href="p.github">Github</a></div>
			<div class="btn btn-default"><a target="_blank" v-bind:href="p.live">View live</a></div>
			</div>

			<div class="row" :key="i">
				<div class="col-xs-12" id="frameworks">					
					<img v-for="(f, j) in p.tools" :key="j" v-bind:src="f" v-if="i === projectNo">					
				</div>
			</div>	

		</transition-group>

	</div>


</div>

</div>
</template>

<script>

import { info } from "./data.js";
import header from "./header.vue"

export default {
   components: {
    "app-header": header
    },

  computed: {
  	projectNo() {
  		return this.$store.state.projectNo;
  	},

  	project() {
  		return info;
  	},


  },

}

</script>

<style scoped>

p {
	line-height: 2em;
	letter-spacing: 2px;
	font-family: 'Source Sans Pro', sans-serif;


}

h2, .btn {
	font-family: 'Crimson Text', serif;

}

img {
		border: 1px solid grey;
}

.container-fluid {
	background-color: #EDEFEE;
	height: 90vh;
}

#projects {
	margin-top: 3em;
	background-color: #EDEFEE;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;	
	flex-wrap: wrap;
}

#projects .col-xs-12 img {
	width: 100%;
	height: auto;
	-webkit-box-shadow: 13px 10px 41px -18px rgba(0,0,0,0.75);
	-moz-box-shadow: 13px 10px 41px -18px rgba(0,0,0,0.75);
	box-shadow: 13px 10px 41px -18px rgba(0,0,0,0.75);

}

#thumbnails {
	height: 200px;

}

#thumbnails img {
	margin-top: 1em;
	width: 100%;
	height: auto;
}

.des-ani-enter-active, .des-ani-leave-active {
	-o-transition: all 1s;
    transition: all 1s;
    -webkit-transition: all 1s;
} 

.des-ani-enter, .des-ani-leave-to {
	opacity: 0;
	transform: translateX(50px);
}

.img-ani-enter-active, .img-ani-leave-active {
	-o-transition: all 1s;
    transition: all 1s;
    -webkit-transition: all 1s;
} 

.img-ani-enter, .img-ani-leave-to {
	opacity: 0;
	transform: translateY(-50px);
}

#frameworks {
	text-align: center;
}

#frameworks img {
  max-width: 3em;
  height: auto;
  margin-right: 1em;
  margin-top: 3em;
  filter: grayscale(1);
  cursor: pointer;
  border: none;
}

#frameworks img:hover {

  filter: grayscale(0);
  cursor: pointer;

}


</style>