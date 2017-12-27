// if (!document.getElementsByTagName) return false; 

// select pic
function showpic(whichpic) {

    // if (!document.getElementById("placeholder") )
    //     return false;

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

// placeholder to place the gallery and description
// inserts into document instead of hardcoding in the HTML
function preparePlaceholder() {

    if (!document.createTextNode ||
        !document.createElement ||
        !document.getElementById ||
        !document.getElementById("image_gallery")) 
    { 
        return false;
    }

    /* create image placeholder for gallery in DOM 
     * <img id="placeholder" src="images/placeholder.gif" alt="my image gallery" /> 
     * <p id="description"> Select an image </p> 
     */
    var placeholder = document.createElement("img"); 
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    // paragraph text description
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    desctext = document.createTextNode("Select an image"); 
    // add description textNode to paragraph Node
    description.appendChild(desctext);

   
    // Add above placeholder element to the DOM 
    // insert placeholder in the DOM, right after the image_gallery 
    var target = document.getElementById("image_gallery");
    // this is user defined insertAfter(src, target)
    insertAfter(placeholder, target); 
    insertAfter(description, placeholder); 

} 

// inserts source element after target element(DOM methods only provide insertBefore)
function insertAfter(source, target) {
    // insert after target (check whether target is last child, otherwise insert before next sibling)    
    var parent = target.parentNode; // parent is body
    if (parent.lastElementChild == target) {
        parent.appendChild(source); // append as child to body 
    }
    else {
        target.insertBefore(source, target.nextSibling);
    }
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

// on window load, call prepareGallery, preparePlaceholder
function addLoadEvent(func) {
    // if existing onload is a function, add to it Otherwise link new function
    prevOnload = window.onload;
    if (typeof window.onload != 'function') {

        window.onload = func;
    }
    else {
        // call all functions
        window.onload = function () {
        // var elems = document.body.getElementsByTagName("*");
        prevOnload();
        func();
        };
    }
}


// call load events
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



