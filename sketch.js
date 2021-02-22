
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1100, 90,20);
	mango3 = new mango(1200, 110, 20);
	mango4 = new mango(1000, 100,20);
	stone = new stone(235, 420, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  background(230);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  groundObject.display();
}
