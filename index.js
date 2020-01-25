const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const path = require('path');
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoDB = 'mongodb://localhost:27017/myBlog_react';
mongoose.connect(process.env.MONGODB_URI||mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }, function(err){
    if(err){
        console.log(err);
    }else {
        console.log(`mongoDB connected`);
    }
});
const blogRouter = require('./routes/blogRoutes');
const userRouter = require('./routes/userRoutes');
app.use('/blogs', blogRouter);
app.use('/users', userRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('my_blog_app/build'));
    app.get('*', (req,res)=> {
        res.sendFile(path.join(__dirname,'my_blog_app','build','index.html'));
    })
}
app.listen(PORT, ()=> {
    console.log("Server is listening on port:"+ PORT);
});