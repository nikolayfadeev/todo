<?php

$to = "myemail@mail.ru";

$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);


$subject = "Форма обратной связи";
$message = "Имя: $name /n Телефон: $phone";


mail($to,$subject,$message);

//$('#my_form').submit(function(){
//    $.post(
//        'mail.php', // адрес обработчика
//        $("#my_form").serialize(), // отправляемые данные
//
//        function(msg) { // получен ответ сервера
//            $('#my_form').hide('slow');
//            $('#my_message').html(msg);
//        }
//    );
//    return false;
//});