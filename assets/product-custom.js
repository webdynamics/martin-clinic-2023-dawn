 
// all thumbnail buttons
const thumbnailItems = document.querySelectorAll('.thumbnail-list__item button');

//  mouseover event listener to each of the thumbnail items
thumbnailItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Trigger a click event on the hovered element 
        item.click();
    });
}); 
   
// zoom js
var paneContainer = document.querySelector('.zoom');
var body = document.querySelector('body');

$(".product__media-item").each(function() {

  new Drift($(this).find("img")[0], {
    paneContainer: paneContainer,
    inlinePane: false,
    hoverBoundingBox: true,
  // If true, a bounding box will show the area currently being previewed
  // during touch events
  touchBoundingBox: true,
  // A DOM element to append the bounding box to.
  boundingBoxContainer: body,
    
  });
});