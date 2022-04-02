import Vue from 'vue'
import VueRouter from 'vue-router'

const About = () => import('../views/about/index')
const People = () => import('../views/people/index')
const Publication = () => import('../views/publication/index')
const Concact = () => import('../views/concact/index')
const Network = () => import('../views/network/index')
const Project = () => import('../views/project/index')

// 引入二级路由
const Page1 = () => import('../views/project/children/page1')
const Page2 = () => import('../views/project/children/page2')
const Page3 = () => import('../views/project/children/page3')
const Page4 = () => import('../views/project/children/page4')
const Page5 = () => import('../views/project/children/page5')
const Page6 = () => import('../views/project/children/page6')
const Page7 = () => import('../views/project/children/page7')
const Page8 = () => import('../views/project/children/page8')
const Page9 = () => import('../views/project/children/page9')



// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/about'
  },
  {
    name: About,
    path: '/about',
    component: About
  },
  {
    name: People,
    path: '/people',
    component: People
  },
  {
    name: Publication,
    path: '/publication',
    component: Publication
  },
  {
    name: Concact,
    path: '/concact',
    component: Concact
  },
  {
    name: Network,
    path: '/network',
    component: Network
  },
  {
    name: Project,
    path: '/project',
    component: Project,
    redirect: '/project/page1',
    children: [
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: Page2
      },
      {
        path: 'page3',
        component: Page3
      },
      {
        path: 'page4',
        component: Page4
      },
      {
        path: 'page5',
        component: Page5
      },
      {
        path: 'page6',
        component: Page6
      },
      {
        path: 'page7',
        component: Page7
      },
      {
        path: 'page8',
        component: Page8
      },
      {
        path: 'page9',
        component: Page9
      }
    ]
  }

]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router
