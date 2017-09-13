<template>
<div>


    <div class="ui fixed compact menu computer only grid" id="nav">
          <div class="icon">
            <a href="https://github.com/three-body-physics" target="_blank"><img src="static/github.svg" class="ui mini image"></a>
          </div>
          <div class="icon" id="resume">
            <a href="https://github.com/three-body-physics" target="_blank"><img src="static/resume.png" class="ui mini image"></a>
          </div>
    </div>


</div>

</template>

<script>
export default {
}
</script>

<style scoped>

#nav {
  background: none;
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

#resume {
  transform: scale(1.3, 1.3);
}

.icon {
  margin-top: 1em;
  margin-right: 1.5em;
  opacity: 0.4;
}

.icon:hover {
  opacity: 0.8;
  transition: all 1s;
}
</style>
