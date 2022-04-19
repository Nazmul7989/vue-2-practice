<template>
  <div>
    <h3>{{ name }}</h3>
    <ul v-for="(mobile) in mobiles" :key="mobile.index">
      <li>{{ mobile }}</li>
    </ul>
  </div>
</template>

<script>
import {TestMixin} from "@/components/mixin/TestMIxin";

export default {
  name: "User",
  data() {
    return {
      name: 'User Panel'
    }
  },
  mixins: [TestMixin]
}
</script>

<style scoped>

</style>