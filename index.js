const choo = require('choo')
const mainView = require('./views/main')
const devtools = require('choo-devtools')

const app = devtools(choo())

// const app = choo()
app.model(require('./model'))

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
