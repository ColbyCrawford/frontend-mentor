const mapImage = document.querySelector('.map-img');
var baseImage = { x: 1110, y: 543 };

var newYork = document.getElementById('new-york');
var newYorkPos = { x: 160, y: 95 };

window.onload = (e) => {
    var currentImageX = mapImage.width;
    var currentImageY = mapImage.height;
    
    updatePointer(currentImageX, currentImageY);
}
window.onresize = (e) => {
    var currentImageX = mapImage.width;
    var currentImageY = mapImage.height;
    
    updatePointer(currentImageX, currentImageY);
};

function updatePointer(currentX, currentY) {
    
    // Get largest dimension increase
    var xScale = currentX / baseImage.x;
    var yScale = currentY / baseImage.y;
    var scale;
    var yOffset = 0;
    var xOffset = 0;
    
    if (xScale > yScale) {
        // The image fits perfectly in x axis, stretched in y
        scale = xScale;
        yOffset = (currentY - (baseImage.y * scale)) / 2;
    } else {
        // The image fits perfectly in y axis, stretched in x
        scale = yScale;
        xOffset = (currentX - (baseImage.x * scale)) / 2;
    }
    
    newYork.style.top = newYorkPos.y * scale + yOffset + "px";
    newYork.style.left = newYorkPos.x * scale + xOffset + "px";
    // pointer.css('top', (target.y) * scale + yOffset);
    // pointer.css('left', (target.x) * scale + xOffset);
}