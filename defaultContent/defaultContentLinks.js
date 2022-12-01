//jshint esversion:6

module.exports = DefaultContentLink;

class link {
  constructor (name, url){
    this.name = name;
    this.url = url;
  }
}

class DefaultContentLink {

constructor(){
  var content = [
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
}

function getContent(){
    return content;
  }

  function addContent(name, url){
    content.push(name, url);
  }
}
