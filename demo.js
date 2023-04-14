// ---------------------------------POST----------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello Node Api');
});
app.get('/blog', (req, res) => {
  res.send('hello Blog');
});
app.post('/product', async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log('post product catch error', error.message);
    res.status(500).json({ message: error.message });
  }
});
//-------------------------------strictQuery-----------------------------------------------
/* In strict mode, Mongoose will throw an error if you try to query using fields that are |
 not defined in the schema. Disabling strict mode allows you to use fields that are not   |
 explicitly defined in the schema, which can be useful in certain situations.             |*/
//-----------------------------------------------------------------------------------------
// mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://virenp:viren1T&P@cluster0.vvlbqs6.mongodb.net/Node_Api-1'
  )
  .then(() => {
    console.log('connected to MongoDB!!');
    app.listen(port, () => {
      console.log(`conected to port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('mongoose connect catch error', error);
  });
//   ------------------productModel.js------------------------------------------------------
const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a product name'],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  //   timestmp used for create and update
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
// --------------------------------------------GET all products------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log('get all products catch error', error.message);
    res.status(500).json({ message: error.message });
  }
});
// -------------------------GET product by ID------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
app.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await Product.findById(id);
    res.status(200).json(getProductById);
  } catch (error) {
    console.log('get product by id catch error', error.message);
    res.status(500).json({ message: error.message });
  }
});
// --------------------------------------PUT------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------z
app.put('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const putProduct = await Product.findByIdAndUpdate(id, req.body);
    //  we cannot find the prodcuct in database
    if (!putProduct) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id} in PUT request` });
    }
    // res.status(200).json(putProduct);
    // updated data is visible on mongoDB only NOT in insomnia for that problem write below line instead of above line
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log('put products catch error', error.message);
    res.status(500).json({ message: error.message });
  }
});
// -------------------also -  FORM URL ENCODED - save the data add this line  ------------------------
app.use(express.urlencoded({ extended: false }));
// --------------------------------------DELETE Data------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: `cannot find any product with ID ${id} in DELETE request`,
      });
    }
    res.status(200).json(deleteProduct);
  } catch (error) {
    console.log('Delete product catch error', error.message);
    res.status(500).json({ message: error.message });
  }
});