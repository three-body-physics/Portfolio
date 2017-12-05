<template>
  <div>  

    <div class="container-fluid" id="nav">
      <div class="row">
        <div class="col-xs-12">
          <div class="btn btn-primary" @click="previous()">previous</div>
          <div class="btn btn-primary" @click="next()">next</div>
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
}

#nav {

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
