<template>
  <v-fullscreen :isFullScreen="isFullScreen">
    <v-head :height="77" slot="header">
      <upper :height="77"/>
    </v-head>
      <v-col :height="720" :width="420">
        <film :height="300" :width="400"/>
        <event :height="300" :width="420"/>
      </v-col>
      <v-row :width="780" :height="400">
        <film :height="400" :width="430"/>
        <event :height="320" :width="320"/>
      </v-row>
    <v-foot :height="77" slot="footer">
      <upper :height="77"/>
    </v-foot>
    <!-- <v-popup :width="900" :height="800">
      <event :height="500" :width="600"/>
    </v-popup> -->
  </v-fullscreen>
</template>

<script>
import vFullscreen from '../components/index.vue'
import vRow from '../components/widget/row.vue'
import vHead from '../components/widget/head.vue'
import vFoot from '../components/widget/foot.vue'
import vCol from '../components/widget/column.vue'
import vChart from '../components/widget/chart.vue'
import vPopup from '../components/widget/popup'
import upper from './widget/upper'
import film from './widget/film'
import event from './widget/event'
import divice from './widget/divice'
import Divice from './widget/divice.vue'
export default {
  components: {
   vFullscreen , vCol, upper, film, event, divice, vRow, vPopup, vChart, vHead, vFoot,
    Divice
  },
  props: {},
  data() {
    return {
      isFullScreen: false
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {
    //  console.log('index-------created')
  },
  mounted() {
    // console.log('index-------mounted')
  }
}
</script>
<style scoped>
.wrapper{}
</style>
