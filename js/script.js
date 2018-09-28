//获取p元素里面的文本内容

var text = document.querySelector("#p").innerText;


//格式化p元素的内容

var getText = _.truncate(text, {'length': 30});


//把格式化后的内容赋给h1

document.querySelector("#h1").innerHTML = getText;
