<?php
  $data = file_get_contents('php://input');
  $data = json_decode($data, true);

 
  $email = $data['email'];


  $file = fopen('form_data.txt', 'a');
  fwrite($file, "Email: $email\n\n");
  fclose($file);

  // Отправляем ответ клиенту
  http_response_code(200);
?>