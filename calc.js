var scr=document.getElementById("screen");
var no=document.querySelectorAll(".num");
console.log(no)
var temp;
var a;
function send(num){
    temp=Math.floor(scr.value);
    if(temp==0){
        scr.value=num;
    }
    else
        scr.value+=num;
    if('AC'===num){
        scr.value=0
    }
}
function abst(){
    temp=Math.floor(scr.value);
      if(temp<0){
        a= Math.abs(temp);
        scr.value=a;
      }
      else{
        scr.value= -Math.abs(temp); 
      } 
}

function eql(){
   scr.value= red(scr.value);   
}

function percent(){
    scr.value/=100
}


function red(k) {
 
    var  kl="";
    var ar=[]
      for(let i=0; i<k.length;i++){
          if(k[i]=='+'||k[i]=='-'|| k[i]=='/'||k[i]=='*') 
            kl+='?'
          else 
            kl+=k[i];
      }
      console.log(kl);

    kl=kl.split('?')
    console.log(kl);
    
    var j=0;
    var total=0;
    total=Number(kl[j])
    for(let i=0; i<k.length;i++){
      if(k[i]=='+'){
        total=total+Number(kl[j+1])
        kl.shift();
      }
      // 
      if(k[i]=='-'){
        total= total-Number(kl[j+1])
        kl.shift();
      }
      // 
      if(k[i]=='/'){
        total=total/Number(kl[j+1])
        kl.shift();
      }
      //
      if(k[i]=='*'){
        total=total*Number(kl[j+1])
        kl.shift();
        console.log(kl)
      }

    }
       return total
  }

