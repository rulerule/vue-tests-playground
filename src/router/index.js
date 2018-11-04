import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'

// First Part - Basic Dom Manipulation
import BasicComponent from '@/components/firstPart/basicComponent'
import EventsComponent from '@/components/firstPart/eventsComponent'
import TwoWayDatabindComponent from '@/components/firstPart/twoWayDatabindComponent'
import CSSIntroComponent from '@/components/firstPart/cssIntroComponent'
// Second Part - Conditionals
import Conditionals from '@/components/secondPart/conditionals'
// Third Part - Understanding Vue Instance
import VueInstance from '@/components/thirdPart/vueInstance'
// forth Part - Components Introduction
import ComponentsIntroduction from '@/components/fourthPart/componentsIntroduction'
// fifth Part - Components Communication
import ComponentsCommunication from '@/components/fifthPart/componentsCommunication'
// sixth Part - Advanced Components
import AdvancedComponents from '@/components/sixthPart/advancedComponents'
// seven Part - Forms
import Forms from '@/components/sevenPart/forms'
// eight Part - Directives
import Directives from '@/components/eightPart/directives'
// nine Part - Filters and Mixins
import Filters from '@/components/ninePart/filters'
import Mixins from '@/components/ninePart/mixins'
// ten Part - Animations
import Animations from '@/components/tenpart/animations'
// eleven Part - Connecting to server
import ConnectingToServer from '@/components/elevenPart/connectingToServer'
// twelve Part - Routing
import Routing from '@/components/twelvePart/routing'
// thirteen Part - Vuex
import Vuex from '@/components/thirteenPart/vuex'

// Bases
import FirstPart from '@/components/firstPart/base'
import SecondPart from '@/components/secondPart/base'
import ThirdPart from '@/components/thirdPart/base'
import FourthPart from '@/components/fourthPart/base'
import FifthPart from '@/components/fifthPart/base'
import SixthPart from '@/components/sixthPart/base'
import SevenPart from '@/components/sevenPart/base'
import EightPart from '@/components/eightPart/base'
import NinePart from '@/components/ninePart/base'
import TenPart from '@/components/tenPart/base'
import ElevenPart from '@/components/elevenPart/base'
import TwelvePart from '@/components/twelvePart/base'
import ThirteenPart from '@/components/thirteenPart/base'

// Exercises
import Exercise1 from '@/components/exercises/exercise1'
import Exercise2 from '@/components/exercises/exercise2'
import Exercise3 from '@/components/exercises/exercise3'
import Exercise4 from '@/components/exercises/exercise4'
import Exercise5 from '@/components/exercises/exercise5'
import Exercise6 from '@/components/exercises/exercise6'
import Exercise7 from '@/components/exercises/exercise7'
import Exercise8 from '@/components/exercises/exercise8'
import Exercise9 from '@/components/exercises/exercise9'
import Exercise10 from '@/components/exercises/exercise10'
import Exercise11 from '@/components/exercises/exercise11'
import Exercise12 from '@/components/exercises/exercise12'

// Projects
import MonsterGame from '@/components/projects/monsterGame/monsterGame'
import MonsterGameOfficial from '@/components/projects/monsterGame/monsterGameOfficial'
import WonderfulQuotes from '@/components/projects/wonderfulQuotes/wonderfulQuotes'
import WonderfulQuotesOfficial from '@/components/projects/wonderfulQuotesOfficial/wonderfulQuotesOfficial'
import AnimatedMonsterGame from '@/components/projects/animatedMonsterGame/animatedMonsterGame'
import FinalProject from '@/components/projects/finalProject/finalProject'

// Final Project aux routes
import Portfolio from '@/components/projects/finalProject/portfolio/portfolio'
import Stocks from '@/components/projects/finalProject/stocks/stocks'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Welcome },
    // Lessons
    { path: '/firstPart',
      component: FirstPart,
      children: [
        { path: 'basic', component: BasicComponent },
        { path: 'events', name: 'secondComponent', component: EventsComponent },
        { path: 'twoWayDatabind', component: TwoWayDatabindComponent },
        { path: 'cssIntro', component: CSSIntroComponent }
      ]
    },
    { path: '/secondPart',
      component: SecondPart,
      children: [
        { path: 'conditionals', component: Conditionals }
      ]
    },
    { path: '/thirdPart',
      component: ThirdPart,
      children: [
        { path: 'VueInstance', component: VueInstance }
      ]
    },
    { path: '/fourthPart',
      component: FourthPart,
      children: [
        { path: 'componentsIntroduction', component: ComponentsIntroduction }
      ]
    },
    { path: '/fifthPart',
      component: FifthPart,
      children: [
        { path: 'componentsCommunication', component: ComponentsCommunication }
      ]
    },
    { path: '/sixthPart',
      component: SixthPart,
      children: [
        { path: 'advancedComponents', component: AdvancedComponents }
      ]
    },
    { path: '/sevenPart',
      component: SevenPart,
      children: [
        { path: 'forms', component: Forms }
      ]
    },
    { path: '/eightPart',
      component: EightPart,
      children: [
        { path: 'directives', component: Directives }
      ]
    },
    { path: '/ninePart',
      component: NinePart,
      children: [
        { path: 'filters', component: Filters },
        { path: 'mixins', component: Mixins }
      ]
    },
    { path: '/tenPart',
      component: TenPart,
      children: [
        { path: 'animations', component: Animations }
      ]
    },
    { path: '/elevenPart',
      component: ElevenPart,
      children: [
        { path: 'connectingToServer', component: ConnectingToServer }
      ]
    },
    { path: '/twelvePart',
      component: TwelvePart,
      children: [
        { path: 'routing', component: Routing, props: {name: 'testerouting'} }
      ]
    },
    { path: '/thirteenPart',
      component: ThirteenPart,
      children: [
        { path: 'vuex', component: Vuex }
      ]
    },
    // Exercises
    { path: '/exercise1', component: Exercise1 },
    { path: '/exercise2', component: Exercise2 },
    { path: '/exercise3', component: Exercise3 },
    { path: '/exercise4', component: Exercise4 },
    { path: '/exercise5', component: Exercise5 },
    { path: '/exercise6', component: Exercise6 },
    { path: '/exercise7', component: Exercise7 },
    { path: '/exercise8', component: Exercise8 },
    { path: '/exercise9', component: Exercise9 },
    { path: '/exercise10', component: Exercise10 },
    { path: '/exercise11', component: Exercise11 },
    { path: '/exercise12', component: Exercise12 },
    // Projects
    { path: '/monsterGame', component: MonsterGame },
    { path: '/MonsterGameOfficial', component: MonsterGameOfficial },
    { path: '/wonderfulQuotes', component: WonderfulQuotes },
    { path: '/wonderfulQuotesOfficial', component: WonderfulQuotesOfficial },
    { path: '/animatedMonsterGame', component: AnimatedMonsterGame },
    { path: '/finalProject',
      component: FinalProject,
      children: [
        { path: 'portfolio', component: Portfolio },
        { path: 'stocks', component: Stocks }
      ]
    },
    // Redirect
    { path: '*', redirect: '/' }
  ]
})
