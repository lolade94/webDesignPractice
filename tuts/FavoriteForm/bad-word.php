<html>
<head>
	<title> Perv! </title>
</head>
	<?php	
	//process request send data to server
	$YourName= $_REQUEST['YourName'];// request to post data to server
	/* Request text entered for name attribue = "YourName" */
	$FavoriteWord= $_REQUEST['FavoriteWord'];//request to post data  server
	
	?>
	
	<body bgcolor="blue" text="#000">
		
		<p>
		Hi <?php echo $YourName; ?>	
		</p>
		
		<p>
			You like the word <b> <?php echo $FavoriteWord ?> </b>!?!
			
		</p>
		<p> You outha be ashamed of yourself! </p>
	</body>
	
	
</html>
