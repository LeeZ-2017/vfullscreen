<template>
  <v-chart :height="height" :width="width" name="event" class="eventWrapper" @popChart="val => chart = val">
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
}
</script>
<style scoped>
.eventWrapper{
  width: 100%;
  background:rgba(4, 29, 69, .6);
  font-size: 20px;
}

</style>


