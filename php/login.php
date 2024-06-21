<?php
require_once("./bootstrap.php");

$email = $_POST["email"];
$email = htmlspecialchars($email,ENT_QUOTES);
$senha = $_POST["password"];
$senha = htmlspecialchars($senha,ENT_QUOTES);

$sqli = mysqli_query($pool,"SELECT `email`,`senha` FROM `usuario` WHERE `email` = '$email' and `senha` = '$senha'");

$verifica = mysqli_num_rows($sqli);
if($verifica == true){
    echo "<script>window.alert('Você tem cadastro')</script>";
    echo "<script>window.location.href = '../html/paint.html'</script>";


}else{
    echo "<script>window.alert('Você não tem cadastro')</script>";
    echo "<meta http-equiv='refresh' content='0;regiter'>";
    return false;
    
}

?>