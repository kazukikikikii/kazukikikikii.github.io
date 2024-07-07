var pics_src = new Array("images/girl1_normal.png","images/girl1_smile.png","images/girl1_upset.png","images/girl1_cry.png","images/boy1_normal.png","images/boy1_smile.png","images/boy1_upset.png","images/boy1_cry.png");
var num = 0;

function slideshow(){
    if (num == 7) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("mypic").src=pics_src[num];
}

function henkou(){
    if (num < 4){
        num = 4;
        document.getElementById("mypic").src=pics_src[num];
    }
    else{
        num = 0;
        document.getElementById("mypic").src=pics_src[num];
    }
}
