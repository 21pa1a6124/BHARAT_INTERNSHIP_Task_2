const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Welcome to our Blog!Discover insightful articles, engaging stories, and helpful tips on various topics. Whether you're passionate about technology, travel, food, or personal development, we've got something for everyone. Explore our latest posts and immerse yourself in a world of knowledge and inspiration. From how-to guides to thought-provoking essays, our diverse collection of content aims to entertain, educate, and inspire. Join our community of readers and writers as we embark on a journey of discovery together. Start exploring now and uncover the endless possibilities that await you! Happy reading!";
const aboutContent = "Welcome to My Blob! We are passionate about sharing insightful content, inspiring stories, and useful tips to help you navigate through life's journey. Our blog is a platform where you can find a wide range of topics, from personal development and self-improvement to travel adventures and food explorations.";
const contactContent = "We welcome your inquiries, feedback, and suggestions. Please feel free to reach out to us using the contact details provided below: Email: Vishnu@gmail.com\n Phone: 99592120945\n Address:Bhimavaram,534202"
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent
  });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  // This part is handling the form submission for composing a post
  // You can add your logic here if you want to handle form submission without database
  res.redirect("/");
});

app.get("/posts/:postId", function(req, res){
  // This part is handling displaying a single post
  // You can add your logic here if you want to display a post without fetching it from the database
  res.render("post", {
    title: "Sample Post Title",
    content: "Sample Post Content"
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
