// JavaScript Document

function checkNick(){
    var nick = document.getElementById("nickname");
    var tip = document.getElementById("nickTip");
    var regNick = /^[\u4e00-\u9fa5a-zA-Z]{2,8}$/;
    if(!regNick.test(nick.value)){
        tip.innerText = "昵称仅限中文和字母，长度2~8位";
        tip.style.color = "red";
        nick.classList.add("err-border");
    }else{
        tip.innerText = "通过";
        tip.style.color = "green";
        nick.classList.remove("err-border");
    }
}


function checkName(){
	var flag = true;
	var username = document.getElementById("username");
	var pname=/^[a-zA-Z]\w{4,9}$/;
	if(!pname.test(username.value)){
		flag=false;
		document.getElementById("user").innerHTML="填写错误，账号第一个为字母，长度为5~10个字符";
		document.getElementById("user").style.color="red";
        username.classList.add("err-border");
	}
	else{
		document.getElementById("user").innerHTML="通过";
		document.getElementById("user").style.color="green";
        userna 




//焦点图轮播
window.onload=function(){	
	//顶部的焦点图切换
	function hotChange(){
		var current_index=0;
		var timer=window.setInterval(autoChange, 3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var j=0;j<pic_li.length;j++){
					if(button_li[j]==this){
						current_index=j;
						button_li[j].className="current";
						pic_li[j].className="current";
					}else{
						pic_li[j].className="pic";
						button_li[j].className="but";
					}
				}
			}
			button_li[i].onmouseout=function(){
				timer=setInterval(autoChange,3000);			
			}
		}
		function autoChange(){
			++current_index;
			if (current_index==button_li.length) {
				current_index=0;
			}
			for(var i=0;i<button_li.length;i++){
				if(i==current_index){
					button_li[i].className="current";
					pic_li[i].className="current";
				}else{
					button_li[i].className="but";
					pic_li[i].className="pic";
				}
			}
		}
	}
	hotChange();
	
	//展示
	function school(){
		//定义滚动速度
		var speed = 50;
		//获取<div id="imgbox">元素
		var imgbox = document.getElementById("imgbox");
		//复制一个<span>，用于无缝滚动
		imgbox.innerHTML += imgbox.innerHTML;
		//获取两个<span>元素
		var span = imgbox.getElementsByTagName("span");
		//启动定时器，调用滚动函数
		var timer1 = window.setInterval(marquee,speed);
		//鼠标移入时暂停滚动，移出时继续滚动
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		//滚动函数
		function marquee(){
			//当第1个<span>被完全卷出时
			if(imgbox.scrollLeft > span[0].offsetWidth){
				//将被卷起的内容归0
				imgbox.scrollLeft = 0;
			}else{
				//否则向左滚动
				++imgbox.scrollLeft;
			}
		}
	}
	school();
	
	
function tableChange(){
    var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
    var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
    var texts = document.getElementsByClassName("text-item");
    var current_index=0;
    var timer = setInterval(autoChange,3000);

    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover = function(){
            if(timer){
                clearInterval(timer);
            }
            for(var i=0;i<lis.length;i++){
                if(lis[i]==this){
                    spans[i].className = "sp";
                    texts[i].className = "text-item show";
                    current_index = i;
                }else{
                    spans[i].className = "";
                    texts[i].className = "text-item";
                }
            }
        }
        lis[i].onmouseout = function(){
            timer = setInterval(autoChange,3000);
        }
    }

    function autoChange(){
        ++current_index;
        if (current_index == lis.length) {
            current_index=0;
        }
        for (var i=0; i<lis.length; i++) {
            spans[i].className = "";
            texts[i].className = "text-item";
        }
        spans[current_index].className = "sp";
        texts[current_index].className = "text-item show";
    }	
}
	tableChange();
}
