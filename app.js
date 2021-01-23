// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalk = require('./trash_talk')
const app = express()
const port = 3000

// 職業物件
const targets = [
  {
    'eng': 'engineer',
    'chi': '工程師',
    'img': 'https://drive.google.com/uc?export=view&id=11Pe3gxi2PK3X6jIUNWw0qwHjf0STJ0qd'
  },
  {
    'eng': 'designer',
    'chi': '設計師',
    'img': 'https://drive.google.com/uc?export=view&id=1h8v38rAtmz_fzNDMoPGonYxlypoLoSKb'
  },
  {
    'eng': 'entrepreneur',
    'chi': '創業家',
    'img': 'https://drive.google.com/uc?export=view&id=1jEqDZX7bMVc7y_HZ9G4dJ5O4AMRdJPfM'
  }
]
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', { targets })
})

app.post('/', (req, res) => {
  const checkedItem = req.body.jobs
  const target = targets.find(job => { return job.eng === checkedItem })
  const sentance = trashTalk(target)
  res.render('index', { targets, sentance, checkedItem })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})