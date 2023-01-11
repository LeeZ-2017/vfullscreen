<template>
  <div class="footWarpper" :style="`height:${modelH ? modelH + 'px' : '100%'};width:${modelW ? modelW + 'px' : '100%'}`">
    <slot :chart="{'height': modelH, 'width': modelW, 'zoom': zoom}"></slot>
  </div>
</template>
<script>
import emitter from '../../utils/emitter'
import { createHash } from '../../utils/createHash'
export default {
  name: 'v-foot',
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
      const name = createHash(5) + '_' + 'v-foot'
      return name
    }
  },
  mounted() {
    this.$nextTick(cb => {
        this.dispatch('v-fullscreen', 'handleModule', { name: this.hashName, height: this.height, width: this.width })
        this.modelH = this.root[`${this.hashName}H`]
        this.modelW = this.root[`${this.hashName}W`]
        this.$emit('popFoot', {'height': this.modelH, 'width': this.modelW })
      })
    this.$on('setFoot', obj => {
        this.modelH = obj[`${this.hashName}H`]
        this.modelW = obj[`${this.hashName}W`]
        this.$emit('popFoot', {'height': this.modelH, 'width': this.modelW })
      })
  },
  methods: {
  }
}
</script>
<style scoped>
.footWarpper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>


