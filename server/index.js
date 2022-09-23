require("dotenv").config();
require("colors")
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const PORT = process.env.PORT || 7000;

const schema = require("./schema/schema")
const connectDB = require("./configs/db")

const app = express();

// graphQL middleware
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == "dev"
}))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`.bgMagenta);
  connectDB()
});
