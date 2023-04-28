const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', require('./routes/user.route'));
app.use('/category', require('./routes/category.route'));
app.use('/product', require('./routes/product.route'));
app.use('/order', require('./routes/order.route'));
app.use('/payment', require('./routes/payment.route'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});