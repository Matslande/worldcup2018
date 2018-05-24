import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/Games'
import Home from '@/components/Home'
import LeagueTable from '@/components/LeagueTable'
import LiveScore from '@/components/LiveScore'
import Iframe from '@/components/Iframe'
import BonusPoints from '@/components/BonusPoints'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/tabell',
      name: 'LeagueTable',
      component: LeagueTable
    },
    {
      path: '/live',
      name: 'LiveScore',
      component: LiveScore
    },
    {
      path: '/iframe',
      name: 'Iframe',
      component: Iframe
    },
    {
      path: '/bonus-poeng',
      name: 'BonusPoints',
      component: BonusPoints
    }
  ]
})
