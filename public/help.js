function help(a,b,c,d)
{
    let mCart=document.querySelector(a);
let cCart=document.querySelector(b);
let curPos=0;
let move=400;
let max_scroll=mCart.offsetWidth-cCart.offsetWidth;
let btn1=document.getElementById(c);
let btn2=document.getElementById(d);
console.log(btn2);
btn1.style.opacity="0";
btn2.onclick=function(){

   
    curPos+=(-1 * move);
    if(curPos>=0)
    {
        curPos=0;
        btn1.style.opacity="0";
    }
    else{
        btn1.style.opacity="1";
    }
     if(curPos<=max_scroll)
    {
        curPos=max_scroll;
        btn2.style.opacity="0";
    }
    else{
        btn2.style.opacity="1";
    }
    cCart.style.left=curPos+"px";
   
};
btn1.onclick=function(){
    
    
    curPos+=(1 * move);
    if(curPos>=0)
    {
        curPos=0;
        btn1.style.opacity="0";
    }
    else{
        btn1.style.opacity="1";
    }
     if(curPos<=max_scroll)
    {
        curPos=max_scroll;
        btn2.style.opacity="0";
    }
    else{
        btn2.style.opacity="1";
    }
    cCart.style.left=curPos+"px";
    

};
}
help(".cardCont",".card_2","b-1","b-2");
help(".cardCont-1",".card_1","b-3","b-4");
help(".cardCont-2",".card_11","b-5","b-6");
help(".cardCont-4",".card_111","b-9","b-10");
help(".cardCont-3",".card_4","b-7","b-8");



