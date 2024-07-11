<?php
session_start();
$errmessage = array();
if($_POST){
  //入力チェック
  if(!$_POST['u']){
    $errmessage[]="ユーザーネームを記入してください";
  } else if(mb_strlen($_POST['u']) > 10){
    $errmessage[]="ユーザーネームは10文字以内にしてください";
  }

  if(!$_POST['p']){
    $errmessage[]="パスワードを記入してください";
  } else if(mb_strlen($_POST['p']) > 100){
    $errmessage[]="パスワードは100文字以内にしてください";
  }

  $userfile = '../userinfo.txt';
  if(file_exists($userfile)){
    $users = file_get_contents($userfile);
    $users = explode("\n",$users);
    foreach( $users as $k => $v) {
    $v_ary = str_getcsv($v);
    if($v_ary[0] == $_POST['u']){
      if(password_verify($_POST['p'], $v_ary[1])){
        $_SESSION['u'] = $_POST['u'];
        //ログイン後の画面
        $host = $_SERVER['HTTP_HOST'];
        $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
        header("Location: //$host$uri/homegamen.php");
        exit;
      }
    }
   }
   $errmessage[] = "ユーザーネームまたはパスワードが正しくありません";
  } else {
    $errmessage[] = "ユーザーリストファイルが見つかりません";
  }
} else {
  if(isset($_SESSION['u']) && $_SESSION['u']){
    $host = $_SERVER['HTTP_HOST'];
    $uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
    header("Location: //$host$uri/homegamen.php");
    exit;
    }
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <ink rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
    <link href="css/style1.css" rel="stylesheet">
    <title>ログイン</title>
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
        <form action="./login.php" method="post">
          <p class="fsize">ログイン画面</p>
          <input type="text"  name="u" placeholder="Username" />
          <input type="password" name="p" placeholder="Password" />
          <input type="submit" name="login" value="ログイン"><br>
        </form>
    </div>
  </body>
</html>