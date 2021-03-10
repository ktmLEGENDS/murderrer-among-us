class Game {
    constructor(){
  
    }
  
    getState(){
      var gamestateRef  = database.ref('gamestate');
      gamestateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
    start(){
     if (gameState === 0 ){
         player=new Player()
         player.getCount();
         form=new Form()
         form.display();
         image(startingimg,150, 10,displayWidth-100,displayHeight-100); 
         
         player1=createSprite(displayWidth/2+200,displayHeight/2-450,20,20);
         player2=createSprite(displayWidth/2,displayHeight/2 -450,20,20);
         player3=createSprite(displayWidth/2,displayHeight/2 -500,20,20);
         player4=createSprite(displayWidth/2+300,displayHeight/2-500,20,20);
         player5=createSprite(displayWidth/2+150,displayHeight/2-650,20,20);
         players=[player1,player2,player3,player4,player5]
     }
       
    }
    play() {
       // destroy the background 
       gametime++;
      form.hide();
       Player.getPlayerInfo();
       activecount =0;
        if(AllPlayers !== undefined){ 
        
          background(0);
          drawSprites();
          var arrayindex = 0;
          for(var P in AllPlayers){
           
             //check active or not. display only if active.
          if(AllPlayers[P].Active == "Y"){
            activecount++;
            
              if(player.index !== (arrayindex+1))
              { 
                players[arrayindex].x = AllPlayers[P].Xpos; 
                players[arrayindex].y = AllPlayers[P].Ypos; 
              }
              else if(player.index == (arrayindex+1))
                  { 
                  
                    fill("orange"); 
                    ellipse(players[arrayindex].x ,players[arrayindex].y,40, 40); 
                    camera.position.x = players[player.index - 1].x;
                    camera.position.y = players[player.index - 1].y; 
                    player.Ypos = players[player.index - 1].y;
                    player.Xpos = players[player.index - 1].x;
                    player.update();         
                  }
                               
             } 
            else{
              if(player.index == (arrayindex+1)){
                player.active = AllPlayers[P].Active;
              }
              console.log(player.active);
                players[arrayindex].visible = false;
                              
              }
                 arrayindex++;
                 } }
        if(keyDown("w") && player.index!==null) 
        {
         
         if(players[player.index - 1].y <=  -400 ){
          players[player.index - 1].y = -400; 
          
         } else{
          players[player.index - 1].y -= 3; 
         
         }
         
        }

        if(keyDown("a") && player.index!==null) 
        {
          if(players[player.index - 1].x <=  -300 ){
            players[player.index - 1].x = -300 ; 
            
           } else{
            players[player.index - 1].x -= 3; 
           
           }
             
        }
        if(keyDown("s") && player.index!==null) 
        
        {

        if(players[player.index - 1].y >=  displayHeight+250 ){
          players[player.index - 1].y = displayHeight+250 ; 
          
         } else{
          players[player.index - 1].y += 3; 
         
         }
                
        }
        if(keyDown("d") && player.index!==null) 
        {
          if(players[player.index - 1].x >=  displayWidth+400 ){
            players[player.index - 1].x = displayWidth+400  ; 
            
           } else{
            players[player.index - 1].x += 3; 
           
           }
    
        }
                
        if(player.index!==3 ){
          if(players[2].isTouching(players[player.index - 1])){
          
             player.active = "N";
             player.update();   
          }
         } else{
           for(var i=0;i<5;i++){
            if(i !== 2){ 
            if(players[2].isTouching(players[i])){
              var playerIndex = "players/player" + (i+1);
              database.ref(playerIndex).update({
                Active: "N"
              });
            }
           }}
         }
      if(player.active === "N"){
        textSize(30);
        fill("red")
        stroke("green")
        strokeWeight(5)
        text("You are DEAD, please  wait for GAMERS!!!",player.Xpos-100,player.Ypos+100)
              
      }

      if(gametime>=3600 || activecount === 1){
        gameState = 4;
       
        game.update(gameState);
      }
        }
      
  end(){
    form.hide()
    bg.destroy();
    camera.position.x = displayWidth/2;
    camera.position.y = displayHeight/2; 
    activecount = 0;
    Player.getPlayerInfo();
    for(var P in AllPlayers){
          
        if(AllPlayers[P].Active == "Y"){
        activecount++;
        }
    }
    if(activecount === 1 || activecount === 2){
      image(impvicImg,100,0,displayWidth-100,displayHeight-80);
    }  
    else{

      image(crewvicImg,100,0,displayWidth-100,displayHeight-80);
      
    }
     

  }
       }