//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
//const defaultContentLinks = require(__dirname + "/defaultContent/defaultContentLinks.js");
const defaultContentBasketball = require(__dirname + "/defaultContent/defaultContentBasketball.js");
const defaultContentFussballVideos = require(__dirname + "/defaultContent/defaultContentFussballVideos.js");
const defaultContentFussballUebungen = require(__dirname + "/defaultContent/defaultContentFussballUebungen.js");

app.set('view engine', 'ejs');

var addOrRemove = "none";

var chosenPage = "none";

//let defaultContentLinks = new DefaultContentLinks();

class link {
  constructor (name, url){
    this.name = name;
    this.url = url;
  }
}

var contentLinks = [
  new link("Löwenzahn", "https://www.zdf.de/kinder/loewenzahn"),
  new link("Robin Hood", "https://www.zdf.de/kinder/robin-hood"),
  new link("Abenteuer Meerjungfrau", "https://www.zdf.de/kinder/h2o-abenteuer-meerjungfrau"),
  new link("Wickie", "https://www.zdf.de/kinder/wickie-und-die-starken-maenner"),
  new link("Jonalu", "https://www.zdf.de/kinder/jonalu"),
  new link("Bibi und Tina", "https://www.zdf.de/kinder/bibi-und-tina"),
  new link("Kokusnuss", "https://www.zdf.de/kinder/der-kleine-drache-kokosnuss"),
  new link("Marcus Level", "https://www.zdf.de/kinder/marcus-level"),
  new link("Petterson und Findus", "https://www.zdf.de/kinder/pettersson-und-findus"),
  new link("Heidi", "https://www.zdf.de/kinder/heidi"),
  new link("Checker Tobi", "https://www.ardmediathek.de/sammlung/checker-reportagen/5pWQjFo06Cq9XRDU6ECIeN?isChildContent"),
  new link("Möwenweg Kinder", "https://www.zdf.de/kinder/wir-kinder-aus-dem-moewenweg"),
  new link("Peter Pan", "https://www.zdf.de/kinder/peter-pan"),
  new link("Biene Maja", "https://www.zdf.de/kinder/die-biene-maja"),
  new link("Petronella Apfelmus", "https://www.zdf.de/kinder/petronella-apfelmus")
]

var contentGames = [
  new link("Schneeballschlacht", "https://www.toggo.de/spiele/spiel/schneeballschlacht"),
  new link("Snake (Slither.io)", "http://slither.io")
]

var contentBasketball = [
  "https://www.youtube.com/embed/GgIxIZhEAs0"
]

var contentFussballUebungen = [
  "https://www.youtube.com/embed/eM6_TlbcASM",
  "https://www.youtube.com/embed/W7D-JJesUTo",
  "https://www.youtube.com/embed/qHxLbAJThO8"
]

var contentFussballSongs = [
  "https://www.youtube.com/embed/jyfARgCE9qo",
  "https://www.youtube.com/embed/GBqG0RZSvjI",
  "https://www.youtube.com/embed/fsrsaoL7nIM",
  "https://www.youtube.com/embed/VQAp9mnWk0g",
  "https://www.youtube.com/embed/A6rm9OIZoLs",
  "https://www.youtube.com/embed/mWswL_Ulumc",
  "https://www.youtube.com/embed/sXkwxuT2ymE",
  "https://www.youtube.com/embed/BL1N1c_Ri9s",
  "https://www.youtube.com/embed/9cgb_SO4QlM",
  "https://www.youtube.com/embed/QNg5qvOBwFw",
  "https://www.youtube.com/embed/_K0ddtPqbs4",
  "https://www.youtube.com/embed/T-0g1ObcHbg",
  "https://www.youtube.com/embed/nNvamtbFPhg",
  "https://www.youtube.com/embed/jnJspO-qZMA"
]


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

var posts = [];

app.get("/", function(req, res) {

  chosenPage = "links";

  res.render("links", {
    content: contentLinks,
    title: "Links",
    addOrRemove: addOrRemove
  })
});

app.get("/games", function(req, res) {

  chosenPage = "games";

  res.render("games", {
    content: contentGames,
    title: "Spiele",
    addOrRemove: addOrRemove
  })
});

app.get("/fussballsongs", function(req, res) {

  chosenPage = "fussballsongs";

  res.render("youtubevideos", {
    content: contentFussballSongs,
    title: "Fußball-Lieder",
    addOrRemove: addOrRemove
  })
});

app.get("/fussballUebungen", function(req, res) {

  chosenPage = "fussballUebungen";

  res.render("youtubevideos", {
    content: contentFussballUebungen,
    title: "Fußball-Übungen",
    addOrRemove: addOrRemove
  })
});

app.get("/basketball", function(req, res) {

  chosenPage = "basketball";

  res.render("youtubevideos", {
    content: contentBasketball,
    title: "Basketball",
    addOrRemove: addOrRemove
  })
});




