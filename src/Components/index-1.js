
import "./index-1.css"



export const Acceseries_cards=function(content)
{
    let {acc}= content;
   
    
  
    return(
        <div className="card-1">
            <img className="img_" src={acc.url}/>
            <a className="card-1-para" href="">{acc.name}</a>
        </div>

    );
}


export const Gadgets=function(content)
{
    let {gcc}= content;
    
    return(
        

            
            <div className={gcc.className}>
                
                <p className="g-eyebrow">{gcc.name}</p>
                <p className="g-header">{gcc.features}</p>
                <p className="g-content">{gcc.price}</p>
                

            </div>
        
    );
}



export const Smallcards=function(content)
{
    let {smcc}=content;
    return (
        <div className="card-2">
            <i className= {smcc.icon_name} style={{color:smcc.color}} id={smcc.id}></i>
            <p> {smcc.content}<span style={{color:smcc.color}}>{smcc.content_}</span></p>
        </div>



    );

}


export const Phonecards=function(content)
{

    let {pmcc}=content;
    return(
        <div className="card-3">
            <img className="img_2" src={pmcc.url}/>
            <h1>{pmcc.head}</h1>
            <p>{pmcc.para}</p>

        </div>

        
    );


}


    /*
    let curPos=0;
    let move=200;
    let max_scroll=mCart.offsetWidth-cCart.offsetWidth;
    let btn1=document.querySelector(c);
    let btn2=document.querySelector(d);
    btn1.style.opacity="0";
    btn2.style.opacity="0";
    function check(val)
    {
        curPos+=(val * move);
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
    }
    */








    

