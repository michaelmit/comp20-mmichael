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

// placeholder to place the gallery and description
// inserts into document instead of hardcoding in the HTML
function preparePlaceHolder() {

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
    description = document.createElement("p");
    description.setAttribute("id", "description");
    desctext = document.createTextNode("Select an image"); 
    // add description textNode to paragraph Node
    placeholder.appendChild(desctext);

   
    // Add above placeholder element to the DOM 
    // insert placeholder in the DOM, right after the image_gallery 
    var target = getElementById("image_gallery");
    insertAfter(placeholder, gallery); // this is user defined

} 

// inserts source element after target element(DOM methods only provide insertBefore)
function insertAfter(source, target) {
    
}
   
   
   
   
   
   
   
   
   
                



    // var image_placeholder = document.createElement("img");
    // // set id, src and title for the new image
    // image_placeholder.setAttribute("id", "placeholder");
    // image_placeholder.setAttribute("src", "images/placeholder.gif");
    // image_placeholder.setAttribute("alt", "My Image Gallery");

    // // create element for desciption text
    // var para = document.createElement("p");
    // // set id for para
    // para.setAttribute("id", "description on image")    
    // // create text element and append to para element
    // var desctext = createTextNode("click on image");
    // para.appendChild(desctext);

    // image_placeholder.appendChild(para);

    // // append newly created nodes into the DOM
    // // insert image placeholder after gallery
    // var gallery = getElementById("image_gallery"); // unordered list, mini gallery
    // insertAfter(gallery, image_placeholder); // insertAfter(target, newElement);


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




