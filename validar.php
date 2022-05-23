<?php
//include('db.php');
$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;


$conexion=mysqli_connect('localhost','root','','rol');
$consulta="SELECT*FROM usuarios where usuario='$usuario' and contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);


$filas=mysqli_fetch_array($resultado);
$resultado2= isset($filas);


if ($filas['id_cargo']==1){ //Empleado
    header("location:admin.php");

}else
if($filas['id_cargo']==2){ //cliente
header("location:cliente.html");
}


else{
    ?>
    <?php
    include("index.php");

  ?>
  <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
  <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);


