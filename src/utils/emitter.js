function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    /* 是否存在多级嵌套 */
    const isChildren = child.$children.length
    /* 自定义标签名 */
    var name = child.$options._componentTag
    /* 如果名称相同，emit */
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
      /* 递归调用给子孙组件实时广播 */
      if (isChildren) {
        broadcast.call(child, componentName, eventName, params)
      }
    } else {
      /* 处理自定义标签名和要广播的的组件名称存在嵌套情况 */
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options._componentTag
      var level = 0
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        level++
        if (parent) {
          name = parent.$options._componentTag
        }
      }
      if (parent) {
        if (typeof params === 'object') params.level = level
        // debugger
        // params.parentData = parent.$options.propsData
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
