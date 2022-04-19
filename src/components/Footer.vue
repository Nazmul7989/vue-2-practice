<template>
  <div>
    <h3>Footer Component</h3>
    <h4>This is props {{ titleName }}</h4>
    <button @click.prevent="changeTitle">Change Title Name </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {

    }
  },

  // props: ['titleName']
  props: {
    // titleName: String,
    titleName: {
      type: String,
      required: true
    }
  },
  methods: {
    changeTitle(){
      this.$emit('footerTitle','Title has been changed')
    }
  }



}
</script>

<style scoped>

</style>