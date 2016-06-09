$(document).ready(function(){

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    $('body').append(canvas);

    var trump = document.getElementById('trump');


    var ground = {
        posX:0,
        posY: canvas.height - 100,
        draw: function(){
        ctx.fillRect(this.posX,this.posY,canvas.width,100);
        
        },
        
    };
    
    var player = {
        posX:ground.posX,
        posY:(ground.posY - 85),
        draw: function(){
            ctx.drawImage(trump,this.posX,this.posY,100,100);   
        },
    };
    
    function jump(){
        enabled = true;
        var jump = setInterval(function(){
        if (player.posY > ground.posY - 185 && enabled == true){
            player.posY--;
        }
        else{
            enabled = false;
            if(player.posY == ground.posY - 85){
                clearInterval(jump);
            }
            player.posY ++;
        }
        
        });
    }
    


    
    render();
    function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.draw();
    ground.draw();
    jump();
    requestAnimationFrame(render);
    };

});