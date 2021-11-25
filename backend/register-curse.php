<?php 

    if(!empty($_POST["name"]) && !empty($_POST["lastname"]) && !empty($_POST["email"]) && !empty($_POST["stateCountry"]) && !empty($_POST["postalCode"]) && !empty($_POST["phone"])) {
        
        $destino = "atencionalcliente@aretec.tech";
        $name = $_POST["name"];
        $lastname = $_POST["lastname"];
        $email = $_POST["email"];
        $stateCountry = $_POST["stateCountry"];
        $postalCode = $_POST["postalCode"];
        $phone = $_POST["phone"];
        $content = "Nombres: " . $name . "\nApellidos". $lastname . "\nCorreo" . $email . "\nEstado y País" . $stateCountry . "\nCódigo Postal" . $postalCode . "\nTeléfono"; 
    
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $sendMail = mail($destino, "Servicio al cliente: Inscripción al curso", $content);

            if($sendMail) {
                $response = array("status" => "success", "message" => "Mensaje enviado con éxito");
                echo json_encode($response);

            }else {
                $response = array("status" => "error", "message" => "Ocurrió un error al enviar el mensaje");
                echo json_encode($response);
            }
        }else {
            $response = array("status" => "error", "message" => "Correo electrónico invalido");
            echo json_encode($response);
        }
    } else {
        $response = array("status" => "error", "message" => "Todos los campos deben ser llenados");
        echo json_encode($response);
    }

?>