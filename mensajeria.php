<?php

if(isset($_POST['submit'])){
    $para = "182455@upslp.edu.mx";
    $asunto = "Enviando infromacion";
    $nombre = $POST['nombre'];
    $correo = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $headers = "MIMIE-Version: 1.0\r\n";
    $headers .= "Content type: text/html; charset=utf8\r\n";
    $cuerpo = "Enviado por : $nombre\n Email: $correo\n Mensaje: $mensaje\n";

    $bool =  mail($para,$asunto,$cuerpo, $headers);
}
else{
    echo "Algo ocurrió mal...";
}
?>
