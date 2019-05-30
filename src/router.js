import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import Calendar from './views/Calendar.vue'
import Register from './views/Register.vue'
import Aboutus from './views/Aboutus.vue'
import Contact from './views/Contact.vue'
import First from './views/First.vue'
import HomeP from './views/HomeP.vue'
import EventsP from './views/EventsP.vue'
import CalendarP from './views/CalendarP.vue'
import RegisterP from './views/RegisterP.vue'
import AboutusP from './views/AboutusP.vue'
import ContactP from './views/ContactP.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/homep',
      name: 'homep',
      component: HomeP
    },
    {
      path: '/eventsp',
      name: 'eventsp',
      component: EventsP
    },
    {
      path: '/calendarp',
      name: 'calendarp',
      component: CalendarP
    },
    {
      path: '/registerp',
      name: 'registerp',
      component: RegisterP
    },
    {
      path: '/aboutusp',
      name: 'aboutusp',
      component: AboutusP
    },
    {
      path: '/contactp',
      name: 'contactp',
      component: ContactP
    },
  ]
})
