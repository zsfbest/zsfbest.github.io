function allowDrop(ev)
{
    ev.preventDefault();
}
 
function drag(ev)
{
    ev.dataTransfer.setData("Text",ev.target.id);
    nextEle = $(ev.target).next();
    prevEle = $(ev.target).prev();
}
 
function drop(ev)
{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    // ev.target.appendChild(document.getElementById(data));
    var rep = ev.target;
    // var sf = $(ev.target).next();
    // sf.before(document.getElementById(data));
    // $(ev.target).next().before(document.getElementById(data));
    // $(ev.target).prev().after(document.getElementById(data));
    // $('#nextEle').before(ev.target);


    if($(ev.target).index() > $(document.getElementById(data)).index()){
        $(ev.target).next().before(document.getElementById(data));
        $(prevEle).after($(ev.target));
    }else if($(ev.target).index() == 0){
        $(ulele).prepend(document.getElementById(data));
        if(nextEle.length == 0){
            $(prevEle).after($(ev.target));
        }else{
            $(nextEle).before($(ev.target));
        }
    }else{
        $(ev.target).prev().after(document.getElementById(data));
        $(nextEle).before($(ev.target));
    };
    
}
var nextEle,prevEle;
var ulele = document.getElementsByTagName('ul')[0];