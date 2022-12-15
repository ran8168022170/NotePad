function changeFont(font){
    document.getElementById('content').style.fontFamily=font.value;
}

function changeSize(n){
    document.getElementById('content').style.fontSize=n.value+'px';
}

function Bold(){
    var bol=document.getElementById('content').style.fontWeight;
    
    if(bol=='normal'){
        document.getElementById('content').style.fontWeight='bold';


    }else{
        document.getElementById('content').style.fontWeight='normal';
    }
}


function italic(){
    var bol=document.getElementById('content').style.fontStyle;
    console.log(bol);
    if(bol=='normal'){
        document.getElementById('content').style.fontStyle='Italic';


    }else{
        document.getElementById('content').style.fontStyle='normal';
    }
}

function underline(){
    var bol=document.getElementById('content').style.textDecoration;
    console.log(bol);
    
    if(bol!=='underline'){
        document.getElementById('content').style.textDecoration='underline';


    }else{
        document.getElementById('content').style.textDecoration='none';
    }
}

function reset(){
    document.getElementById("content").style.fontStyle="Normal";
    document.getElementById("content").style.textDecoration="none";
    document.getElementById("content").style.fontWeight="normal";
}

function remove(){
    document.getElementById("content").value="";   
}