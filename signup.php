<?php
$errmessage = array();
if($_POST){
  //入力チェック
  if( !$_POST['u']){
    $errmessage[]="ユーザーネームを入力してください";
  } else if(strlen($_POST['u'])>10){
    $errmessage[]="ユーザーネームは10文字以内にしてください";
  }

  if( !$_POST['p']){
    $errmessage[]="パスワードを入力してください";
  } else if( strlen($_POST['p'])>100){
    $errmessage[]="パスワードは100文字以内にしてください";
  }

  if($_POST['p'] != $_POST['p2']){
    $errmessage[]="パスワードが一致しません";
  }
  //重複チェック
  $userfile = '../userinfo.txt';
  $users = array();
  if(file_exists($userfile)){
    $users = file_get_contents($userfile);
    $users = explode("\n",$users);
    foreach( $users as $k => $v) {
    $v_ary = str_getcsv($v);
    if($v_ary[0] == $_POST['u']){
      $errmessage[] = "このユーザーネームはすでに登録されています";
      break;
    }
  }
  }
  
  //新規登録処理
  if(!$errmessage){
    $ph = password_hash($_POST['p'], algo:PASSWORD_DEFAULT);
    $line = '"'. $_POST['u']. '","'.$ph.'"'. "\n";
    $ret = file_put_contents($userfile,$line, flags:FILE_APPEND);
  }

  //ログイン後の画面
  if(!$errmessage){
    $host = $_SERVER['HTTP_HOST'];
    $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    header("Location: //$host$uri/login.php");
  exit;
  }
} else {

}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <ink rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
    <link href="css/style1.css" rel="stylesheet">
    <title>新規登録</title>
  </head>
  <body>
    <div class="container">
      <?php
      if($errmessage){
        echo '<div class="alert alert-danger" role="alert">';
        echo implode('<br>', $errmessage);
        echo '</div>';
      }
      ?>
        <form action="./signup.php" method="post">
          <p class="fsize">新規登録画面</p>
          <input type="text"  name="u"  placeholder="Username"  />
          <input type="password" name="p" placeholder="Password" />
          <input type="password" name="p2" placeholder="Password(確認)" />
          <input type="submit" name="signup" value="新規登録"><br>
        </form>
    </div>
  </body>
</html>