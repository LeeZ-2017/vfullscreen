<template>
  <v-chart :height="height" :width="width" name="divice" class="diviceWrapper" @popChart="handleChart">
    divice{{chart}}
  </v-chart>
</template>
<script>
import vChart from '../../components/widget/chart'
export default {
  components: {
    vChart
  },
  data() {
    return {
      chart: null
    }
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
  methods: {
    handleChart(obj) {
      this.chart = obj
    }
  }
}
</script>
<style scoped>
.diviceWrapper{
  font-size: 20px;
  width: 100px;
  height: 300px;
  background:rgba(4, 29, 69)
}

</style>


