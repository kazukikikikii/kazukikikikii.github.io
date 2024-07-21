function avatarSelect() {
    let avatarSelect = document.querySelector("#avatarnow")
    let chara = avatarSelect.value
    // セレクトボックスの値を取得
    // console.log(avatarSelect.value)
    // // セレクトボックスの項目を取得
    // let item = avatarSelect.options[avatarSelect.selectedIndex].innerText;
    // console.log(item)
    var avatarnow = document.getElementById('avatarnow');
    avatarnow.addEventListener('change', (event) => {
        var selectavatar = document.getElementById('selectavatar');
        var charabun = document.getElementById('charabun');
        selectavatar.textContent = avatarnow.options[avatarnow.selectedIndex].value + ":" + avatarnow.options[avatarnow.selectedIndex].textContent;
    });
    var pics_src = new Array("images/girl1_normal.png","images/boy1_normal.png","images/robo1.png");
    var num = 0;
    if (chara == "girl1") {
        num = 0;
        charabun.textContent = "私の名前は「少女１(デフォルト)」です。よろしくお願いします。\n趣味は様々な人のお話を聞き、多種多様な人生を追体験することです。\nあなたはどんな人生を歩んで来られましたか？もし良ければ、私とお話しませんか？\n今現在悩んでいること、不安に思っていることがありましたら、いつでも私にお話しください。\n少しでもあなたの心の支えになることができれば、幸いです。" ;
    }
    else if(chara == "boy1"){
        num = 1;
        charabun.textContent = "僕の名前は「少年１(デフォルト)」。どうかよろしく。\n敬語があまり得意じゃないから、出来ればため口で話してくれるとありがたいかな。まぁほら、これから仲良くなろうってんだから、逆に丁度いいよね？\nそんな不安そうな顔しないでよ。長い付き合いになればいいって僕も思ってるからさ。\nそうだ！僕、他人の話を聞くのが割と上手だって、周りからよく言われるんだよね。\n話聞いて欲しいときがあったら、いつでも言ってよ。待ってるから。";
    }
    else {
        num = 2;
        charabun.textContent = "私ノ名前ハ「ロボット１(デフォルト)」ダ。ヨロシクネ。\n私ハ、貴方ノ悩ミヤ苦悩ヲ聞ク事ヲ目的トシテ生マレテキタ。\nカタカナ打ツノ面倒ダカラ、挨拶ハコレグライニシテオクヨ。テハ。";
    }
    document.getElementById("mypic").src=pics_src[num];
}