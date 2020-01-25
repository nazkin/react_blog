const router = require('express').Router();

const Blog = require('../models/Blog');




router.get('/', (req,res)=>{
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err=> res.status(400).json(`Error: ${err}`));
});



router.post('/add', (req, res)=> {
    const user = req.body.user;
    const title = req.body.title;
    const info = req.body.info;
    const image = req.body.image;
    const date = Date.parse(req.body.date);

    const blogNew = new Blog({
        user: user, 
        title: title, 
        info: info, 
        image: image, 
        date: date
    });
    
    blogNew.save()
        .then(() => res.json("Blog Added!"))
        .catch(err=> res.status(400).json(`Error: ${err}`));

});

router.get('/:id', (req,res)=>{
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err=> res.status(400).json(`Error: ${err}`));

});

router.delete('/:id', (req, res)=> {
    Blog.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Blog Deleted Successfully'))
        .catch(err=> res.status(400).json(`Error: ${err}`));
});
router.post('/edit/:id', (req,res)=> {
    Blog.findById(req.params.id)
    .then(blog => {
        blog.user = req.body.user;
        blog.title = req.body.title;
        blog.info = req.body.info;
        blog.image = req.body.image;
        blog.date = Date.parse(req.body.date);
//just like post, a put request requires u to save a new entry in the database
        blog.save()
            .then(()=> res.json('Blog is updated'))
            .catch(err => res.status(400).json('error: '+ err));
    });
});

module.exports = router