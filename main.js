window.onload = proc;
const blendertab = document.getElementById("blendertab");
const blendertop = document.getElementById("blendertop");
const blenderbottom = document.getElementById("blenderbottom");
const blenderfiles = document.querySelectorAll("#blendertab img[onclick], #blendertab video[onclick]");
const blenderselect = document.getElementById("blenderselect");
const blenderselectimgback = document.getElementById("blenderselectimgback");
const blenderselectimg = document.getElementById("blenderselectimg");
const blenderselectvid = document.getElementById("blenderselectvid");
const blenderselecttext1 = document.getElementById("blenderselecttext1");
const blenderselecttext2 = document.getElementById("blenderselecttext2");
let imgurl = '';
let vidurl = '';

function proc(){
    resizeblender();
    if (window.innerHeight > window.innerWidth){
        blendertab.scrollTop = blendertab.scrollHeight;
    }
    else{
        blendertab.scrollLeft = (blenderbottom.getBoundingClientRect().left - blendertab.scrollWidth);
    }
}

blendertab.addEventListener("scroll", function(){
    let x = (Math.floor(blendertab.getBoundingClientRect().top / 10 ) * 10);
    let y = (Math.floor(blendertop.getBoundingClientRect().top / 10 ) * 10);
    if ((1 / x) + (x / (x * (20 / y))) <= y){
        document.getElementById("blendertab-text").className = "blendertab-text-top"
        document.getElementById("blendertab-shadow").className = "blendertab-shadow-top";
    }
    else {
        document.getElementById("blendertab-text").className = "blendertab-text"
        document.getElementById("blendertab-shadow").className = "blendertab-shadow";
    }
});


window.addEventListener("resize", function(){
    resizeblender();
});

window.addEventListener("orientationchange", function() {
        if (window.innerHeight < window.innerWidth){
            sleep(1, function(){
                blendertab.scrollTop = blendertab.scrollHeight;
            });
        }
        else if (window.innerHeight > window.innerWidth){
            sleep(1, function(){
                blendertab.scrollLeft = (blenderbottom.getBoundingClientRect().left - blendertab.scrollWidth);
            });
    }
});

function resizeblender(){
    let changeheight = "";
    let changewidth = "";
    let changeaspect = "";
    if (window.innerHeight > window.innerWidth){
        if (window.innerHeight / 5 * 3 < window.innerWidth){
            changewidth = "calc(100% / 4.05)";
            changeaspect = "4/1";
        }
        else if (window.innerHeight / 7 * 3 < window.innerWidth){
            changewidth = "calc(100% / 3.03)";
            changeaspect = "3/1";
        }
        else{
            changewidth = "calc(100% / 2.0075)";
            changeaspect = "2/1";
        }
        for (let i = 0; i < blenderfiles.length; i++){
            blenderfiles.item(i).style = `width:${changewidth}`;
        }
    }
    else {
            changeheight = "calc(100% / 5.05)";
        for (let i = 0; i < blenderfiles.length; i++){
            blenderfiles.item(i).style = `height:${changeheight}`;
            blenderfiles.item(i).style = "aspect-Ratio:1";
        }
            changeaspect = "1";
    }
    blendertop.style.aspectRatio = changeaspect;
}


function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var waitFunc = function () {
        spanedSec++;
        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }
        clearTimeout(id);
        id = setTimeout(waitFunc, 2);
    };
    var id = setTimeout(waitFunc, 2);
  }

function menuclick(mode){
    switch(mode){
        case 0:
            document.getElementById("sns").className = "menusub-clicked";
            document.getElementById("github").className = "menusub";
            document.getElementById("blender").className = "menusub";
            document.getElementById("snstab").className = "sns";
            document.getElementById("githubtab").className = "githubtabhide-right";
            document.getElementById("blendertab-container").className = "blendertab-container-hide-2";
        break;
        case 1:
            document.getElementById("sns").className = "menusub";
            document.getElementById("github").className = "menusub-clicked";
            document.getElementById("blender").className = "menusub";
            document.getElementById("snstab").className = "snshide-1";
            document.getElementById("githubtab").className = "githubtab";
            document.getElementById("blendertab-container").className = "blendertab-container-hide-1";
        break;
        case 2:
            document.getElementById("sns").className = "menusub";
            document.getElementById("github").className = "menusub";
            document.getElementById("blender").className = "menusub-clicked";
            document.getElementById("snstab").className = "snshide-2";
            document.getElementById("githubtab").className = "githubtabhide-left";
            document.getElementById("blendertab-container").className = "blendertab-container";
        break;
    }
}

function imgclick(img, mode, title, date){
    if (img == 'return'){
        blenderselect.style.height = "0";
        blenderselect.style.width = "0";
        imgurl = './assets/Blender/Pictures/Thumbnail/blankimg.png';
        blenderselectimg.src = imgurl;
        blenderselectimgback.className = "blenderselectimgback-hide";
        blenderselect.className = "blenderselect-hide";
    }
    else {
        imgurl = `./assets/Blender/Pictures/Original/${img}`;
        blenderselectimg.src = imgurl;
        blenderselectimg.style.display = "block";
        blenderselectvid.style.display = "none";
        blenderselect.className = "blenderselect";
        blenderselectimgback.className = "blenderselectimgback";
        switch (mode){
            case 0:
                blenderselect.style.aspectRatio = "1/1.2";
                blenderselect.style.maxWidth = "40vh";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
            case 1:
                blenderselect.style.aspectRatio = "1/0.735";
                blenderselect.style.maxWidth = "55vh";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
            case 2:
                blenderselect.style.aspectRatio = "1/1.56";
                blenderselect.style.height = "80%";
                blenderselect.style.width = "auto";
                
                break;
            case 3:
                blenderselect.style.aspectRatio = "1/0.95";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
        }
    }
    blenderselecttext1.textContent = title;
    blenderselecttext2.textContent = date;
}

function vidclick(vid, mode, title, date){
    if (vid == 'return'){
        blenderselect.style.height = "0";
        blenderselect.style.width = "0";
        vidurl = './assets/Blender/Pictures/Thumbnail/blankimg.png';
        blenderselectimgback.className = "blenderselectimgback-hide";
        blenderselect.className = "blenderselect-hide";
    }
    else {
        blenderselectimg.style.display = "none";
        blenderselectvid.style.display = "block";
        vidurl = `./assets/Blender/Videos/Original/${vid}`
        blenderselect.className = "blenderselect";
        blenderselectimgback.className = "blenderselectimgback";
        switch (mode){
            case 0:
                blenderselect.style.aspectRatio = "1/1.2";
                blenderselect.style.maxWidth = "40vh";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
            case 1:
                blenderselect.style.aspectRatio = "1/0.735";
                blenderselect.style.maxWidth = "55vh";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
            case 2:
                blenderselect.style.aspectRatio = "1/2.03";
                blenderselect.style.height = "80%";
                blenderselect.style.width = "auto";
                
                break;
            case 3:
                blenderselect.style.aspectRatio = "1/0.95";
                blenderselect.style.height = "auto";
                blenderselect.style.width = "90%";
                break;
        }
    
    blenderselectvid.src = vidurl;
    blenderselecttext1.textContent = title;
    blenderselecttext2.textContent = date;
    }
}