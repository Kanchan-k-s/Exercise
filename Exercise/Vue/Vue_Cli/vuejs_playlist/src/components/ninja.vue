

<template>
    <div>
      <h1>
        This is a ninja list
      </h1>
      <ul>
        <li v-for="ninja in ninjas">{{ninja}}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default{
    data(){
      return{
        ninjas:['Yoshi','Mario','Ryu']
      }
    }
  }
  </script>
  
  <style scoped>
  h1{
    color:blueviolet
  }
  </style>