

<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>

  </div>
</template>

<script>

import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import showTitle from './components/showTitle.vue'
import appHeader from './components/header.vue'
import singleBlog from './components/singleBlog.vue'

export default {
  components: {

    'add-blog': addBlog,
    'show-blog': showBlog,
    'show-title': showTitle,
    'app-header': appHeader,
    'single-blog': singleBlog
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
