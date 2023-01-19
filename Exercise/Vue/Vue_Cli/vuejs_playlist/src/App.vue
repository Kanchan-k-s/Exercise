

<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Ninjas from './components/ninjas.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninja': Ninjas
  },
  data() {
    return {
      title: 'Ninja App',
      ninjas: [
        { name: 'Ryu', speciality: 'Vue Components', show: false },
        { name: 'Crystal', speciality: 'HTML Wizardry', show: false },
        { name: 'Hitoshi', speciality: 'Click Events', show: false },
        { name: 'Tango', speciality: 'Conditionals', show: false },
        { name: 'Kami', speciality: 'Webpack', show: false },
        { name: 'Yoshi', speciality: 'Data Diggin', show: false }
      ]
    }
  },
  methods: {
    updateTitle: function (updateTitle) {
      this.title = updateTitle
    }
  }
}
</script>

<style>

</style>
