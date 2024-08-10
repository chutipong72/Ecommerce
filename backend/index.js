const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect(
  "mongodb+srv://chutipong:snkuXJpD2iYHgEUI@cluster0.r0m1g98.mongodb.net/e-commmerce"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// Image Storage

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

// create upload endpoint

app.use("/images", express.static(path.join(__dirname, "/upload/images")));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `https://ecommerce-epqz.onrender.com/images/${req.file.filename}`,
  });
});

// Schema Creation
const productSchema = {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
};
const Product = new mongoose.model("Product", productSchema);

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const newProduct = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(newProduct);
  await newProduct.save();
  console.log("Product added successfully");
  res.json({
    success: 1,
    message: "Product added successfully",
  });
});

// api delete

app.post("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product deleted successfully");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// create get product api
app.get("/products", async (req, res) => {
  let products = await Product.find({});
  console.log("Products fetched successfully");
  res.send(products);
});

// Schema create for user

const Users = new mongoose.model("Users", {
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart_data: {
    type: Object,
  },
});

// create user register api

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Email already exists",
    });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cart_data: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({
    success: true,
    token,
  });
});

// create endpoint for login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        errors: "Invalid password",
      });
    }
  } else {
    res.json({
      success: false,
      errors: "Wrong email id",
    });
  }
});

// create endpoint for newcollection data
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollections = products.slice(1).slice(-8);
  console.log("New collection fetched successfully");
  res.send(newcollections);
});

// create endpoint for popular in women data
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularInWomen = products.slice(0, 4);
  console.log("Popular in women fetched successfully");
  res.send(popularInWomen);
});

// creating middleware to fetch user data

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};

// create endpoint for adding product to cartdata
app.post("/addtocart", fetchUser, async (req, res) => {
  console.log("added to cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cart_data[req.body.productId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cart_data: userData.cart_data }
  );
  res.send("Added to cart successfully");
});

// create endpoint to remove product from cartdata
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("remove from cart", req.body.productId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cart_data[req.body.productId] > 0)
    userData.cart_data[req.body.productId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cart_data: userData.cart_data }
  );
  res.send("Removed from cart successfully");
});

// create endpoint to get cart data
app.post("/getcartdata", fetchUser, async (req, res) => {
  console.log("get cart data");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cart_data);
});

// create endpoint to clear cart data
app.post("/clearcart", fetchUser, async (req, res) => {
  console.log("clear cart data");
  let userData = await Users.findOne({ _id: req.user.id });
  for (let i = 0; i < 300; i++) {
    userData.cart_data[i] = 0;
  }
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cart_data: userData.cart_data }
  );
  res.send("Cart cleared successfully");
});

// schema for order

const orderSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  country: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  products: [productSchema],
});

const Order = mongoose.model("Order", orderSchema);

app.post("/addOrder", async (req, res) => {
  const newOrder = new Order({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    country: req.body.country,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    products: req.body.products,
  });
  newOrder.save();
  res.json({
    success: 1,
    message: "Order added successfully",
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(error);
  }
});
