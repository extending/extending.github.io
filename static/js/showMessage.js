var $msgbox = $('<div class="msgbox"></div>')
var $msg = $('<div class="msg"></div>').appendTo($msgbox);
var showMessage = function (str) {
	$msg.text(str);
	$msg.showtime =3
	$msgbox.appendTo('body');
	if(!isShow){
		messageListShow();
	}
}

var showTimer;
var isShow = false;
var messageListShow = function(){
	isShow = true;
	showTimer = setInterval(function(){
		$msg.showtime--;
		if( $msg.showtime<=0){
			$msgbox.remove();
			isShow = false;
			clearInterval(showTimer);
		}
	},1000)
}