function upd()
{
	xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function()
	{
		if (xhr.readyState==4 && xhr.status==200)
		{
			var msg=xhr.responseText;
			console.log(msg)
		}
	}
	xhr.open("GET","https://gitcode.net/m0_70023466/vision-of-oldhelps/-/blob/master/v.txt",true);
	xhr.send();
}