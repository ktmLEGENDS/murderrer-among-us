function wirefunction(){
   
    imageMode(CENTER);
    image(circuitImg,displayWidth/2,displayHeight/2);
    textSize(20)
    fill("orange")
    text("Press 'T' to connect",displayWidth/2-100,displayHeight/2-200);
   
    if(keyWentDown("t") && connect<=4){
        connect++;
    }
        strokeWeight(15);
        switch(connect){
            case 1:
                stroke("blue");
                line(450,330,890,330);
                break;
            case 2:
                stroke("blue");
                line(450,330,890,330);
                stroke("red");
                line(450,580,890,200);
                break;
            case 3:
                    stroke("blue");
                    line(450,330,890,330);
                    stroke("red");
                    line(450,580,890,200);
                    stroke("yellow");
                    line(450,200,890,450); 
                    break;
            case 4:
                        stroke("blue");
                        line(450,330,890,330);
                        stroke("red");
                        line(450,580,890,200);
                        stroke("yellow");
                        line(450,200,890,450); 
                        stroke("pink");
                        line(450,450,890,580);  
                        break;               
        }
       
    if(connect>4){
        gameState = 1;
        connect = 0;
    }

    
}

function fuelfunction(){
    if(fillcounter<300){
        imageMode(CENTER)
        switch(fillpic){
            
            case 0:
                image(fuel1Img,player.Xpos,player.Ypos,500,600);
                break;
            case 1:
                    image(fuel2Img,player.Xpos,player.Ypos,500,600);
                    break;   
            case 2:
                    image(fuel3Img,player.Xpos,player.Ypos,500,600);
                    break;
        }
    }
    fillcounter++;
    if (fillcounter === 100 || fillcounter === 200 || fillcounter === 300  ){
       
        fillpic++;
    }
    if(fillpic>2){
        
        gameState =1;
        fillpic = 0;
        fillcounter = 0;
    }
   
}