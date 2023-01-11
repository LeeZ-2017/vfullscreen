<template>
  <div class="rowWarpper" :style="`height:${rowH ? rowH + 'px' : '100%'};width:${rowW ? rowW + 'px' : '100%'}`">
    <slot></slot>
  </div>
</template>
<script>
import emitter from '../../utils/emitter'
import { createHash } from '../../utils/createHash'
export default {
  name: 'v-row',
  mixins: [emitter],
  inject: ['root'],
  data() {
    return {
      chart: null,
      rowH: 0,
      rowW: 0
    }
  },
  computed: {
    hashName() {
      const name = createHash(5) + '_' + 'v-row'
      return name
    },
  },
  mounted() {
    this.$nextTick(cb => {
      // console.log('hashName', this.hashName)
      this.dispatch('v-fullscreen', 'handleModule', { name: this.hashName, height: this.height, width: this.width })
      this.rowH = this.root[`${this.hashName}H`]
      this.rowW = this.root[`${this.hashName}W`]
    })
    this.$on('setRow', obj => {
      // console.log('setRow', obj)
      this.rowH = this.root[`${this.hashName}H`]
      this.rowW = this.root[`${this.hashName}W`]
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
  }
}
</script>
<style scoped>
.rowWarpper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>


