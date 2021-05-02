console.log("hello");


 var cnt = 0;

  function showl1() {
    // document.body.replace("index.html", '_blank');
}

  // function showl2 () {
  //   var layer2 = document.querySelector('.item2');
  //   layer2.addEventListener("click", function(){

  //       if (layer2.classList.contains("item2")){
  //           layer2.style.display = "block";
  //     } else {
  //       layer2.style.display = "none";
  //     }
  //    });

  // }

  // function showl3() {

  // }

  // function showl4() {

  // }

    html2canvas(document.querySelector("#box")).then(canvas => {
        document.body.appendChild(canvas)

        this.href = document.getElementById("box").toDataURL();
        this.download = "export.png";
    });


var filterFamily = document.querySelector('#family');
    filterFamily.addEventListener("click", function(){

        if (movieContainer.classList.contains("family")){
            movieContainer.style.display = "block";
      } else {
        movieContainer.style.display = "none";
      }
     });




function pattern(prefix, max_suffix) {
    if (window.cnt == 0) {
      document.getElementById("first-image").remove();
    }
    if (window.cnt >= 4) {
      alert("You can only have a maximum of 4 patterns on your canvas.Try to start again!");
      document.body.replace("index.html", '_blank');

    } else {
      var suffix = Math.floor( Math.random() * (max_suffix - 1) + 2 );
      var img = document.createElement("img");
      img.id = "canvas";
      img.src = "images/" + prefix + "-" + suffix + ".svg";
      img.style = "z-index: " + window.cnt + "; position: absolute; top: 0; left: 0;"
      var img_div_position = document.getElementById("box");
      img_div_position.appendChild(img);
      window.cnt = window.cnt + 1;
    }
  }


// $(function(){
//   function img(prefix, max_suffix) {
//     var suffix = Math.floor( Math.random() * (max_suffix - 1) + 1 );
//     var img = document.createElement("img");
//     img.src = prefix + '-' + suffix;
//     img.style = "z-index: {cnt}; position: absolute; top: 0; left: 0;"
//     var img_div_position = document.getElementById("box");
//     img_div_position.appendChild(img);
//   }

// });


// let canvas = document.querySelector("#canvas");

// canvas.addEventListener("onclick", function (event) {
//   console.log("This is the onclick event");
//   console.log(event);
  


// $(function(){
//   function call_img(prefix, max_suffix) {
//     var suffix = Math.floor( Math.random() * (max_suffix - 1) + 1 );
//     var img = document.createElement("img");
//     img.src = prefix + '-' + suffix;
//     img.style = "z-index: {cnt}; position: absolute; top: 0; left: 0;"
//     var img_div_position = document.getElementById("box");
//     img_div_position.appendChild(img);
//   }

// });