class Game 
{
  constructor()
  {

  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
    {
     gameState = data.val();
    })
  }

  update(state)
  {
    database.ref('/').update(
    {
     gameState: state
    });
  }

    async start()
    {
      if(gameState === 0)
      {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists())
        {
         playerCount = playerCountRef.val();
         player.getCount();
        }
        form = new Form()
        form.display();
      }
      wcg= new Group();
      bcg= new Group();

      striker= createSprite(350, 600, 20, 20);
      queen= createSprite(344, 345, 20, 20);

      wc1= createSprite(345, 315, 20, 20);
      wc2= createSprite(312, 370, 20, 20);
      wc3= createSprite(372, 365, 20, 20);
      wc4= createSprite(345, 280, 20, 20);
      wc5= createSprite(280, 385, 20, 20);
      wc6= createSprite(400, 387, 20, 20);
      wc7= createSprite(340, 420, 20, 20);
      wc8= createSprite(400, 320, 20, 20);
      wc9= createSprite(280, 320, 20, 20);

      bc1= createSprite(325, 335, 20, 20);
      bc2= createSprite(355, 385, 20, 20);
      bc3= createSprite(385, 335, 20, 20);
      bc4= createSprite(392, 301, 20, 20);
      bc5= createSprite(415, 355, 20, 20);
      bc6= createSprite(380, 405, 20, 20);
      bc7= createSprite(320, 405, 20, 20);
      bc8= createSprite(320, 300, 20, 20);
      bc9= createSprite(290, 350, 20, 20);

      wcg.add(wc1);
      wcg.add(wc2);
      wcg.add(wc3);
      wcg.add(wc4);
      wcg.add(wc5);
      wcg.add(wc6);
      wcg.add(wc7);
      wcg.add(wc8);
      wcg.add(wc9);

      bcg.add(bc1);
      bcg.add(bc2);
      bcg.add(bc3);
      bcg.add(bc4);
      bcg.add(bc5);
      bcg.add(bc6);
      bcg.add(bc7);
      bcg.add(bc8);
      bcg.add(bc9);

      //rb= createSprite(598, 600, 20, 50)

      striker.velocityY= -2;

      queen.addImage(qc);

      wc1.addImage(wc);
      wc2.addImage(wc);
      wc3.addImage(wc);
      wc4.addImage(wc);
      wc5.addImage(wc);
      wc6.addImage(wc);
      wc7.addImage(wc);
      wc8.addImage(wc);
      wc9.addImage(wc);

      bc1.addImage(bc);
      bc2.addImage(bc);
      bc3.addImage(bc);
      bc4.addImage(bc);
      bc5.addImage(bc);
      bc6.addImage(bc);
      bc7.addImage(bc);
      bc8.addImage(bc);
      bc9.addImage(bc);

      queen.scale= 0.25;

      wc1.scale= 0.15;
      wc2.scale= 0.15;
      wc3.scale= 0.15;
      wc4.scale= 0.15;
      wc5.scale= 0.15;
      wc6.scale= 0.15;
      wc7.scale= 0.15;
      wc8.scale= 0.15;
      wc9.scale= 0.15;

      bc1.scale= 0.35;
      bc2.scale= 0.35;
      bc3.scale= 0.35;
      bc4.scale= 0.35;
      bc5.scale= 0.35;
      bc6.scale= 0.35;
      bc7.scale= 0.35;
      bc8.scale= 0.35;
      bc9.scale= 0.35;

      drawSprites();
    }

    play()
    {
        form.hide();
        background("lightblue");
        image(bg, 0, 0, 700, 700);
        edges= createEdgeSprites();

        striker.collide(edges);
        queen.collide(edges);

        bc1.collide(edges);
        bc2.collide(edges);
        bc3.collide(edges);
        bc4.collide(edges);
        bc5.collide(edges);
        bc6.collide(edges);
        bc7.collide(edges);
        bc8.collide(edges);
        bc9.collide(edges);

        wc1.collide(edges);
        wc2.collide(edges);
        wc3.collide(edges);
        wc4.collide(edges);
        wc5.collide(edges);
        wc6.collide(edges);
        wc7.collide(edges);
        wc8.collide(edges);
        wc9.collide(edges);

        if(keyDown(RIGHT_ARROW) && striker.x>100 && striker.x< 600)
        {
          striker.velocityX= 2;
        }

        if(keyDown(LEFT_ARROW) && striker.x>100 && striker.x< 600)
        {
          striker.velocityX= -2;
        }

        if(striker.isTouching(wcg))
        {
          wc1.velocityY= -2;
          wc2.velocityY= -2;
          wc3.velocityY= -2;
          wc4.velocityY= -2;
          wc5.velocityY= -2;
          wc6.velocityY= -2;
          wc7.velocityY= -2;
          wc8.velocityY= -2;
          wc9.velocityY= -2;
        }

        if(striker.isTouching(bcg))
        {
          bc1.velocityY= -2;
          bc2.velocityY= -2;
          bc3.velocityY= -2;
          bc4.velocityY= -2;
          bc5.velocityY= -2;
          bc6.velocityY= -2;
          bc7.velocityY= -2;
          bc8.velocityY= -2;
          bc9.velocityY= -2;
        }

        if(striker.isTouching(queen))
        {
          queen.velocityY= -2;
        }

        textSize(20);
        fill("black");
        text("Score: "+ score, 500, 690);
        drawSprites();
    }

}