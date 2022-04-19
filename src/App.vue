<template>
  <div>

<!--    <HelloWorld/>-->
<!--    <Header/>-->
<!--    <Footer :titleName="title" @footerTitle="title=$event" />-->
<!--    <SlotExample>-->
<!--      <ul slot="list">-->
<!--        <li>Html</li>-->
<!--        <li>vue js</li>-->
<!--        <li>laravel</li>-->
<!--      </ul>-->
<!--      <p slot="para">This is another element</p>-->
<!--    </SlotExample>-->


<!--      dynamic and async component -->
<!--     <button @click="componentToRender='Home'">Home</button>-->
<!--     <button @click="componentToRender='About'">About</button>-->
<!--     <button @click="componentToRender='Contact'">Contact</button>-->
<!--    </div>-->
<!--    <keep-alive>-->
<!--      <component :is="componentToRender"></component>-->
<!--    </keep-alive>-->

<!--    Custom directive example -->
<!--    <Header v-custom></Header>-->
<!--    <Header v-customeBinding="'Custom directive binding'"></Header>-->
<!--    <Header v-customelocal></Header>-->
<!--    <Header v-customelocal-binding="'Hello local custom directive binding'"></Header>-->

<!--    Filter-->
<!--    <FilterElement></FilterElement>-->


    <!--    Filter-->
    <Admin></Admin>
    <User></User>


  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import SlotExample from "@/components/SlotExample";
// import Home from "@/components/navbar/Home";
// import About from "@/components/navbar/About";
// import Contact from "@/components/navbar/Contact";
// import FilterElement from "@/components/FilterElement";

import Admin from "@/components/mixin/Admin";
import User from "@/components/mixin/User";






export default {
  name: 'App',
  data(){
    return{
      title: "Footer Title",
      componentToRender: 'Home'
    }
  },
  directives: {
    // customelocal: {
    //   bind(el,binding){
    //     el.innerText = 'Hello local custom directive'
    //   }
    // }
    customelocalBinding: {
      bind(el,binding){
        el.innerText = binding.value
      }
    }
  },
  components: {
    // HelloWorld,
    // Header,
    // Footer,
    // SlotExample,
    // Home,
    // About,
    // Contact,
    // FilterElement,
    Admin,
    User
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
