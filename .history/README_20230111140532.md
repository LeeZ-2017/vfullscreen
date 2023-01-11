# vfullscreen

> w2fe团队vue插件项目

> 大屏可视化项目的组件自适应，默认纵向排版
ddd
> 傻瓜式使用，把设计图的大小填入对应标签即可

> 根据浏览器窗口大小，自动改变模块大小；

> 支持esc推迟全屏、支持点击头部切换 全、半屏

> 提供标签: v-fullscreen包裹全局，v-col列表签, v-row横标签, v-chart图表标签，v-head 顶部标签, v-foot 底部标签


## Build Setup

``` bash
# install dependencies
npm install vfullscreen -save


```

> 下载完成后，引入插件，vue.use(vfullscreen)一下，即可使用

> 示例布局代码如下：

> <template>
>    <v-fullscreen :isFullScreen="isFullScreen">
>      <v-head :height="77" slot="header">
          <upper :height="77"/>
        </v-head>
>      <v-col :width="1300">
>        <v-row :height="500">
>          <film :height="500" :width="400"/>
>          <divice :height="500" :width="460"/>
>          <event :height="500" :width="420"/>
>        </v-row>
>        <v-row :height="470">
>          <film :height="470" :width="430"/>
>          <divice :height="470" :width="520"/>
>          <event :height="470" :width="320"/>
>       </v-row>
>      </v-col>
>      <v-col :width="600">
>        <film :width="600" :height="470"/>
>        <divice :width="600" :height="500"/>
>      </v-col>
>       <v-foot :height="77" slot="footer">
          <upper :height="77"/>
        </v-foot>
>      <v-popup :width="900" :height="800">
>        <event :height="500" :width="600"/>
>      </v-popup>
>    </v-fullscreen>
>  </template>

> 注： upper、film、divice、event 为自定义组件名称
## Keywords

vue大屏可视化