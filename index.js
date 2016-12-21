const choo = require('choo')
const mainView = require('./views/main')
const devtools = require('choo-devtools')
const choolog = require('choo-log')

const app = devtools(choo())

app.use(choolog())

// const app = choo()
app.model(require('./model'))

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
