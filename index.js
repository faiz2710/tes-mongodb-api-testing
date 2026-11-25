require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const product = require('./models/product.model')
const productRoutes = require('./routes/product.route')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/products',productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!, hihu');
});


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});