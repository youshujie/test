var doc = document,
  averTemp = doc.querySelector("aver-temp"),
  today = doc.querySelector("#temp p"),
  maxMin = doc.querySelector("#max-min"),
  des = doc.querySelector("#descriptiom"),
  dates = doc.querySelectorAll(".footer p"),
  footer = document.querySelectorAll(".footer"),
  iconfont = doc.querySelectorAll(".footer li");
  
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    (function () {
      for (var i = 0; i < 7;) {
        
      }
    })();
    // for () {
    //   footer[i].addEventListener("click",function () {

    // }
    //temperature&description
    for (var i = 0; i <7; i++) {
      var max,min,temperature,state;
      max[i] = JSON.parse(xhr.jsonText).list[i].temp.max;
      min[i] = JSON.parse(xhr.jsonText).list[i].temp.max;
      temperature = max[i] + "/" + min[i];
      maxMin.innerHTML = temperature;
      state[i] = JSON.parse(xhr.jsonText).list[i].weather[0].description;
      des.innerHTML = state[i];
      switch(state[i]) {
        case "light rain" : iconfont[i].innerHTML = "&#xe663;"; break;
        case "moderate rain" : iconfont[i].innerHTML = "&#xe664;"; break;
        case "overcast clouds" : iconfont[i].innerHTML = "&#xe886;";break;
        default: iconfont[i].innerHTML="&#xe886;"; break;
      }
     }
    //date
    for (var i = 0; i < 7; i++) {
      var time = new Date (JSON.parse(xhr.jsonText).list[i].dt*1000);
      var date = time.toLocaleDateString().split("/");//根据本地时间格式，把 Date 对象的日期部分转换为字符串
      var ds = date[1];
      de = ds + "月" + date[2] + "日";
      dates.innerHTML = ds;
      console.log(date);
    }
  }
};
xhr.open("get","http://openweathermap.org/data/2.5/forecast/daily?id=1814906&appid=b1b15e88fa797225412429c1c50c122a",true);
xhr.send();