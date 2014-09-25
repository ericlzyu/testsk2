//flash output method
if(flash== undefined){
	var	flash= function(ur ,w ,h){
		document.write('<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="obj1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" border="0" width="'+w+'" height="'+h+'">');
		document.write('<param name="movie" value="'+ur+'">');
		document.write('<param name="quality" value="High">');
		document.write('<embed src="'+ur+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="obj1" width="'+w+'" height="'+h+'">');
		document.write('</object>');
	}
}

//$(document) error,must use jQuery in discuz
//window.onload = function(){
jQuery(document).ready(function(){
	//make the div elements to float left
	jQuery(".ttad_position > div").css({ "float": "left","overflow":"hidden",color:"#FFF"});

	jQuery(".ttad_position .a_order").css({ "text-decoration": "none", color:"#FFF", "font-size": "12px" });
	jQuery(".ttad_position .font-large").css({ "font-size": "30px" });
	jQuery(".ttad_position .font-big").css({ "font-size": "20px" });
	jQuery(".ttad_position .font-normal").css({ "font-size": "14px" });
	//etc.

	//hide all advertisements at first
	//jQuery(".ttad_position > div > div").hide();

	//go through every container
	jQuery(".ttad_position > div").each(function (index, domEle) {
		var rates = [];//save probability value of every advertisement
		var totalrate = Number(jQuery(domEle).attr("class"));//total probability
		var percentRange = new Array;//range of every advertisement,like(0,0.33333) (0.333333,0.66666)……
		var tempPercent = 0;//a temp value
		//go through every advertisement
		jQuery(domEle).children().each(function (index, domEle) { 
		  // domEle == this 
		  rates[index] = Number(jQuery(domEle).attr("class"));//get the probability value
		  percent = rates[index] / totalrate;
		  percentRange[index] = new Array(tempPercent, tempPercent + percent);
		  tempPercent += percent;//important! change this value for next time use.
		});

		var ran = Math.random();
		jQuery.each( percentRange, function(i, n){
		  if((ran > n[0]) && (ran < n[1])){
		  	//alert("随机" + ran + ",range" + percentRange[i] + ",第几个:" + i);
		  	//$(".ttad_position > div > div:eq(" + i + ")").show();//can not show the correct index.
		  	jQuery(domEle).children().eq(i).show();//only this method can successfuly show.
		  }
		});
		
	});
});
//}