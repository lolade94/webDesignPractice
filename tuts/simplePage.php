<!DOCTYPE html>
<html>
	<head>
	<title> Simple Page</title>
	<script src="simplePage.js"></script>
	</head>
		<body>
		<?php
		//define php database variables 
		//store sql server information
		$host="localhost";
		$user="root@localhost";
		$pw="esther94@";
		$dbname="eventtuts";
		
		//start php session 
		//this prevents spamming the click count by refreshing the page
		session_start();
		
		/*mysql_real_escape_status() computer processes special characters
		$_SERVER['PHP_SELF']
		*/
		//$_SERVER - array contains  info: headers, paths, scripts location
		
		//$_SERVER['PHP_SELF'] IS LOAD DATA FROM THIS PHP FILE
		$curPage= mysql_real_escape_string(htmlspecialchars($_SERVER['PHP_SELF']));
		
		//set number of clicks variable to 0
		$clicks=0;
		
		
		//do not recount if page currently loaded
		if($_SESSION['page']!= $curPage){
			//set current page as session variable
			$_SESSION['page']=$curPage;
			
			
			//try to connect mySQL Server
			if(!$link=mysql_connect($host, $user, $pass)){
				echo "Could not connect to MySQL server. Check your login information; the MySQL server may also be of";
			}
			elseif(!mysql_select_db($dbname){
				echo "Cannot select database.";
			}
			else{
				 //get current click count for page from database
				 //output error message on failure
				 if(!$result= mysql_query("SELECT * FROM clicks WHERE page_url='$curPage'")){
					 echo "Could not create new click counter for this page.";
				 }
				 
				 //if no record for this page found
				 elseif(mysql_num_rows($result)==0)
				 {
					 //try to create new record and set count for new page to 1;
					 //output  error message if problem encountered
					 if(!$result=mysql_query("INSERT INTO click (page_url, page_count) VALUES('$curPage', 1)"))
					 {
						 echo "Could not create new click counter for this page.";
					 }
				 
				 else{
					 $clicks=1;
				 }
			}
			else{
				//get number of clicks for page and add 1
				$row= mysql_fetch_array($result);
				$clicks= $row['page-count'] + 1;
				//update click count in database;
				//report error if not updated
				if(!$result=mysql_query("UPDATE clicks SET page_count= $clicks WHERE page_url ='$curPage'")){
					echo "Could not save new click count for this page.";
				}
			}
			
		}
    }
		
		?>
		
		</body>
</html>