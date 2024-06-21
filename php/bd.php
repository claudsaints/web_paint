<?php
$pool = mysqli_connect('localhost','root','','mpaint');
//url , user , senha e database

/*
Comandos sql para criar o banco:

CREATE DATEBASE mpaint;

CREATE TABLE `usuario`(
`id` int(11) NOT NULL,
`nome` text COLLATE utf8_unicode_ci NOT NULL ,
`email` text COLLATE utf8_unicode_ci NOT NULL,
`senha`  text COLLATE utf8_unicode_ci NOT NULL,
`data` datetime NOT NULL
)

INSERT INTO `usuario`
(`nome`, `email`, `senha`, `data`) 
VALUES 
('[name]','[mail]','[password]','[date]')

*/
?>