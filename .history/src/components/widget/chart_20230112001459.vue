<template>
  <div class="chartWrapper" :style="`height:${modelH ? modelH + 'px' : '100%'};width:${modelW ? modelW + 'px' : '100%'}`">
    <slot :chart="{'height': modelH, 'width': modelW}"></slot>
  </div>
</template>

<script>
import emitter from '../../utils/emitter'
import { createHash } from '../../utils/createHash'
export default {
  name: 'v-chart',
  mixins: [emitter],
  components: {},
  inject: ['root'],
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modelH: 0,
      modelW: 0
    }
  },
  watch: {},
  computed: {
    hashName() {
      return this.name + '_' + createHash(5)
    }
  },
  methods: {
    handleMounted() {
      this.$nextTick(cb => {
        this.dispatch('v-fullscreen', 'handleModule', { name: this.hashName, height: this.height, width: this.width })
        this.modelH = this.root[`${this.hashName}H`]
        this.modelW = this.root[`${this.hashName}W`]
        // console.log('v-chart-dispatch', this.root)
        this.$emit('popChart', {'height': this.modelH, 'width': this.modelW})
      })
      this.$on('setChart', obj => {
        console.log('setChart', obj, this.hashName)
        this.modelH = obj[`${this.hashName}H`]
        this.modelW = obj[`${this.hashName}W`]
        this.$emit('popChart', {'height': this.modelH, 'width': this.modelW})
      })
    },

  },
  created() {
  },
  mounted() {
    this.handleMounted()
  }
}
</script>
<style scoped>
</style>
