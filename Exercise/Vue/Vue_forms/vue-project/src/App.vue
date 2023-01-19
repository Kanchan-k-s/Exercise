
<template>
  <div>

    <KeepAlive>
      <component v-bind:is="component"></component>

    </KeepAlive>
    <button v-on:click="component = 'form-one'"> Form 1</button>
    <button v-on:click="component = 'form-two'"> Form 2</button>

  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components: {
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo

  },
  data() {
    return {
      component: 'form-two'
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
