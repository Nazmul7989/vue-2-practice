<template>
  <div>
    <h3>{{ name | upperText | cut }}</h3>
  </div>
</template>

<script>
export default {
  name: "FilterElement",
  data() {
    return {
      name: 'Hello World'
    }
  },
  filters: {
    upperText(value){
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>