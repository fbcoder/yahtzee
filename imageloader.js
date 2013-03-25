var toLoad;
var loaded;
var imgArray;

function loadedOne(loadedImg,imageIndex,cb){
    imgArray[imageIndex] = loadedImg;
    loaded += 1;
    if(loaded >= toLoad){
        cb(imgArray);
    }
}

function loadImages(fileNames,callback){
    toLoad = fileNames.length;
    loaded = 0;    
    imgArray = new Array(toLoad);
    
    for(f in fileNames){
        img = new Image;
        img.src = fileNames[f];
        img.onload = function(){
            loadedOne(this,f,callback);
        }
    }
}