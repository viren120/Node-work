const Post = require('../models/postModel');

const createPost = async (req,res) => {
    try {
        const post = new Post({
            firstname : req.body.firstname ,
            lastname : req.body.lastname ,
            email : req.body.email ,
            image : req.file.filename ,
        })

            const postData = await post.save();

            res.status(200).json({
              success: true,
              message: 'Post Successfully',
              data: postData,
            });
        
    } catch (error) {
            console.log('create Post catch error(postColntroller.js)', error.message);
    res
      .status(400)
      .json({
        success: false,
        message: 'create Post catch error(postColntroller.js)',
      });
    }
}
module.exports = {
    createPost ,
}