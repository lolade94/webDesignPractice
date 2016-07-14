<?php
    require_once "html/session/session.php"
	
	session_start();
	
	if(!(isset($_SESSION["count"]))
	{
		$_SESSION["count"]=0;
		$_SESSION["start"]=time();
	}
	
	$_SESSION["count"]++;
	
	
	$template->setVariable("SESSION", session_id());
	$template->setVariable("COUNT", $_SESSION["count"]);
	$template->setVariable("START", $_SESSION["start"]);
	$duration->time()-$_SESSION["start"];
	$template->setVariable("Duration", $duration);
	
	$template->parseCurrentBlock();
	
	$template->show();
	
	
?>