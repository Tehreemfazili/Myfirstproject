
 var sign = "X";

 var disp = document.getElementById("player");

 function printx(number) {

 	 var num = document.getElementById("r" + number);

 	 if ( num.innerHTML == "")
 	 {

 	 	num.innerHTML = "<font-size=60px>" + sign + "</font-size>";
 	 	 
 	    checksign();
 	    disp.innerHTML = "<center>" + sign + "  - Your Turn Now" + "</center>";
 	     winner();
 	 }
 	 
 }

 function checksign(){

	if (sign == "X")
 		sign = "O";
 	else
 		sign = "X"
 }


  function getbox(no){


  	return document.getElementById("r" + no).innerHTML;

  }

  function checkmove(a, b, c, m){
  	

  	if (getbox(a) == m && getbox(b) == m && getbox(c) == m)

  		return true;

  	else
  		return false;
  }
 
    function winner()

    {
    	
		if (checkmove(1,2,3, sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) 
    		|| checkmove(1,4,7, sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) 
    		|| checkmove(1,5,9, sign) || checkmove(3,5,7,sign))
    	{
    		alert("wel")
    		disp.innerHTML = "<center>" + sign + "WON" + "</center>";
    		console.log("print");

    	    for (var i = 1; i <= 9; i++) 
       	    {
    	    	document.getElementById("r" + no).innerHTML = " ";
    	    }
  	}
    }	
    