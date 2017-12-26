// if (!document.getElementsByTagName) return false; 

// select pic
function showpic(whichpic) {
    if (document.getElementById("placeholder"))  {
        var source = whichpic.getAttribute("href");
        var placeholder = document.getElementById("placeholder")
        placeholder.setAttribute("src", source); // swap link

        // set description
        if (document.getElementById("description")) {
            var title = whichpic.getAttribute("title"); 
            var description = document.getElementById("description");
            if (description.firstChild.nodeType == 3){ // textNode 
                description.firstChild.nodeValue = title; // set description
            }
            return true; // swap successful
        } 
    }
    return false; // swap unsuccessful
}

// show image in gallery with correct title
function prepareGallery() {

    // check browser support
    var supported = document.getElementById && document.getElementsByTagName;
    if (!supported) { return false; }

    // separation of content from behavior
    var gallery = document.getElementById("image_gallery");
    if(!gallery) { return false; }

    // get all links in DOM id=image_gallery
    var links = gallery.getElementsByTagName("a");
    // loop though all links and attach behavior to view in gallery
    for (var i = 0; i < links.length; ++i) {
        links[i].onclick = function() {
            return showpic(this) ? false : true; 
            // if swap successful, showpic returns true
            // return value of event handler determines whether default behavior takes place
        };
    }
}

window.onload = prepareGallery; 




