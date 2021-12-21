const d = new Date();
d2 = new Date(d)
d2.setMinutes(d.getMinutes() + 45)
d2.setSeconds(d.getSeconds() + 45)

if(d.getHours()>=12){
  var suffix = "PM";
}
else{
  var suffix = "AM"
}

if(d.getHours()>12){
  console.log("Normal Time-- " + d.getHours()%12 + ":" + d.getMinutes() + ":" + d.getSeconds() + suffix)
}
else{
    console.log("Normal Time-- " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + suffix)
}

console.log("Military Time-- " + d2.getHours() + ":" + d2.getMinutes() + ":" + d2.getSeconds())
