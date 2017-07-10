'use strict';

var oT = document.title;
var oM = document.getElementsByTagName('meta');
var str1;


for (let i =0; i < oM.length; i++) {
	if (oM[i].name == 'Description' || oM[i].name == 'description') {
		str1 = oM[i].content;
	}
};

// alert("标题是：" + oT);

// alert('Description的内容是：' + str1);

var pattern = /游戏/ig;

if (pattern.test(str1) == true || pattern.test(oT) == true) {
	window.location.assign("http://www.baidu.com");
};
