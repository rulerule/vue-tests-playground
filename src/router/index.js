import Vue from 'vue'
import Router from 'vue-router'
import ListComponent from '@/components/listComponent'
import FirstPart from '@/components/firstPart/list'
import BasicComponent from '@/components/firstPart/basicComponent'
import EventsComponent from '@/components/firstPart/eventsComponent'
import TwoWayDatabindComponent from '@/components/firstPart/twoWayDatabindComponent'
import CSSIntroComponent from '@/components/firstPart/cssIntroComponent'
import SecondPart from '@/components/secondPart/list'
import Conditionals from '@/components/secondPart/conditionals'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ListComponent
    },
    {
      path: '/firstPart',
      component: FirstPart
    },
    {
      path: '/firstPart/basic',
      component: BasicComponent
    },
    {
      path: '/firstPart/events',
      name: 'secondComponent',
      component: EventsComponent
    },
    {
      path: '/firstPart/twoWayDatabind',
      component: TwoWayDatabindComponent
    },
    {
      path: '/firstPart/cssIntro',
      component: CSSIntroComponent
    },
    {
      path: '/secondPart',
      component: SecondPart
    },
    {
      path: '/secondPart/conditionals',
      component: Conditionals
    }

  ]
})
