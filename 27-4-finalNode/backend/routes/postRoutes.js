const express = require('express');
const router = express.Router();
// const post_route_App = express();
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer'); 
const path = require('path');

router.use(express.static('public'));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, '../public/postImages') , function(success , error){
        if(error){
            console.log(error , 'error in destination multer')
        }
    });
  },
  filename: function (req, file, callback) {
    const name = Date.now() + '-' + file.originalname;
    callback(null, name, function (success, error) {
      if (error) {
        console.log(error, 'error in filename multer');
      }
    });
  },
});
var upload = multer({ storage: storage });

const postController = require('../controllers/postControllers') 

router.post('/create-post', upload.single('image'), postController.createPost);

module.exports = router;