require("dotenv").config({ path: "../.env" });
require("colors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

mongoose.connect(process.env.MONGO_URI);
// console.log(path.join(__dirname, "data", "clients.json"));
const clients = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "clients.json"))
);
const projects = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "projects.json"))
);

const Client = require("./models/Client.model");
const Project = require("./models/Project.model");

const importData = async () => {
  try {
    await Client.create(clients);
    await Project.create(projects);
    console.log("Data imported...".bgGreen);
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
};

const deleteData = async () => {
  try {
    await Client.deleteMany();
    await Project.deleteMany();
    console.log("Data deleted".bgRed);
  } catch (error) {
    console.error(error);
  }
  process.exit(0);
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
