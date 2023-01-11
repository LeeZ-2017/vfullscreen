<template>
<div class="columnWrapper" :style="`height:${colH ? colH + 'px' : '100%'};width:${colW ? colW + 'px' : '100%'}`">
    <slot></slot>
  </div>
</template>
<script>
import emitter from '../../utils/emitter'
import { createHash } from '../../utils/createHash'
export default {
  name: 'v-col',
  mixins: [emitter],
  inject: ['root'],
  data() {
    return {
      chart: null,
      colH: 0,
      colW: 0
    }
  },
  computed: {
    hashName() {
      const name = createHash(5) + '_' + 'v-col'
      return name
    },
  },
  mounted() {
    this.$nextTick(cb => {
      // console.log('hashName', this.hashName)
      this.dispatch('v-fullscreen', 'handleModule', { name: this.hashName, height: this.height, width: this.width })
      this.colH = this.root[`${this.hashName}H`]
      this.colW = this.root[`${this.hashName}W`]
    })
    this.$on('setCol', obj => {
      // console.log('setCol', obj)
      this.colH = this.root[`${this.hashName}H`]
      this.colW = this.root[`${this.hashName}W`]
    })
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
    /* handleChart(obj) {
      this.chart = obj
      console.log('handleChart', obj)
      this.colHeight = obj.height
      this.colWidth = obj.width
    } */
  }
}
</script>
<style scoped>
.columnWrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
