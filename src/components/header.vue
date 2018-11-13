<template>
  <div>  

    <div class="container-fluid">
      <div class="row" id="nav">
        <div class="col-xs-12" >
          <div @click="previous()"><i class="fa fa-long-arrow-left fa-2x" aria-hidden="true"></i></div>
          <div @click="next()"><i class="fa fa-long-arrow-right fa-2x" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>



export default {

methods: {
  next() {
    this.$store.commit('nextProj');
  },

  previous() {
    this.$store.commit('prevProj');
  }
}

}
</script>

<style scoped>

.container-fluid {
  height: 10vh;
  background-color: #EDEFEE;
    display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.col-xs-12 div {
  display: inline-block;
  cursor: pointer;
  margin: 0 1em 0 1em;
}

#nav {

padding: 2em;

}

#resume {
  transform: scale(1.3, 1.3);
}

/*.icon {
  margin-top: 1em;
  margin-right: 1.5em;
  opacity: 0.4;
}
*/
.icon:hover {
  opacity: 0.8;
  transition: all 1s;
}
</style>
