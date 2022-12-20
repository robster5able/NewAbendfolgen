//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");
const mongoose = require("mongoose");
const app = express();



app.set('view engine', 'ejs');

var addOrRemove = "none";

var chosenPage = "none";

//let defaultContentLinks = new DefaultContentLinks(); ffg

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

var contentMusik = [

]

var contentDoku = [

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


mongoose.connect("mongodb+srv://robster5able:moggapur24@clusterrob2.mg5qhz8.mongodb.net/abendfolgen", {useNewUrlParser:true});

const linkSchema = {
  name: String,
  url: String
}

const youtubeVideoSchema = {
  url: String
}

const linkItem = mongoose.model("linkItem", linkSchema);
const ItemArrayLinks = new Array(0);
//contentLinks.forEach(addToItemArrayLinks);
//fillLinksInDB();

const gameItem = mongoose.model("gameItem", linkSchema);
const ItemArrayGames = new Array(0);
//contentGames.forEach(addToItemArrayGames);
//fillGamesInDB();

const fussballSongItem = mongoose.model("fussballSongItem", youtubeVideoSchema);
const ItemArrayFussballSongs = new Array(0);
//contentFussballSongs.forEach(addToItemArrayFussballSongs);
//fillFussballSongsInDB();

const fussballUebungItem = mongoose.model("fussballUebungItem", youtubeVideoSchema);
const ItemArrayFussballUebungen = new Array(0);
//contentFussballUebungen.forEach(addToItemArrayFussballUebungen);
//fillFussballUebungenInDB();

const basketballItem = mongoose.model("basketballItem", youtubeVideoSchema);
const ItemArrayBasketball = new Array(0);
//contentBasketball.forEach(addToItemArrayBasketball);
//fillBasketballInDB();

const musikItem = mongoose.model("musikItem", youtubeVideoSchema);
const ItemArrayMusik = new Array(0);
//contentMusik.forEach(addToItemArrayMusik);
//fillMusikInDB();

const dokuItem = mongoose.model("dokuItem", youtubeVideoSchema);
const ItemArrayDoku= new Array(0);
//contentDoku.forEach(addToItemArrayDoku);
//fillDokuInDB();

// Zum initialen befüllen der Datenbank
function addToItemArrayLinks(item, index) {
  ItemArrayLinks.push(
    new linkItem ({
      name: item.name,
      url:item.url
    }));
}

function addToItemArrayGames(item, index) {
  ItemArrayGames.push(
    new gameItem ({
      name: item.name,
      url:item.url
    }));
}

function addToItemArrayFussballSongs(item, index) {
  ItemArrayFussballSongs.push(
    new fussballSongItem ({
      url:item
    }));
}

function addToItemArrayFussballUebungen(item, index) {
  ItemArrayFussballUebungen.push(
    new fussballUebungItem ({
      url:item
    }));
}

function addToItemArrayBasketball(item, index) {
  ItemArrayBasketball.push(
    new basketballItem ({
      url:item
    }));
}

function addToItemArrayMusik(item, index) {
  ItemArrayMusik.push(
    new musikItem ({
      url:item
    }));
}

function addToItemArrayDoku(item, index) {
  ItemArrayDoku.push(
    new dokuItem ({
      url:item
    }));
}



function fillLinksInDB(){
  linkItem.insertMany(ItemArrayLinks, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default link items to DB");
    }
  });
}

function fillGamesInDB(){
  gameItem.insertMany(ItemArrayGames, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default game items to DB");
    }
  });
}

function fillFussballSongsInDB(){
  fussballSongItem.insertMany(ItemArrayFussballSongs, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default FussballSongs items to DB");
    }
  });
}

function fillFussballUebungenInDB(){
  fussballUebungItem.insertMany(ItemArrayFussballUebungen, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default FussballUebungen items to DB");
    }
  });
}

function fillBasketballInDB(){
  basketballItem.insertMany(ItemArrayBasketball, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default Basketball items to DB");
    }
  });
}

function fillMusikInDB(){
  musikItem.insertMany(ItemArrayMusik, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default Musik items to DB");
    }
  });
}

function fillDokuInDB(){
  dokuItem.insertMany(ItemArrayDoku, function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Successfully saved default Doku items to DB");
    }
  });
}


function deleteLinkFromDatabase(name){
  linkItem.findOneAndDelete({name: name }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted link : ", docs);
      }
  });
}

function deleteGameFromDatabase(name){
  gameItem.findOneAndDelete({name: name }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted game : ", docs);
      }
  });
}

function deleteFussballSongFromDatabase(url){
  fussballSongItem.findOneAndDelete({url: url }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted FussballSong : ", docs);
      }
  });
}

