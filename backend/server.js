import express from 'express'
import mongodb from 'mongodb'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const dbUrl = 'mongodb://localhost/redditclone'

function validate(data){
  let errors = {}
  if(data.title === "") errors.title = "Please Provide a Title"
  if(data.image === "") errors.image = "Please Provide an Image URL"
  if(data.content === "") errors.content = "Please Provide some content for your post"
  const isValid = Object.keys(errors).length === 0
  return {errors, isValid};
}

app.use(cors())

const port = 8080


mongodb.MongoClient.connect(dbUrl, function(err, db) {


  app.get('/api/posts', (req, res) => {

    db.collection('posts').find({}).toArray((err, posts) => {
      res.json({ posts })
    })

  })

  app.post('/api/posts', (req, res) => {
    const {errors, isValid } = validate(req.body);
    if (isValid){
      const { title, image, content} = req.body
      db.collection("posts").insert({title, image, content}, (err, result)=> {
        if(err){
          res.status(500).json({errors: {global: "something went wrong"}})
        } else{
          res.json({post: result.ops[0]})
        }
      })
    }else{
      res.status(400).json({errors})
    }
  })

  app.use((req, res)=> {
    res.status(404).json({
      errors: {
        global: "Still working on it, please try this again later :)"
      }
    })
  })

    app.listen(port, () => console.log(`'server listening on ${port}'`));



})
