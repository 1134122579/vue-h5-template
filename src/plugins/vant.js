// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Image as VanImage, NavBar } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(VanImage)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
