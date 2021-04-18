let x=0;
let jsonobj;
let btns = []; // 館所有的 btn
// 預讀取
function preload(){
jsonobj = loadJSON('data.json');
img = loadImage('assets/map.jpg');
}
function setup() {
createCanvas(360, 180, );
console.log(jsonobj);
console.log(jsonobj.metadata.count);
console.log(jsonobj.features[0].geometry.coordinates);
console.log(jsonobj.features[0].geometry.coordinates);
jsonobj.features.forEach((v)=>{
let lat = v.geometry.coordinates[0];
let lang = v.geometry.coordinates[1];
let mag = v.properties.mag;
// 根據每筆資料製作 btn 物件
btns.push(new btn((lat+180),180-(lang+90),mag*mag*1.3));
});
}
function draw() 
{
//background(220);
image(img, 0, 0,360,180);
  
  
  
  
// 根據 btns 袋子中的每物件進行顯示
btns.forEach((b)=>{
b.display();
})
}
// 物件導向建立 按鈕
class btn{
constructor(x,y,size){
this.x = x;
this.y = y;
this.size = size;
}
display()
  {

  
if (mouseX>this.x-this.size/2 &&
mouseX<this.x+this.size/2 &&
mouseY>this.y-this.size/2 &&
mouseY<this.y+this.size/2){

  
fill(mouseX,150,0,0,this.size*3)
rect(mouseX,mouseY,x,20+5*sin(x));
}else {
fill(mouseY,mouseX,0,this.size*2);
circle(mouseX,mouseY,x);
}
noStroke(0);
  
  
  //triangle(x1, y1, x2, y2, x3, y3);
//circle(this.x,this.y,this.size);
  rect(this.x,this.y,this.size);
}
}