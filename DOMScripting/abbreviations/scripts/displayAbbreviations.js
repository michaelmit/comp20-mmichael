// Create a definitions table dynamically from HTML abbreviations

// on window load call
addLoadEvent(displayAbbreviation);


function displayAbbreviation() {

    // get a node list with all abbreviations in the DOM
    var abbr = document.getElementsByTagName("abbr");

    if (abbr.length < 1) return false; // no abbreviations in list

    // create an object to hold title and values from <abbr>
    var defObject = {};
    for (var i = 0; i < abbr.length; i++) {
        var key= abbr[i].lastChild.nodeValue;
        var definition = abbr[i].getAttribute("title");
        defObject[key] = definition;
    }

    // create an HTML Descriptions-List, populate from definitions Container
    var descList = document.createElement("dl");
    for (key in defObject) {
        var term = document.createElement("dt");
        var termtext = document.createTextNode(key);
        term.appendChild(termtext);
        descList.appendChild(term);

        var def = document.createElement("dd");
        var deftext = document.createTextNode(defObject[key]);
        def.appendChild(deftext);
        descList.appendChild(def);
    }
    var parent = document.getElementsByTagName("body");
    // console.log(parent);
    // console.log("children", parent[0].children);
    parent[0].appendChild(descList);

}





 //  var len = Object.keys(def);
    //  for (var key in def) {
    //     console.log(def[key]);
    //  }



// window.onload = function () {
//     displayAbbreviation();
//     var abbr = document.getElementsByTagName("abbr");
//     console.log(abbr);
//     console.log( abbr[0].getAttribute("title") );
//     def1 = abbr[0].lastChild;
//     console.log(def1);
//     // console.log("length", abbr.length);
//     // for (var i = 0; i < abbr.length; i++) {
//     //     console.log(abbr[i]);
// }

