<template>
  <v-chart :height="height" :width="width" name="event" class="eventWrapper" @popChart="handleChart">
    <div style="color:#fff">{{chart}}event</div>
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
      // console.log('handleChart----event', obj)
      this.chart = obj
    }
  }
}
</script>
<style scoped>
.eventWrapper{
  width: 100%;
  background:rgba(4, 29, 69, .6);
  font-size: 20px;
}

</style>


