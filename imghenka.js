function switchImage(img) {
// 画像を切り替える処理
    if (img.src.match(../images\girl1_normal.png/)) {
        img.src = "../images/girl1_smile.png";
    }
    else if(img.src.match(../images\girl1_smile.png/)){
        img.src = "../images/girl1_upset.png";
    }
    else if(img.src.match(../images\girl1_upset.png/)){
        img.src = "../images/girl1_cry.png";
    }
    else if(img.src.match(../images\girl1_cry.png/)){
        img.src = "../images/girl1_normal.png";
    }
    else if(img.src.match(../images\boy1_normal.png/)){
        img.src = "../images/boy1_smile.png";
    }
    else if(img.src.match(../images\boy1_smile.png/)){
        img.src = "../images/boy1_upset.png";
    }
    else if(img.src.match(../images\boy1_upset.png/)){
        img.src = "../images/boy1_cry.png";
    }
    else if(img.src.match(../images\boy1_cry.png/)){
        img.src = "../images/boy1_normal.png";
    }
    else {
        img.src = "image1.jpg"
    }
  }
function henkou(img){
    if (img.src.match(../images\girl1_normal.png/)) {
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/boy1_normal.png';
    }
    else if(img.src.match(../images\girl1_smile.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/boy1_normal.png';
    }
    else if(img.src.match(../images\girl1_upset.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/boy1_normal.png';
    }
    else if(img.src.match(../images\girl1_cry.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/boy1_normal.png';
    }
    else if(img.src.match(../images\boy1_normal.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/girl1_normal.png';
    }
        else if(img.src.match(../images\boy1_smile.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/girl1_normal.png';
    }
    else if(img.src.match(../images\boy1_upset.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/girl1_normal.png';
    }
    else if(img.src.match(../images\boy1_cry.png/)){
        const imgElement = document.getElementById('imgView');
        imgElement.src = '../images/girl1_normal.png';
    }
    else {
    }
  }
