 
// all thumbnails  
const thumbnailItems = document.querySelectorAll('.thumbnail-list__item');

//  mouseover event listener to each of the thumbnail items
thumbnailItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Trigger a click event on the hovered element
        console.log("click")
        item.click();
    });
}); 
   