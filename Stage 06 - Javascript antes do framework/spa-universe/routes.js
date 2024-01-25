export class Router {
  routes = []

  addPage(route, page) {
    this.routes[route] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()


    window.history.pushState({}, "", event.target.href)
  
    this.shift()
    this.updateRoom(window.location.pathname)
    this.room(event)
  }

  shift() {
    const { pathname } = window.location
    const route = this.routes[pathname]
    fetch(route).then(data => data.text()).then(text => {
      document.getElementById('content').innerHTML = text

      this.updateRoom(pathname)
    })

  }

  updateRoom(pathname) {
    const classes = pathname.substr(1) || 'home'

    let targetClass = `a.${classes}`
    if (targetClass == 'a.') {
      targetClass = 'a.home'
    }
    const backgroundImages = document.body.querySelectorAll('img')
  
    let currentSpan = document.querySelector('.span')
    let currentVisible = document.querySelector('.visible')
    let image = null
  
    backgroundImages.forEach((img) => {
      if (img.classList.contains(classes)) {
        image = img
      }
    })
  
    if (currentVisible !== null) {
      currentVisible.classList.remove('visible')
    }
  
    if (image !== null) {
        image.classList.add('visible')
    }
  
    if (currentSpan !== null) {
      currentSpan.classList.remove('span')
    }
  
    const target = document.querySelector(targetClass)
    if (target !== null) {
      target.classList.add('span')
    }
  }

  room(event) {
    const target = event.target
    const targetClass = target.classList.toString()
    const backgroundImages = document.body.querySelectorAll('img')
  
    let currentSpan = document.querySelector('.span')
    let currentVisible = document.querySelector('.visible')
  
    let image = null
  
    backgroundImages.forEach((img) => {
      if (img.classList.contains(targetClass)) {
        image = img
      }
    })
  
    if (target !== currentSpan) {
      if (currentVisible !== null) {
        currentVisible.classList.remove('visible')
      }
  
      if (image !== null) {
        image.classList.add('visible')
      }
  
      if (currentSpan !== null) {
        currentSpan.classList.remove('span')
      }
  
      target.classList.add('span')
    }
  }

}