//-------post requests

app.post("/", function(req, res) {

  if(req.body.submit_button == "add") {
    addOrRemove = "add";
  } else if (req.body.submit_button == "remove") {
    addOrRemove = "remove";
  }

  switch(chosenPage) {
  case "links":
    res.redirect("/");
    break;
  case "games":
    res.redirect("/games");
    break;
  case "basketball":
      res.redirect("/basketball");
      break;
  case "fussballUebungen":
      res.redirect("/fussballUebungen");
      break;
  case "fussballsongs":
      res.redirect("/fussballsongs");
      break;
  default:

  }

});

app.post("/abort", function(req, res) {
console.log("gotya");
  addOrRemove = "none";
  res.redirect("/");
});

app.post("/addOrRemoveLink", function(req, res) {
console.log("addOrRemoveLink");
  if(addOrRemove == "add"){
    if(req.body.submit_button == "Ok") {
      //Add new button with link
      if(req.body.name.length > 0 && req.body.url.length > 0){
        contentLinks.push(new link(req.body.name, req.body.url));
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        //remove button with link
        let i = 0;
        let pos = -1;

        contentLinks.forEach(function(link) {
          if(link.name == req.body.name){
            pos = i;
          }
          i++;
        });

        if(pos != -1){
          //remove item
          contentLinks.splice(pos,1);
        }
      } else {
        //Abort
      }
    } else {
      //Abort
    }
  addOrRemove = "none";
  res.redirect("/");
});

app.post("/addOrRemoveGame", function(req, res) {
console.log("addOrRemoveGame");
  if(addOrRemove == "add"){
    if(req.body.submit_button == "Ok") {
      //Add new button with link
      if(req.body.name.length > 0 && req.body.url.length > 0){
        contentGames.push(new link(req.body.name, req.body.url));
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        //remove button with link
        let i = 0;
        let pos = -1;

        contentGames.forEach(function(link) {
          if(link.name == req.body.name){
            pos = i;
          }
          i++;
        });

        if(pos != -1){
          //remove item
          contentGames.splice(pos,1);
        }
      } else {
        //Abort
      }
    } else {
      //Abort
    }
  addOrRemove = "none";
  res.redirect("/games");
});

app.post("/addOrRemoveYouTubeVideo", function(req, res) {
console.log("addOrRemoveYouTubeVideo");
  if(addOrRemove == "add"){
    if(req.body.submit_button == "Ok") {
      //Add new button with link
      if(req.body.url.length > 0){

        switch(chosenPage) {
        case "basketball":
            contentBasketball.push(req.body.url);
            break;
        case "fussballUebungen":
            contentFussballUebungen.push(req.body.url);
            break;
        case "fussballsongs":
            contentFussballSongs.push(req.body.url);
            break;
        default:
        }
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        //remove button with link
        let i = 0;
        let pos = -1;



        switch(chosenPage) {
        case "basketball":
            contentBasketball.forEach(function(link) {
              if(link.url == req.body.name){
                pos = i;
              }
              i++;
            });
            break;
        case "fussballUebungen":
            contentFussballUebungen.forEach(function(link) {
              if(link.url == req.body.name){
                pos = i;
              }
              i++;
            });
            break;
        case "fussballsongs":
            contentFussballSongs.forEach(function(link) {
              if(link.url == req.body.name){
                pos = i;
              }
              i++;
            });
            break;
        default:
        }


        if(pos != -1){
          //remove item
          switch(chosenPage) {
          case "basketball":
              contentBasketball.splice(pos,1);
              break;
          case "fussballUebungen":
              contentFussballUebungen.splice(pos,1);
              break;
          case "fussballsongs":
              contentFussballSongs.splice(pos,1);
              break;
          default:
          }
        }
      } else {
        //Abort
      }
    } else {
      //Abort
    }
  addOrRemove = "none";
  
  switch(chosenPage) {
  case "basketball":
      res.redirect("/basketball");
      break;
  case "fussballUebungen":
      res.redirect("/fussballUebungen");
      break;
  case "fussballsongs":
      res.redirect("/fussballsongs");
      break;
  default:
  }


});











      app.listen(3000, function() {
        console.log("Server started on port 3000");
      });










      app.post("/compose", function(req, res) {
        const post = {
          title: req.body.postTitle,
          body: req.body.postBody
        };

        posts.push(post);
        res.redirect("/");

      });


      app.get("/posts/:someInput", function(req, res) {

            const requestetTitle = lodash.lowerCase(req.params.someInput);

            posts.forEach(function(post) {

                const storedTitle = lodash.lowerCase(post.title);

                if (storedTitle === requestetTitle) {
                  res.render("post", {
                    content: post.body,
                    postTitle: post.title
                  })
                }

            });
      });
