const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const colors = require('colors');

// database connection
// mongoose.connect(process.env.DATABASE).then(() => {
//     console.log(`Database connected successfully`.red.bold);
//   });

  mongoose.connect(process.env.LOCAL_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log(`Database connected successfully`.red.bold))
  .catch((err) => console.log(err));

const app = require('./app');

// port connection
const port = 4040;

app.listen(port, () => {
    console.log(`Server is running at ${port}`.yellow.bold);
})