console.log("hello");

let cnt = 0;
 
document.querySelector('.motif').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        if (cnt === 0) document.getElementById('first-image').remove();
        if (cnt >= 4) {
            alert('You can only have a maximum of 4 patterns on your canvas.Try to start again!');
            window.location.reload();
        }
 
        const img = document.createElement('img');
        img.src = event.target.src;
        img.style.zIndex = cnt;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
 
        const appendToBox = () => {
            document.getElementById('box').appendChild(img);
        };
 
        if ('decoding' in img) {
            img.decode().then(appendToBox);
        } else {
            img.onload = appendToBox;
        }
 
        cnt++;
    }
});