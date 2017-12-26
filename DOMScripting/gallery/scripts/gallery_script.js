// if (!document.getElementsByTagName) return false; 

function prepareGallery() {

    // check browser support
    var supported = document.getElementById && document.getElementsByTagName;
    if (!supported) { return false; }

    // separation of content from behavior
    var gallery = document.getElementById("image_gallery");
    if(!gallery) { return false; }

    // get all links in DOM id=image_gallery
    var links = gallery.getElementsByTagName("a");
    // console.log(links);
    // loop though all links and attach behavior to view in gallery
    for (var i = 0; i < links.length; ++i) {
        links[i].onclick = function() {
            
        };
    }
}

window.onload = prepareGallery; 




