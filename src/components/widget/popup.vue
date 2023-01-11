<template>
  <chart class="popupWarpper" :height="height" :width="width" :name="popupName" @popChart="val => chart = val" :style="`margin-left: ${ -chart.width / 2 }px;margin-top: ${ -chart.height / 2 }px;`">
    <slot></slot>
  </chart>
</template>
<script>
import chart from './chart'
export default {
  name: 'v-popup',
  components: {
    chart
  },
  data() {
    return {
      chart: {}
    }
  },
  computed: {
    popupName() {
      const name = createHash(5) + '_' + 'v-popup'
      return name
    },
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    }
  },
}
</script>
<style scoped>
.popupWarpper{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  left: 50%;
  top: 50%;
}

</style>


