import express from "express";

/* <-----MODEL-----> */
import User from "../models/User";

const router = express.Router();

router.post("/sign-up", (req, res) => {
  console.log(req.body);
  const { name, emailAddress, age, country, password } = req.body;
  const newUser = new User({
    name,
    emailAddress,
    age,
    country,
    password
  });
  newUser
    .save()
    .then(savedUserRecord => {
      console.log("New user Saved. User details below: ");
      console.log(savedUserRecord);
    })
    .catch(error => {
      console.log(error);
    });
});

router.post("/login", (req, res) => {});

export default router;
