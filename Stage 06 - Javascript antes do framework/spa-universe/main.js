import { Router } from './routes.js'

  const router = new Router()
  
  router.addPage("/", './routes/home.html')
  router.addPage("/universe", './routes/universe.html')
  router.addPage("/exploration", './routes/exploration.html')
  
  const universe = document.querySelector('a.universe')
  
  router.shift()
  window.onpopstate = () => router.shift()
  window.route = () => router.route()
  window.redirect = () => universe.click()

