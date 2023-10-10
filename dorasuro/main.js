let b=["1",2,3,4,5,6,7];

let a=["🐯","🐒","🐮","🐭","🐍","🐇","🐲","☠️"];

let c=["🐉","❌","🐉","🐉","🐉","🐉","🐉","🐉","🐉","🐉"];
let e=["🐉"];

let v1 = a[0];

let v2 = a[1];

let v3 = a[2];

let v4 = a[3];

let v5 = a[4];

let v6 = a[5];

let v7 = a[6];

let v8 = c[1];

let v9= c[0];
let v10= a[7];

let d=[];

let f=[];

let g=[];

let r=[0];


let cou=1;
let cou_t=1;

const s1=document.getElementById("s1");

const s2=document.getElementById("s2");

const s3=document.getElementById("s3");


const atari= document.getElementById("atari");



let tx= document.getElementById("tx");


let cred= document.getElementById("credit");

let crp=0;
let crp_2=0;

let incr= document.getElementById("incr");

let ct= document.getElementById("ct");

let pulse= document.getElementById("pulse");

const data=document.getElementById("data");


cr_btn=()=>{
 crp+=100;
 btn1.disabled=false;
 cred.innerHTML="残り"+crp+"P";

 crp_2+=100;
 
 incr.innerHTML= "クレジット購入数 : "+crp_2+"P";

}

let btn1= document.getElementById("btn1");



btn=()=>{

atari.innerHTML="";

s1.disabled=false;

s1.value="🔵";
s2.value="🔵";


btn1.disabled=true;


crp-=4;
pulse.innerHTML="収支 : "+(crp-crp_2)+"P";
 cred.innerHTML="残り:"+crp+"P";
 

 
let n;

n = Math.random();
console.log(n);

if(n<0.985){
//通常モード
 www();

}else{
//スーパードラゴンモード
 xxx();

}
//回転数、データ関係
 yyy();

};



//通常モード
www=()=>{

 cou_up1=setInterval(()=> {
let cou_up1 = document.getElementById("cou_up1");
let ind= a[Math.floor(Math.random() *a.length)];
d.unshift(ind);
d.splice(2);
cou_up1.innerHTML = ind;
 },100);

cou_up2 = setInterval(()=> {
let cou_up2=document.getElementById("cou_up2");
let ind2= a[Math.floor(Math.random() *a.length)];
f.unshift(ind2);
f.splice(2);

cou_up2.innerHTML = ind2;
 },100);

cou_up3 = setInterval(()=> {
let cou_up3=document.getElementById("cou_up3");
let ind3= a[Math.floor(Math.random() *a.length)];
g.unshift(ind3);
g.splice(2);

cou_up3.innerHTML = ind3;
 },100);


s2.disabled=true;
s3.disabled=true;



 stop1=()=> {
  if(cou_up1) {
  clearInterval(cou_up1);
  s2.disabled=false;
}


stop2=()=> {
  if(cou_up2) {
  clearInterval(cou_up2);
  s3.disabled=false;
  if(d[0]==v1&&f[0]==v1||d[0]==v2&&f[0]==v2||d[0]==v3&&f[0]==v3||d[0]==v4&&f[0]==v4||d[0]==v5&&f[0]==v5||d[0]==v6&&f[0]==v6||d[0]==v7&&f[0]==v7){
 
 atari.classList.add('change');
 atari.innerHTML="🕺リーチ💃";
}



stop3=()=> {
  if(cou_up3) {
  clearInterval(cou_up3);
  atari.classList.remove('change');
  atari.innerHTML="";
}


if(d[0]==v1&&f[0]==v1&&g[0]==v1){
   crp+=300;
   atari.classList.add('change2');
   atari.innerHTML="当たり！300P";
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v2&&f[0]==v2&&g[0]== v2){
   crp+=100;
   atari.classList.add('change2');
   atari.innerHTML="当たり！100P";
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v3&&f[0]==v3&&g[0]== v3){
   crp+=300;
   atari.classList.add('change2');
   atari.innerHTML="大当たり！300P"
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v4&&f[0]==v4&&g[0]== v4){
   crp+=100;
   atari.classList.add('change2');
   atari.innerHTML="当たり！100P";
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v5&&f[0]==v5&&g[0]== v5){
   crp+=300
   atari.classList.add('change2');
   atari.innerHTML="大当たり！300P";
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v6&&f[0]==v6&&g[0]== v6){
   crp+=100;
   atari.classList.add('change2');
   atari.innerHTML="当たり！100P";
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
  }else if(d[0]==v7&&f[0]==v7&&g[0]== v7){
   crp+=1000;
   atari.classList.add('change2');
   atari.innerHTML="超当たり🐲🐲🐲1000P"
   r.unshift(cou);
   cou=1;
   btn1.disabled=false;
}else if(d[0]==v10&&f[0]==v10&&g[0]== v10){
   xxx();
}else{
   atari.innerHTML="";
   btn1.disabled=false;
}





if(crp==0){
  cred.innerHTML="GAME OVER";
  btn1.disabled=true;
  crp=0;
}

//500回転でクレオフ
zzz();

}
}
}
}
};


