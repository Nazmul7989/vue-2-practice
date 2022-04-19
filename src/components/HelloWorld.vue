<template>
  <div class="hello">
   <h4>Hello Vue Js</h4>
    <h3>{{ name }}</h3>
    <h3>{{ address }}</h3>
    <h3 v-text="address"></h3>
    <p v-html="vhtml"></p>
    <p v-once>{{ education }}</p>
    <h3 :class="{isActive}">This is class binding</h3>
    <h3 :style="{color : red_color}">This is style binding</h3>

  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data(){
    return{
      name: "Md Nazmul Hasan",
      address: "Jhenaidah",
      vhtml: '<p>This is v-html example</p>',
      education: "MBA",
      red_color: "red",
      isActive: "active",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.active{
  color: green;
}

</style>
