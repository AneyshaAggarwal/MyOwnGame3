class Form 
{
  constructor() 
  {
    this.title = createElement('h2');
    this.input = createInput("Enter name here");
    this.start = createButton('Start');
    this.reset = createButton('Reset');
    this.greeting = createElement('h4');
  }

  hide()
  {
    this.greeting.hide();
    this.start.hide();
    this.input.hide();
    this.title.hide();
  }

  display()
  {
    this.title.html("Digital Carrom");

    this.title.position(250, 0);
    this.input.position(70, 160);
    this.start.position(250, 160);
    this.reset.position(330, 670);

    this.start.mousePressed(()=>
    {
      this.input.hide();
      this.start.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + "! Please wait for the second player.")
      this.greeting.position(100, 100);
    });

    this.reset.mousePressed(()=>
    {
     player.updateCount(0);
     game.update(0);
    })

  }
}
