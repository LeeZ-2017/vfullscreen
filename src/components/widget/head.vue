<template>
  <div class="headWarpper" :style="`height:${modelH ? modelH + 'px' : '100%'};width:${modelW ? modelW + 'px' : '100%'}`"  @click="handleFullScreen">
    <slot :chart="{'height': modelH, 'width': modelW, 'zoom': zoom}"></slot>
  </div>
</template>
<script>
import emitter from '../../utils/emitter'
import { createHash } from '../../utils/createHash'
export default {
  name: 'v-head',
  mixins: [emitter],
  components: {
  },
  inject: ['root'],
  data() {
    return {
      chart: null,
      modelH: 0,
      modelW: 0,
      zoom: 0,
      isFullScreen: false
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
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    hashName() {
      const name = createHash(5) + '_' + 'v-head'
      return name
    }
  },
  mounted() {
    this.$nextTick(cb => {
        this.dispatch('v-fullscreen', 'handleModule', { name: this.hashName, height: this.height, width: this.width })
        this.modelH = this.root[`${this.hashName}H`]
        this.modelW = this.root[`${this.hashName}W`]
        this.$emit('popHead', {'height': this.modelH, 'width': this.modelW})
      })
    this.$on('setHead', obj => {
      this.modelH = obj[`${this.hashName}H`]
      this.modelW = obj[`${this.hashName}W`]
      this.$emit('popHead', {'height': this.modelH, 'width': this.modelW})
    })
    this.$on('setFullScreen', bool => {
      this.isFullScreen = bool
      // console.log('setFullScreen', this.isFullScreen)
    })
  },
  methods: {
    handleFullScreen() {
      this.isFullScreen = !this.isFullScreen
      this.dispatch('v-fullscreen', 'handleScreen', this.isFullScreen)
    }
  }
}
</script>
<style scoped>
.headWarpper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>


