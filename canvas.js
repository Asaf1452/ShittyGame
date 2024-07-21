class Player{
    constructor(x, y, w, h){
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
    }
    render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "blue";
        ctx.rect(this.xPos, this.yPos, this.width, this.height);
        ctx.fill();
        ctx.stroke();
    }
    mouseMove = (pos) => {
        this.xPos = pos - this.width/2;
        if(this.xPos < 0) this.xPos = 0; 
        if(this.xPos > canvas.width - this.width) this.xPos = canvas.width - this.width;
    }
    keyboardMove = (pos) => {
        this.xPos += pos;
        if(this.xPos < 0) this.xPos = 0; 
        if(this.xPos > canvas.width - this.width) this.xPos = canvas.width - this.width;
    }
}

class Cube{
    constructor(x, y, w, h){
        this.xPos = x;
        this.yPos = y;
        this.width = w;
        this.height = h;
    }
    render = () => {
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}

class Ball{
    constructor(x, y, r){
        this.xPos = x;
        this.xv = 0;
        this.yPos = y;
        this.yv = 8;
        this.radius = r;  
        this.miss = false;
        this.color = "red"; 
    }
    render = () => {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
    move = () => {
        this.yPos += this.yv;
        this.xPos += this.xv;
        if((this.yPos+this.radius+10 >= player.yPos && this.yPos+this.radius+10 <= player.yPos+10) && (this.xPos >= player.xPos-10 && this.xPos <= player.xPos + 220)){
            if(this.xPos >= player.xPos && this.xPos < player.xPos+(player.width*0.05)){
                this.yv = 10;
                this.xv = -9; 
            }
            else if(this.xPos >= player.xPos + (player.width*0.05) && this.xPos < player.xPos + (player.width*0.10)){
                this.yv = 10;
                this.xv = -8;
            }
            else if(this.xPos >= player.xPos + (player.width*0.10) && this.xPos < player.xPos + (player.width*0.15)){
                this.yv = 10;
                this.xv = -7;
            }
            else if(this.xPos >= player.xPos + (player.width*0.15) && this.xPos < player.xPos + (player.width*0.20)){
                this.yv = 10;
                this.xv = -6;
            }
            else if(this.xPos >= player.xPos + (player.width*0.20) && this.xPos < player.xPos + (player.width*0.25)){
                this.yv = 10;
                this.xv = -5;
            }
            else if(this.xPos >= player.xPos + (player.width*0.25) && this.xPos < player.xPos + (player.width*0.30)){
                this.yv = 10;
                this.xv = -4;
            }
            else if(this.xPos >= player.xPos + (player.width*0.30) && this.xPos < player.xPos + (player.width*0.35)){
                this.yv = 10;
                this.xv = -3;
            }
            else if(this.xPos >= player.xPos + (player.width*0.35) && this.xPos < player.xPos + (player.width*0.40)){
                this.yv = 10;
                this.xv = -2;
            }
            else if(this.xPos >= player.xPos + (player.width*0.40) && this.xPos < player.xPos + (player.width*0.45)){
                this.yv = 10;
                this.xv = -1;
            }
            else if(this.xPos >= player.xPos + (player.width*0.45) && this.xPos < player.xPos + (player.width*0.55)){
                this.yv = 10;
                this.xv = 0;
            }
            else if(this.xPos >= player.xPos + (player.width*0.55) && this.xPos < player.xPos + (player.width*0.60)){
                this.yv = 10;
                this.xv = 1;
            }
            else if(this.xPos >= player.xPos + (player.width*0.60) && this.xPos < player.xPos + (player.width*0.65)){
                this.yv = 10;
                this.xv = 2;
            }
            else if(this.xPos >= player.xPos + (player.width*0.65) && this.xPos < player.xPos + (player.width*0.70)){
                this.yv = 10;
                this.xv = 3;
            }
            else if(this.xPos >= player.xPos + (player.width*0.70) && this.xPos < player.xPos + (player.width*0.75)){
                this.yv = 10;
                this.xv = 4;
            }
            else if(this.xPos >= player.xPos + (player.width*0.75) && this.xPos < player.xPos + (player.width*0.80)){
                this.yv = 10;
                this.xv = 5;
            }
            else if(this.xPos >= player.xPos + (player.width*0.80) && this.xPos < player.xPos + (player.width*0.85)){
                this.yv = 10;
                this.xv = 6;
            }
            else if(this.xPos >= player.xPos + (player.width*0.85) && this.xPos < player.xPos + (player.width*0.90)){
                this.yv = 10;
                this.xv = 7;
            }
            else if(this.xPos >= player.xPos + (player.width*0.90) && this.xPos < player.xPos + (player.width*0.95)){
                this.yv = 10;
                this.xv = 8;
            }
            else if(this.xPos >= player.xPos + (player.width*0.95) && this.xPos < player.xPos + (player.width*1.00)){
                this.yv = 10;
                this.xv = 9;
            }
            this.yv = -this.yv;
            bounces.update();
        }
        if(this.yPos >= canvas.height) this.miss = true;

        if(this.yPos <= 0+this.radius){
            this.yv = -this.yv;
        } 
        if(this.xPos <= 0+this.radius){
            this.xv = -this.xv;
        }
        if(this.xPos >= window.innerWidth-this.radius){
            this.xv = -this.xv;
        }
    }
}
class Bounces {
    constructor(){
        this.bounces = 0;
    }
    render = () => {
        ctx.font = "100px Arial"
        ctx.fillText(this.format(), canvas.width - 300, 150);
    }
    update = () => this.bounces++; 
    format = () => {
        if(this.bounces <= 9)
            return "000" + this.bounces;
        else if(this.bounces <= 99)
            return "00" + this.bounces;
        else if(this.bounces <= 999)
            return "0" + this.bounces;
        else return this.bounces;
    }
}

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-4;
canvas.height = window.innerHeight-4;
const ctx = canvas.getContext("2d");
const player = new Player(canvas.width/2-75, canvas.height-50, 300, 25);
let balls = [];
const bounces = new Bounces();
const settings = document.createElement("div");


const init = () => {
    openSettings()
    animate();
}

const openSettings = () => {
    const settings = document.createElement("div");
    console.log(settings.style.display);
    settings.style.height = window.innerHeight+"px";
    settings.innerHTML = `
        <p>Choose Size:</p>
        <input type=number value=220></input>
        <button>Start</button>
    `;
    settings.children[2].addEventListener("click", () => {
        settings.remove();
        player.width = settings.children[1].value;
        
    })
    document.body.append(settings);

}

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    player.render();
    balls = balls.filter((element)=>{
        if(element.miss){
            return false;
        }
        return true;
    })
    for(let i = 0; i < balls.length; i++){
        balls[i].render();
        balls[i].move();
    }
    bounces.render()
}

canvas.addEventListener("mousemove", (e) => {
    if(balls.length != 0){
        player.mouseMove(e.x);
        player.render();
    }
})

window.addEventListener("keydown", (e) => {
    if(e.key === "ArrowRight"){
        player.keyboardMove(20);
        player.render();
    }
    else if(e.key === "ArrowLeft"){
        player.keyboardMove(-20);
        player.render();
    }
    else if(e.key === "Escape"){
        openSettings();
    }
})

canvas.addEventListener("mousedown", (e) => {
    const ball = new Ball(e.x, e.y, 25);
    balls.push(ball);
})

init();