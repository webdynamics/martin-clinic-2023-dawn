 
// all thumbnail buttons
const thumbnailItems = document.querySelectorAll('.thumbnail-list__item button');

//  mouseover event listener to each of the thumbnail items
thumbnailItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Trigger a click event on the hovered element 
        item.click();
    });
}); 
   