function deleteFussballUebungFromDatabase(url){
  fussballUebungItem.findOneAndDelete({url: url }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted Fussball Uebung : ", docs);
      }
  });
}

function deleteBasketballFromDatabase(url){
  basketballItem.findOneAndDelete({url: url }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted Basketball : ", docs);
      }
  });
}

function deleteMusikFromDatabase(url){
  musikItem.findOneAndDelete({url: url }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted Musik : ", docs);
      }
  });
}

function deleteDokuFromDatabase(url){
  dokuItem.findOneAndDelete({url: url }, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted Doku : ", docs);
      }
  });
}



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

var posts = [];

app.get("/", function(req, res) {
  chosenPage = "links";
  linkItem.find({}, function(err, foundItems){
    res.render("links", {
      content: foundItems,
      title: "Links",
      addOrRemove: addOrRemove
    })
  });
});

app.get("/games", function(req, res) {
  chosenPage = "games";
  gameItem.find({}, function(err, foundItems){
    res.render("games", {
      content: foundItems,
      title: "Spiele",
      addOrRemove: addOrRemove
    })
  });
});


app.get("/fussballsongs", function(req, res) {
  chosenPage = "fussballsongs";
  fussballSongItem.find({}, function(err, foundItems){
    res.render("youtubevideos", {
      content: foundItems,
      title: "Fußball-Lieder",
      addOrRemove: addOrRemove
    })
  });
});

app.get("/fussballUebungen", function(req, res) {
  chosenPage = "fussballUebungen";
  fussballUebungItem.find({}, function(err, foundItems){
    res.render("youtubevideos", {
      content: foundItems,
      title: "Fußball-Übungen",
      addOrRemove: addOrRemove
    })
  });
});

app.get("/basketball", function(req, res) {
  chosenPage = "basketball";
  basketballItem.find({}, function(err, foundItems){
    res.render("youtubevideos", {
      content: foundItems,
      title: "Basketball",
      addOrRemove: addOrRemove
    })
  });
});

app.get("/musik", function(req, res) {
  chosenPage = "musik";
  musikItem.find({}, function(err, foundItems){
    res.render("youtubevideos", {
      content: foundItems,
      title: "Musik",
      addOrRemove: addOrRemove
    })
  });
});

app.get("/doku", function(req, res) {
  chosenPage = "doku";
  dokuItem.find({}, function(err, foundItems){
    res.render("youtubevideos", {
      content: foundItems,
      title: "Doku",
      addOrRemove: addOrRemove
    })
  });
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
  case "musik":
      res.redirect("/musik");
      break;
  case "doku":
      res.redirect("/doku");
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
  if(addOrRemove == "add"){
    if(req.body.submit_button == "Ok") {
      //Add new button with link
      if(req.body.name.length > 0 && req.body.url.length > 0){
        const newLinkItem = new linkItem ({
          name: req.body.name,
          url:req.body.url
        });
        newLinkItem.save();
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        deleteLinkFromDatabase(req.body.name);
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
  if(addOrRemove == "add"){
    if(req.body.submit_button == "Ok") {
      //Add new button with link
      if(req.body.name.length > 0 && req.body.url.length > 0){
        const newGameItem = new gameItem ({
          name: req.body.name,
          url:req.body.url
        });
        newGameItem.save();
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        deleteGameFromDatabase(req.body.name);
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
            const newBasketballItem = new basketballItem ({
              url:req.body.url
            });
            newBasketballItem.save();
            break;
        case "fussballUebungen":
            const newFussballUebungItem = new fussballUebungItem ({
              url:req.body.url
            });
            newFussballUebungItem.save();
            break;
        case "fussballsongs":
            const newFussballSongItem = new fussballSongItem ({
              url:req.body.url
            });
            newFussballSongItem.save();
            break;
        case "musik":
            const newMusikItem = new musikItem ({
              url:req.body.url
            });
            newMusikItem.save();
            break;
        case "doku":
            const newDokuItem = new dokuItem ({
              url:req.body.url
            });
            newDokuItem.save();
            break;
        default:
        }
      }
    } else {
      //Abort
    }
  } else if (addOrRemove == "remove"){
      if(req.body.submit_button == "Ok") {
        switch(chosenPage) {
        case "basketball":
        deleteBasketballFromDatabase(req.body.url);
            break;
        case "fussballUebungen":
        deleteFussballUebungFromDatabase(req.body.url);
            break;
        case "fussballsongs":
        deleteFussballSongFromDatabase(req.body.url);
            break;
        case "musik":
        deleteMusikFromDatabase(req.body.url);
            break;
        case "doku":
        deleteDokuFromDatabase(req.body.url);
            break;
        default:
        }


        /*if(pos != -1){
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
        }*/
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
  case "musik":
      res.redirect("/musik");
      break;
  case "doku":
      res.redirect("/doku");
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
