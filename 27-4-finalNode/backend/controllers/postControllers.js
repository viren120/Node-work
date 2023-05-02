const Post = require('../models/postModels');

const createPost = async (req,res) => {
  try {
    const post = new Post({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      date: req.body.date,
      image: req.file.filename,
    });
    const postData = await post.save();

    res.status(200).json({
      success: true,
      message: 'post successfully',
      data: postData,
    });
  } catch (error) {
    console.log('connected to MongoDB!!'  , error.message);
    res.status(404).json({ success: false, message: 'error in create-post' });
  }
};

module.exports = {
  createPost,
};
