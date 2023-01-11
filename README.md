# vfullscreen

> vue2可视化大屏组件集

> 1，傻瓜式使用，把设计图（1920 * 1080）上各模块的尺寸，填入对应标签即可
> 2，支持根据浏览器窗口大小，自动改变模块尺寸；支持防抖功能；
> 3，支持esc退出全屏、支持点击头部切换 全/半屏
> 4，提供标签: v-fullscreen全局标签，v-col竖标签, v-row横标签, v-chart图表标签，v-head 顶部标签, v-foot 底部标签


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
>          <upper :height="77"/>
>        </v-head>
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
>         <upper :height="77"/>
>        </v-foot>
>    </v-fullscreen>
>  </template>
## Keywords

vue可视化大屏组件集