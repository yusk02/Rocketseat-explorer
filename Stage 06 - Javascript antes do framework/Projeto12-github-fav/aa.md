`html`

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Github Favorites</title>


  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

  <script src="js/main.js" type="module" defer></script>

</head>
<body>
  <div id="app">
    <header>
      <h1>Github Favorites</h1>
      <div class="search">
        <label class="sr-only" for="input-search">Usuário do Github</label>
        <input id="input-search" type="text" placeholder="Usuário do Github">
        <button>&plus;</button>
      </div>
    </header>
    <table>
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Repositórios</th>
          <th>Seguidores</th>
          <th></th>
        </tr>
      </thead>
      <tbody>


        
      </tbody>
    </table>
  </div>
</body>
</html>



`css`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;

  --ff-primary: 'Poppins', sans-serif;
  --text-color: #303030;
  
  --hue: 194;
  --primary-color: hsl(var(--hue), 100%, 63%);
}

body {
  font-size: 1.6rem;
  color: var(--text-color);
  background-color: rgb(250, 255, 255);
}

body * {
  font-family: var(--ff-primary);  
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

#app {
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2.5rem 0;
}

header h1 {
  font-size: 2rem;
  text-transform: uppercase;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  height: 3.2rem;
  border: 1px solid #CCC;
  border-radius: .4rem 0 0 .4rem;
  padding: 0 .8rem;
}

.search button {
  background-color: var(--primary-color);
  border-radius: 0 .4rem .4rem 0;
  height: 3.2rem;
  border: none;
  padding: 0 1rem;

  cursor: pointer;
}

.search button:hover {
  filter: brightness(1.1)
}

table {
  width: 100%;
  border-collapse: collapse;

  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);
}

table * {
  font-size: 1.4rem;
  color: var(--text-color);
}

table th:first-child {
  border-top-left-radius: .4rem;
}

table th:last-child {
  border-top-right-radius: .4rem;
}

table tr {
  background-color: #EEEE;
}

table tr:nth-child(odd) {
  background-color: #DDD;
}

table th {
  background-color: var(--primary-color);
  text-align: left;
  font-weight: normal;
  padding: 1.5rem;
}

table td {
  padding: 1.5rem;
  text-align: left;
}

td.user {
  display: flex;
  align-items: center;
  gap: 1rem;
}

td.user img {
  width: 5rem;
  height: 5rem;

  object-fit: cover;
  border-radius: 50%;
}

td.user a {
  text-decoration: none;
}

td.user a p {
  font-weight: bold;
}

td .remove {
  background: none;
  border: none;

  color: red;
}



`js/main.js`

import { FavoritesView } from "./Favorites";

new FavoritesView("#app")



`js/Favorites.js`

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'maykbrito',
        name: "Mayk Brito",
        public_repos: '76',
        followers: '120000'
      },
      
      {
        login: 'diego3g',
        name: "Diego Fernandes",
        public_repos: '76',
        followers: '120000'
      }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()
 
    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p'). textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers


      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/maykbrito.png" alt="Imagem de maybrito">
        <a href="https://github.com/maykbrito" target="_blank">
          <p>Mayk Brito</p>
          <span>maykbrito</span>
        </a>
      </td>
      <td class="repositories">
        76
      </td>
      <td class="followers">
        9589
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `
    
    return tr
  }

  removeAllTr() {

    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      })
  }
}