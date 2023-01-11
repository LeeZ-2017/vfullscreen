<template>
  <div class="upperImg" :style="`height:100%;width:100%;color: #333;font-size: 30px;`">
    upper{{height}}
  </div>
</template>

<script>
export default {
  components: {

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
  data() {
    return {
      chart: null
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.chartWrapper{
  font-size: 0;
}
.upperImg{
  width: 100%;
}
</style>
