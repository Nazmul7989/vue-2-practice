<template>
  <div>
    <slot name="list"></slot>
    <h3>This is slot example</h3>
    <slot name="para"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotExample",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    test() {

    }
  },
  components: {},

}
</script>

<style scoped>

</style>