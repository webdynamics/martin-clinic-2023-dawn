 
// all thumbnails  
const thumbnailItems = document.querySelectorAll('.slider__slide .thumbnail-list__item');

//  mouseover event listener to each of the thumbnail items
thumbnailItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Trigger a click event on the hovered element
        item.click();
    });
}); 
   