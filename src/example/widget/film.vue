<template>
  <v-chart :height="height" :width="width" name="film" class="filmWrapper">
    <template slot-scope="{chart}">
      film{{chart}}{{zoom}}
    </template>
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
    },
    zoom: Number
  },
}
</script>
<style scoped>
.filmWrapper{
  font-size: 20px;
  width: 100%;
  background:rgba(4, 29, 69, .6)
}

</style>


