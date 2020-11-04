let mochiimage=document.querySelector('img');

mochiimage.onclick=function(){
    var myImages=mochiimage.getAttribute('src');
    if(myImages==='images/mochi.png'){
        mochiimage.setAttribute('src','images/hp.png');
    }else{
        mochiimage.setAttribute('src','images/mochi.png');
    }
}