//スーパードラゴンモード
xxx=()=>{
 atari.innerHTML="スーパードラゴンモード突入！！";

s1.disabled=false;

s1.value="押";
s2.value="押";

 cou_up1=setInterval(()=> {
let cou_up1 = document.getElementById("cou_up1");
let ind= e[Math.floor(Math.random() *e.length)];
d.unshift(ind);
d.splice(2);

cou_up1.innerHTML = ind;
 },100);

cou_up2 = setInterval(()=> {
let cou_up2=document.getElementById("cou_up2");
let ind2= e[Math.floor(Math.random() *e.length)];
f.unshift(ind2);
f.splice(2);

cou_up2.innerHTML = ind2;
 },100);

cou_up3 = setInterval(()=> {
let cou_up3=document.getElementById("cou_up3");
let ind3= c[Math.floor(Math.random() *c.length)];
g.unshift(ind3);
g.splice(2);

cou_up3.innerHTML = ind3;
 },100);


s2.disabled=true;
s3.disabled=true;



 stop1=()=> {
  if(cou_up1) {
  clearInterval(cou_up1);
  
  s2.disabled=false;
  
}


stop2=()=> {
  if(cou_up2) {
  clearInterval(cou_up2);
  s3.disabled=false;
  }


stop3=()=> {
  if(cou_up3) {
  clearInterval(cou_up3);
  s1.disabled=true;
  s2.disabled=true;
  s3.disabled=true;
  }


let sss = d[0]==v9&&f[0]==v9&&g[0]==v9;


switch(d[0]==v9&&f[0]==v9){

 case sss:
  vvv();
  btn1.disabled=false;
  break;

 case d[0]==v9&&f[0]==v9&&g[0]== v8:
   btn1.disabled=false;
   atari.innerHTML="スーパードラゴンモード終了"
   break;

}
}
}
}


if(crp==0){
  cred.innerHTML="GAME OVER";
  btn1.disabled=true;
  crp=0;

}
zzz();
}


//回数カウント系
 yyy=()=>{
let sumval = 0;
for (let i = 0; i < r.length; i++) {
  sumval += r[i];
};
data.innerHTML= "1回前の当り:"+(r[0])+"回転"+"\n"+"当り回数:"+(r.length-1)+"当り確率:1/"+Math.round(sumval/(r.length-1));
 };


//500回転でクレオフ
zzz=()=>{

 if(cou_t==500){
    ct.innerHTML= "トータル回転数 : "+(cou_t++)+"回";
    tx.innerHTML="現在の回転数 : "+(cou++)+"回";
    ct.innerHTML="終了";
    btn1.disabled=true;
    crcr.disabled=true;
    s1.disabled=true;
    s2.disabled=true;
    s3.disabled=true;
  }else{
    ct.innerHTML= "トータル回転数 : "+(cou_t++)+"回";
    tx.innerHTML="現在の回転数 : "+(cou++)+"回";
  
};
};


//スーパードラゴンモード内訳
vvv=()=>{
 
let nn=Math.random();

 if(nn<0.01){
   atari.innerHTML="超当たり！1000P";
   crp+=1000;
   atari.classList.add('change2');
   
   
  }else if(nn<0.03){
   atari.innerHTML="当たり！500P";
   crp+=500;
   atari.classList.add('change2');
   
   
  }else if(nn<0.05){
   atari.innerHTML="当たり！300P";
   crp+=300;
   atari.classList.add('change2');
   
   
  }else if(nn<0.07){
   atari.innerHTML="当たり！200P";
   crp+=200;
   atari.classList.add('change2');
   
   
  }else if(nn<0.09){
   atari.innerHTML="当たり！100P";
   crp+=100;
   atari.classList.add('change2');
   
   
  }else if(nn<0.5){
   atari.innerHTML="当たり！50P";
   crp+=50;
   atari.classList.add('change2');
   
   
  }else{
   atari.innerHTML="当たり！20P";
   crp+=20;
   atari.classList.add('change2');
   
   
  }
 }



//スーパードラゴンモード継続
kkk=()=>{
 atari.innerHTML="スーパードラゴンモード継続！！";

s1.value="押";
s2.value="押";

 cou_up1=setInterval(()=> {
let cou_up1 = document.getElementById("cou_up1");
let ind= e[Math.floor(Math.random() *e.length)];
d.unshift(ind);
d.splice(2);

cou_up1.innerHTML = ind;
 },100);

cou_up2 = setInterval(()=> {
let cou_up2=document.getElementById("cou_up2");
let ind2= e[Math.floor(Math.random() *e.length)];
f.unshift(ind2);
f.splice(2);

cou_up2.innerHTML = ind2;
 },100);

cou_up3 = setInterval(()=> {
let cou_up3=document.getElementById("cou_up3");
let ind3= c[Math.floor(Math.random() *c.length)];
g.unshift(ind3);
g.splice(2);

cou_up3.innerHTML = ind3;
 },100);


s2.disabled=true;
s3.disabled=true;



 stop1=()=> {
  if(cou_up1) {
  clearInterval(cou_up1);
  
  s2.disabled=false;
  
}


stop2=()=> {
  if(cou_up2) {
  clearInterval(cou_up2);
  s3.disabled=false;
  }


stop3=()=> {
  if(cou_up3) {
  clearInterval(cou_up3);
  s3.disabled=true;
  }


let sss = d[0]==v9&&f[0]==v9&&g[0]==v9;


switch(d[0]==v9&&f[0]==v9){

 case sss:
  vvv();
  btn1.disabled=false;
  if(g[0]==v9){
   
   kkk();
   vvv();
  }else{
   btn1.disabled=false;
   atari.innerHTML="スーパードラゴンモード終了"
   www();
   }
  break;

 case d[0]==v9&&f[0]==v9&&g[0]== v8:
   btn1.disabled=false;
   atari.innerHTML="スーパードラゴンモード終了"
   break;

}
}
}
}


if(crp==0){
  cred.innerHTML="GAME OVER";
  btn1.disabled=true;
  crp=0;

}
zzz();
}
