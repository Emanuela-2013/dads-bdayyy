var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image(imageUrl) {
    fabric.Image.fromURL(imageUrl, function(Img) { 
        var block_image_object = Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top: 0,
            left: 0
        });
        canvas.add(Img);
    });
}

function playSound() {
    x.play();
}

new_image('goadad.jpg');
new_image('youngdad.jpg');
new_image('dadanddhriti.jpg');

document.querySelector('.btn').addEventListener('click', playSound);

