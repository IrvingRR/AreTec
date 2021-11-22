<?php
function sendNotification(){
    $url = "https://fcm.googleapis.com/fcm/send";

    $fields=array(
        "to"=>$_REQUEST['token'],
        "notification"=>array(
            "body"=>$_REQUEST['message'],
            "title"=>$_REQUEST['title'],
            "icon"=>$_REQUEST['icon'],
            "click_action"=>"https://google.com"
        )
    );
    $headers=array(
            'Authorization: key=AAAAi2yllrk:APA91bGz4geNKy-jgvzvKO2pQko9sYJAH0BsWFlrY_uZOvqIbA2thFwvBs5ZV3FpY3_ZMO5AqH6bjXSRcvzzAubMD-9wHxK4wCB9s1xAONCVXUd0Idt0GklY9oTCn65OWWWnyOJwLLlB',
            'Content-Type:application/json'
        );

        $ch=curl_init();
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($fields));
        $result=curl_exec($ch);
        print_r($result);
        curl_close($ch);
}
sendNotification();
?>