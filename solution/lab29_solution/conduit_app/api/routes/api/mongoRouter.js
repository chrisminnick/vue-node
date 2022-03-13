const express = require('express')
const router = express.Router()
let {generateUniqueId, DataUtility, Article} = require('../../model/mongoUtility')


router.get('/articles', async (req, res) => {
    let utility = new DataUtility()
    let result = []
    result = await utility.findAll()
    res.json({articles : result})
})

router.post('/articles', async (req, res) => {
    let slug = generateUniqueId() 
    let title = req.body.title
    let description = req.body.description
    let body = req.body.body
    let tagList = req.body.tagList
    let author = req.body.author
    let newArticle = new Article(slug, title, description, body, tagList, author)
    let utility = new DataUtility()
    await utility.save(newArticle)
    res.location(`http://localhost:3000/articles/${slug}`)
    res.sendStatus(201)
    
})

// router.put('/articles/:slug', (req, res) => {
//     let slug = req.params.slug
//     let utility = new DataUtility()
//     let userData = req.body
//     try {
//         let result = utility.update(slug, userData)
//         res.status(200).json(result)               
//     } catch {
//         res.status(404).json({error : "File not found"})
//     }    
// })

// router.delete('/articles/:slug', (req, res) => {
//     let slug = req.params.slug
//     let utility = new DataUtility();
//     try {
//         let result = utility.delete(slug)
//         res.status(204).json({message: "success"})
//     } catch (error) {
//         res.status(404).json({error : "File not found"})
//     }
// })


module.exports = router