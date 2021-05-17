var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var striker;
var queen;
var wc1, wc2, wc3, wc4, wc5, wc6, wc7, wc8, wc9;
var bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8, bc9;
var lb, rb;
var edges;
var score= 0;
var wcg, bcg;

function preload()
{
  bg= loadImage("BgImage.png")
  wc= loadImage("wc.png")
  bc= loadImage("bc.png")
  qc= loadImage("qc.png")
}

function setup() 
{
  createCanvas(700,700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() 
{
  background("lightblue"); 

  if(playerCount === 1)
  {
    game.update(1);
  }

  if(gameState === 1)
  {
    clear();
    game.play();
  }
  
  if(gameState === 2)
  {
    game.end();
  }
}