function subCanvas(w,h){
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = w;
    this.canvas.height = h;
}

function tileFromImage(img){
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = img.width;
    this.canvas.height = img.height;
    this.context.drawImage(img,0,0);
}