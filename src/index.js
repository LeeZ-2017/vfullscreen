/* const vfullscreen = () =>
    import ('@/components')
const column = () =>
    import ('@/components/widget/column')
const chart = () =>
    import ('@/components/widget/chart') */
import vfullscreen from './components'
import vCol from './components/widget/column'
import vHead from './components/widget/head'
import vFoot from './components/widget/foot'
import vRow from './components/widget/row'
// import vPopup from './components/widget/popup'
import vChart from './components/widget/chart'

const components = [
  vfullscreen,
  vHead,
  vRow,
  vCol,
  vChart,
  // vPopup,
  vFoot
]

const install = function(Vue, opts = {}) {

    components.forEach(component => {
        Vue.component(component.name, component);
    });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
  vfullscreen,
  vHead,
  vRow,
  vCol,
  vChart,
  // vPopup,
  vFoot
}