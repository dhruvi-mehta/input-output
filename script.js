// If group 1 is clicked create an event. Do this for each group
document.querySelector('#group-1').addEventListener('click', (event) => {
//    if its an image that is clicked run this code
    if (event.target.tagName === 'IMG') {
        // find the img 1 in the box
        const layer1 = document.querySelector('#img-01');
        // change the source of #img-01 to clicked src. 
        layer1.src = event.target.src;
    }
    else {
        // if it's not an image log that. 
        console.log("Did not click an image");
    } 
    });

// If group 1 is clicked create an event. Do this for each group
document.querySelector('#group-2').addEventListener('click', (event) => {
//    if its an image that is clicked run this code
    if (event.target.tagName === 'IMG') {
        // find the img 1 in the box
        const layer1 = document.querySelector('#img-02');
        // change the source of #img-01 to clicked src. 
        layer1.src = event.target.src;
    }
    else {
        // if it's not an image log that. 
        console.log("Did not click an image");
    } 
    });

// If group 1 is clicked create an event. Do this for each group
document.querySelector('#group-3').addEventListener('click', (event) => {
//    if its an image that is clicked run this code
    if (event.target.tagName === 'IMG') {
        // find the img 1 in the box
        const layer1 = document.querySelector('#img-03');
        // change the source of #img-01 to clicked src. 
        layer1.src = event.target.src;
    }
    else {
        // if it's not an image log that. 
        console.log("Did not click an image");
    } 
    });

// If group 1 is clicked create an event. Do this for each group
document.querySelector('#group-4').addEventListener('click', (event) => {
//    if its an image that is clicked run this code
    if (event.target.tagName === 'IMG') {
        // find the img 1 in the box
        const layer1 = document.querySelector('#img-04');
        // change the source of #img-01 to clicked src. 
        layer1.src = event.target.src;
    }
    else {
        // if it's not an image log that. 
        console.log("Did not click an image");
    } 
    });









// Group 1, 2, 3, 4 only have one active layer. Groups don't affect other groups. 

//if you click an layer in an group, it becomes active and turns off any other layer in that group. 

// can switch layers for the group until save. 


// all groups have a src img that gets replaced in their own groups. 



