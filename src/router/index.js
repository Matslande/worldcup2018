import Vue from 'vue'
import Router from 'vue-router'
import Games from '@/components/Games'
import LeagueTable from '@/components/LeagueTable'
import LiveScore from '@/components/LiveScore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
