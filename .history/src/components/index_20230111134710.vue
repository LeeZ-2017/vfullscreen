<template>
  <div class="screenWrapper" :style="`width:${pageW}px;height:${pageH}px;`" ref="screenWrapper">
    <header ref="header">
      <slot name="header"></slot>
    </header>
    <main :style="`height:${mainH}px`">
      <slot></slot>
    </main>
    <footer ref="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import emitter from '../utils/emitter'
import screenfull from 'screenfull'
export default {
  name: 'v-fullscreen',
  mixins: [emitter],
  components: {

  },
  props: {
    /* isFullScreen: {
      type: Boolean,
      default: false
    }, */
    outerSpace: {
      type: Number,
      default: 15
    },
    screenW: {
      type: Number,
      default: 1920
    },
    screenH: {
      type: Number,
      default: 1080
    }
  },
  data() {
    return {
      pageW: 0,
      pageH: 0,
      mainH: 0,
      component: {},
      componentInfo: [],
      rootRate: 0,
      isFullScreen: false,
      isKeydown: false,
      isClick: false
    }
  },
  provide() {
    return {
      root: this.component, // 传递组件本身，子孙组件获取更多操作能力
    }
  },
  watch: {
    isFullScreen(n, o) {
      if (n) {
        const html = document.getElementsByTagName('html')[0]
        html.style.fontSize = '100px'
        this.rootRate = 1
      } else {
        setTimeout(() => {
          this.setHtmlFontSize()
        }, 500)
      }
    }
  },
  computed: {
  },
  methods: {
    setModelHeight() {
      this.$nextTick(() => {
        const height = window.innerHeight || document.documentElement.clientHeight
        const width = window.innerWidth || document.documentElement.clientWidth
        this.pageW = width
        this.pageH = height
      })
    },
    setHtmlFontSize() {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      const htmlDom = document.getElementsByTagName('html')[0]
      const htmlFs = htmlDom.style.fontSize
      htmlDom.style.fontSize = htmlWidth / 19.2 + 'px'
      // console.log('setHtmlFontSize')
      this.rootRate = htmlFs.replace(/[^0-9.]/gi, '') / 100
    },
    handleModel() {
      this.$nextTick(cb => {
        this.componentInfo.forEach(item => {
          const W = item.name + 'W'
          const H = item.name + 'H'
          Object.assign(this.component, {[W]: item.width * this.pageW / 1920, [H]: item.height * this.pageH / 1080 })
          // if (item.name.indexOf('_v-head') && item.name.indexOf('_v-row_') <= -1 && item.name.indexOf('_v-popup_') <= -1 && item.name.indexOf('_v-col_') <= -1 && item.name.indexOf('chart') <= -1) {
          if (!item.level && item.name.indexOf('_v-head') > 0) {
            this.mainH = this.pageH - this.component[H]
            this.broadcast('v-head', 'setHead', this.component)
          } else if (!item.level && item.name.indexOf('_v-foot') > 0) {
            this.mainH = this.mainH - this.component[H]
            this.broadcast('v-foot', 'setFoot', this.component)
          } else if (item.name.indexOf('_v-row') > 0) {
            this.broadcast('v-row', 'setRow', this.component)
          } else if (item.name.indexOf('_v-col') > 0) {
            this.broadcast('v-col', 'setCol', this.component)
          } else {
            this.broadcast('v-chart', 'setChart', this.component)
          }
        })

      })
    },
    toFullScreen(bool) {
      if (!screenfull.isEnabled) {
        console.error('unEnabled')
        return
      }
      if (this.isFullScreen && !bool){
        screenfull.request()
      } else {
        screenfull.exit()
      }
      setTimeout(() => {
        this.setModelHeight()
        this.handleModel()
      }, 400)
    },
    checkFullScreen() {
      var isFull = window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull
    },
    handleResize() {
      const bool = this.checkFullScreen()
      this.isFullScreen = bool
      this.toFullScreen()
      this.broadcast('v-head', 'setFullScreen', this.isFullScreen)
    }
  },
  created() {
    this.setHtmlFontSize()
    this.setModelHeight()
  },
  mounted() {
    const t  = this
    let time = null
    window.onresize = (e) => {
      if (this.isClick) {
        this.isClick = false
        return
      }
      if(time !== null){
        clearTimeout(time)
      }
      time = setTimeout(() => {
        t.handleResize()
      }, 300)

    }
    this.$on('handleModule', obj => {
      // console.log('v-full-screen----handleModule')
      const W = obj.name + 'W'
      const H = obj.name + 'H'
      Object.assign(this.component, {[W]: obj.width * this.pageW / 1920, [H]: obj.height * this.pageH / 1080 })
      this.componentInfo.push(obj)
      // if (!obj.level && obj.name.indexOf('_v-head') && obj.name.indexOf('_v-row_') <= -1 && obj.name.indexOf('_v-popup_') <= -1 && obj.name.indexOf('_v-col_') <= -1 && obj.name.indexOf('chart') <= -1) {
      if (!obj.level && obj.name.indexOf('_v-head') > 0) {
      this.mainH = this.pageH - this.component[H]
      } else if (!obj.level && obj.name.indexOf('_v-foot') > 0) {
        this.mainH = this.mainH - this.component[H]
      }
    })
    this.$on('handleDialog', obj => {
      const W = obj.name + 'W'
      const H = obj.name + 'H'
      Object.assign(this.component, {[W]: obj.width * this.pageW / 1920, [H]: obj.height * this.pageH / 1080 })
      this.componentInfo.push(obj)
    })
    this.$on('handleScreen', bool => {
      const { isFullScreen } = this
      // console.log('isFullScreen', isFullScreen, bool)
      if (isFullScreen !== bool) {
        this.isFullScreen = bool
        this.isClick = true
        this.toFullScreen(false)
        // console.log('handleScreen')
      }
    })
  }
}
</script>
<style scoped>
.screenWrapper{
  background-color: #fff;
  overflow: hidden;
}
main{
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
</style>
