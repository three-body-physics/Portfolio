import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import projects from '@/components/projects'
import gallery from '@/components/gallery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: projects
    },    
    {
      path: '/gallery',
      name: 'Gallery',
      component: gallery
    }

  ]
})


