import Vue from 'vue'
import Router from 'vue-router'
import ListComponent from '@/components/listComponent'
// First Part - Basic Dom Manipulation
import FirstPart from '@/components/firstPart/list'
import BasicComponent from '@/components/firstPart/basicComponent'
import EventsComponent from '@/components/firstPart/eventsComponent'
import TwoWayDatabindComponent from '@/components/firstPart/twoWayDatabindComponent'
import CSSIntroComponent from '@/components/firstPart/cssIntroComponent'
import Exercise1 from '@/components/firstPart/exercise1'
import Exercise2 from '@/components/firstPart/exercise2'
import Exercise3 from '@/components/firstPart/exercise3'
import Exercise4 from '@/components/firstPart/exercise4'
// Second Part - Conditionals
import SecondPart from '@/components/secondPart/list'
import Conditionals from '@/components/secondPart/conditionals'
import Exercise5 from '@/components/secondPart/exercise5'
import MonsterGame from '@/components/secondPart/monsterGame'
import MonsterGameOfficial from '@/components/secondPart/monsterGameOfficial'
// Third Part - Understanding Vue Instance
import ThirdPart from '@/components/thirdPart/list'
import VueInstance from '@/components/thirdPart/vueInstance'
// forth Part - Components Introduction
import FourthPart from '@/components/fourthPart/list'
import ComponentsIntroduction from '@/components/fourthPart/componentsIntroduction'
import Exercise6 from '@/components/fourthPart/exercise6'
import Exercise6Solution from '@/components/fourthPart/exercise6Solution'
// fifth Part - Components Communication
import FifthPart from '@/components/fifthPart/list'
import ComponentsCommunication from '@/components/fifthPart/componentsCommunication'
import Exercise7 from '@/components/fifthPart/exercise7'

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
      path: '/firstPart/exercise1',
      component: Exercise1
    },
    {
      path: '/firstPart/exercise2',
      component: Exercise2
    },
    {
      path: '/firstPart/exercise3',
      component: Exercise3
    },
    {
      path: '/firstPart/exercise4',
      component: Exercise4
    },
    {
      path: '/secondPart',
      component: SecondPart
    },
    {
      path: '/secondPart/conditionals',
      component: Conditionals
    },
    {
      path: '/secondPart/exercise5',
      component: Exercise5
    },
    {
      path: '/secondPart/monsterGame',
      component: MonsterGame
    },
    {
      path: '/secondPart/MonsterGameOfficial',
      component: MonsterGameOfficial
    },
    {
      path: '/thirdPart',
      component: ThirdPart
    },
    {
      path: '/thirdPart/VueInstance',
      component: VueInstance
    },
    {
      path: '/fourthPart',
      component: FourthPart
    },
    {
      path: '/fourthPart/componentsIntroduction',
      component: ComponentsIntroduction
    },
    {
      path: '/fourthPart/exercise6',
      component: Exercise6
    },
    {
      path: '/fourthPart/exercise6Solution',
      component: Exercise6Solution
    },
    {
      path: '/fifthPart',
      component: FifthPart
    },
    {
      path: '/fifthPart/componentsCommunication',
      component: ComponentsCommunication
    },
    {
      path: '/fifthPart/exercise7',
      component: Exercise7
    }
  ]
})
