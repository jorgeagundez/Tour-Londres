<?php

	if(isset($_POST['emailFrom'])) {

	$email_to = "contacto@tourlondres.com";
	$email_subject = "Contacto desde Tour Londres";
	$email_from = $_POST['emailFrom'];


	if(!isset($_POST['contactName']) ||
	!isset($_POST['numberOfPeople']) ||
	!isset($_POST['whichTour']) ||
	!isset($_POST['customerDate']) ||
	!isset($_POST['request']) ||
	!isset($_POST['emailFrom']) ||
	!isset($_POST['someTours'])) {
		echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
		echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
		die();
	}

	$email_message .= "Ha recibido un mensaje a través de la página de Tour Londres.\n\n";
	$email_message .= "Este correo electrónico procede del formulario de Contacto hospedado en la web.\n";
	$email_message .= "Los datos de la persona interesada son:\n\n";
	$email_message .= "Nombre y Apellidos: " . $_POST['contactName'] . "\n";
	$email_message .= "Número aproximado de personas (incluida la persona de contacto): " . $_POST['numberOfPeople'] . "\n";
	$email_message .= $_POST['whichTour'] . "\n";
	$email_message .= "Posible Fecha: " . $_POST['customerDate'] . "\n";
	$email_message .= "Email de contacto: " . $_POST['emailFrom'] . "\n";
	$email_message .= "El mensaje de consulta es: \n\n";
	$email_message .= "" . $_POST['request'] . "\n\n";
	$email_message .= $_POST['someTours'] . "\n\n";


	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);

	echo "El formulario se ha enviado correctamente";

	};

?>