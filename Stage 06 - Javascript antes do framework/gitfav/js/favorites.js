export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
    
  }

  load() {
    this.inputs = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.inputs))
  }

  async addUser(username) {
    try {
      const user = await githubUser.search(username)
      
      if (user.login === undefined) {
        throw new Error('Usuário não encontrado!')
      }

      const userAlreadyIn = this.inputs.find(input => input.login === username)
        
      if (userAlreadyIn) {
        throw new Error('Usuário já está adicionado à lista de favoritos!')
      }    
      
      this.inputs = [user, ...this.inputs]
      this.save()
      this.update()

    } catch(error) {
      alert(error.message)
    }
    
  }
  
  removeUser(user) {
    const updateInputs = this.inputs.filter(input => input.login !== user.login)

    this.inputs = updateInputs
    this.save()
    this.update()  
  }
  
}

export class GitFav extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onAdd()
  }

  onAdd() {
    const enterSearch = this.root.querySelector('#input-search')
    enterSearch.addEventListener("keydown", (event) => {
      if(event.key === "Enter") {
        this.searchUser()
      }
    })
    
    const buttonSearch = this.root.querySelector('.search-button')

    buttonSearch.onclick = () => this.searchUser()

  }
  searchUser() {
    const { value } = this.root.querySelector('#input-search')

    if(value === "") {
      return
    }
    this.addUser(value)
  }

  newRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>
      <div class="user">
        <img src="https://github.com/maykbrito.png" alt="">
        <div class="name-username">
          <span><a href="https://github.com/maykbrito">Mayk Brito</a></span>
          <p><a href="https://github.com/maykbrito">/maykbrito</a></p>
        </div>
      </div>
    </td>

    <td class="repositories">
      111
    </td>

    <td class="follower">
      22222
    </td>

    <td>
      <button class="remove">Remover</button>
    </td>
    `

    return tr
  }

  update() {
    this.trRemove()

    this.inputs.forEach(input => {
      const row = this.newRow()
      
      row.querySelector('.user img').src = `https://github.com/${input.login}.png`
      row.querySelector('.user a').href = `https://github.com/${input.login}`
      row.querySelector('.user span a').innerHTML = input.name
      row.querySelector('.user p').innerHTML = `/${input.login}`
      row.querySelector('.repositories').innerHTML = input.public_repos
      row.querySelector('.follower').innerHTML = input.followers
      row.querySelector('.remove').onclick = () => {
        const removalConfirm = confirm("Deseja remover este usuário de seus favoritos?")

        if (removalConfirm) {
          this.removeUser(input)
        }
      };

      this.tbody.append(row)

    })

    const disableEmptyNote = this.root.querySelector('#empty')

    if (this.inputs.length > 0) {
      disableEmptyNote.classList.add('disabled')
    } else {
      disableEmptyNote.classList.remove('disabled')
    }
  }

  trRemove() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }

}

export class githubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(({ name, login, public_repos, followers }) => ({
      name,
      login,
      public_repos,
      followers
    }))
  }
}