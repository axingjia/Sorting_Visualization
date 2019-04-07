// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

//Alan Huang
//with modification of color, and delay
"use strict";
let values = [];
//value=[{n:1,colorRed:12,colorGreen:12,colorBlue:12}]

let i = 0;
let j = 0;
let nOfItem=50;
let startTime=0;
let delay=function(){
    
};


var GColor = function(r,g,b) {
    r = (typeof r === 'undefined')?0:r;
    g = (typeof g === 'undefined')?0:g;
    b = (typeof b === 'undefined')?0:b;
    return {r:r, g:g, b:b};
};
var createColorRange = function(c1, c2) {
    var colorList = [], tmpColor;
    for (var i=0; i<255; i++) {
        tmpColor = new GColor();
        tmpColor.r = c1.r + ((i*(c2.r-c1.r))/255);
        tmpColor.g = c1.g + ((i*(c2.g-c1.g))/255);
        tmpColor.b = c1.b + ((i*(c2.b-c1.b))/255);
        colorList.push(tmpColor);
    }
    return colorList;
};

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  
  
  // createCanvas(720, 400);
  // values = new Array(width);
  values = new Array(nOfItem);
  // console.log(values);
  var c1=GColor(255,0,0);
  var c2=GColor(0,0,255);
  var colorList=createColorRange(c1,c2);
  // console.log('colorlist',colorList);
  // print('colorlist');
  // print(colorList);
  // print("color ii");
  // print(colorList[1].r);
  for (let i = 0; i < values.length; i++) {
    values[i]={};
    values[i].n = random(height);
    // values[i].colorRed=255*Math.random();
    // values[i].colorGreen=255*Math.random();
    // values[i].colorBlue=255*Math.random();
    var ii=0;
    // ii=Math.floor(map(i,0,values.length,0,254));
    ii=Math.floor(map(values[i].n,0,height,0,254));
    // print('i');
    // console.log(i);
    // print("ii");
    // console.log(Math.floor(ii));
    // print(colorList[ii]);
    // print('1r');
    // print(colorList[0].r);
    // console.log('value',values);
    // console.log("color ii",colorList[ii].r);
    values[i].colorRed=colorList[ii].r;
    values[i].colorGreen=colorList[ii].g;
    values[i].colorBlue=colorList[ii].b;
    
    
    //values[i] = noise(i/100.0)*height;
  }
  
  let startTime=millis();
  
  print(startTime);
  

}



function draw() {
  background(0);
  delay();
if (millis() > 1000+startTime) {
  startTime=millis();
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j].n;
      let b = values[j + 1].n;
      if (a > b) {
        // swap(values, j, j + 1);
        
        
        
          swap(values, j, j + 1);
        // do something
        
        
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;
}
  
  for (let i = 0; i < values.length; i++) {
    stroke(values[i].colorRed,values[i].colorGreen,values[i].colorBlue);
    // line(i, height, i, height - values[i].n);
    // print(height-0);
    let c = color(values[i].colorRed,values[i].colorGreen,values[i].colorBlue); 
    fill(c); // Use color variable 'c' as fill color
    noStroke(); 
    let barWidth=width/20;
    rect(i*barWidth,height-(height-values[i].n),barWidth,height-values[i].n);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
