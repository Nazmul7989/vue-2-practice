import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Footer from "@/components/Footer";
// Vue.component('Footer',Footer);

// Vue.component('custom-component',{
//   data(){
//     return{
//       title: "This is a custom component",
//     }
//   },
//   template: `<h3>{{ title }}</h3>`
// })

Vue.directive('custom',{
  bind(el){
    el.innerHTML = 'Hello custom directive';
    el.style.color = 'red';
  }
})

Vue.directive('customeBinding',{
  bind(el,binding){
    el.innerHTML = binding.value;

  }
})

Vue.filter('cut',(value)=>{
  return value.slice(1)
})

new Vue({
  render: h => h(App),
}).$mount('#app')
