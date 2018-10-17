import Vue from 'vue'
import Router from 'vue-router'
import ListComponent from '@/components/listComponent'
// Projects
import MonsterGame from '@/components/projects/monsterGame/monsterGame'
import MonsterGameOfficial from '@/components/projects/monsterGame/monsterGameOfficial'
import WonderfulQuotes from '@/components/projects/wonderfulQuotes/wonderfulQuotes'
import WonderfulQuotesOfficial from '@/components/projects/wonderfulQuotesOfficial/wonderfulQuotesOfficial'
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
// sixth Part - Advanced Components
import SixthPart from '@/components/sixthPart/list'
import AdvancedComponents from '@/components/sixthPart/advancedComponents'
import Exercise8 from '@/components/sixthPart/exercise8'
// seven Part - Forms
import SevenPart from '@/components/sevenPart/list'
import Forms from '@/components/sevenPart/forms'
import Exercise9 from '@/components/sevenPart/exercise9'
// eight Part - Directives
import EightPart from '@/components/eightPart/list'
import Directives from '@/components/eightPart/directives'
import Exercise10 from '@/components/eightPart/exercise10'
// nine Part - Filters and Mixins
import NinePart from '@/components/ninePart/list'
import Filters from '@/components/ninePart/filters'
import Mixins from '@/components/ninePart/mixins'
import Exercise11 from '@/components/ninePart/exercise11'
// ten Part - Animations
import TenPart from '@/components/tenPart/list'
import Animations from '@/components/tenpart/animations'
import Exercise12 from '@/components/tenPart/exercise12'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ListComponent
    },
    {
      path: '/monsterGame',
      component: MonsterGame
    },
    {
      path: '/MonsterGameOfficial',
      component: MonsterGameOfficial
    },
    {
      path: '/wonderfulQuotes',
      component: WonderfulQuotes
    },
    {
      path: '/wonderfulQuotesOfficial',
      component: WonderfulQuotesOfficial
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
    },
    {
      path: '/sixthPart',
      component: SixthPart
    },
    {
      path: '/sixthPart/advancedComponents',
      component: AdvancedComponents
    },
    {
      path: '/sixthPart/exercise8',
      component: Exercise8
    },
    {
      path: '/sevenPart',
      component: SevenPart
    },
    {
      path: '/sevenPart/forms',
      component: Forms
    },
    {
      path: '/sevenPart/exercise9',
      component: Exercise9
    },
    {
      path: '/eightPart',
      component: EightPart
    },
    {
      path: '/eightPart/directives',
      component: Directives
    },
    {
      path: '/eightPart/exercise10',
      component: Exercise10
    },
    {
      path: '/ninePart',
      component: NinePart
    },
    {
      path: '/ninePart/filters',
      component: Filters
    },
    {
      path: '/ninePart/mixins',
      component: Mixins
    },
    {
      path: '/ninePart/exercise11',
      component: Exercise11
    },
    {
      path: '/tenPart',
      component: TenPart
    },
    {
      path: '/tenPart/animations',
      component: Animations
    },
    {
      path: '/tenPart/exercise12',
      component: Exercise12
    }
  ]
})
