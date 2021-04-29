const Post = require('../models/Post')

module.exports = {
    getPosts: async (req,res)=>{
        console.log(req.user)
        try{
            //Do we want to grab all the todos?
            const postItems = await Post.find({microsoftId: req.user.microsoftId})
            //How can we grab our logged in users left to dos?
            const itemsLeft = await Post.countDocuments({microsoftId: req.user.microsoftId, completed: false})
            res.render('posts.ejs', { posts: postItems,  left: itemsLeft, user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res)=>{
        try{
            await Post.create({ title: req.body.titleItem,post: req.body.postItem, completed: false, microsoftId: req.user.microsoftId})
            console.log('Post has been added!')
            res.redirect('/posts')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    deletePost: async (req, res)=>{
        console.log(req.body.postIdFromJSFile)
        try{
            await Post.findOneAndDelete({_id:req.body.postIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    