// asteroid image data
let asteroid_img_src = "Asteroid.png" 
let asteroid_explode_img_src = "Asteroid Destroyed.png"
let asteroid_damage_img_src = "Asteroid Damage.png" 
let Ship_img_src = "Space ship.png"
var ScoreNum = 0;
var LiveNum = 3;
const ScrollingBackround = document.getElementById("StarsBackround")
const Scorecount = document.getElementById("Score")
const Lifecount = document.getElementById("Lives")
ShipSpeedX = 0;


//KEY PRESS DATA
var IS_LEFT_PRESSED = false;
var IS_RIGHT_PRESSED = false;

let magic_key = "KeyS"
let last_keydown = 0
let master_rotation = 0
let Backround_rotation = 0
let current_X = 600
function ApplyObjectTurnSlow()
{
  if(master_rotation < 0)
  {
   asteroid.Posx += 0.2
   asteroid2.Posx += 0.2
   asteroid3.Posx += 0.2
  }
  if(master_rotation > 0)
  {
   asteroid.Posx += -0.2
   asteroid2.Posx += -0.2
   asteroid3.Posx += -0.2
  }
}
function ApplyObjectTurnMid()
{
  if(master_rotation < 0)
  {
   asteroid.Posx += 0.5
   asteroid2.Posx += 0.5
   asteroid3.Posx += 0.5
  }
  if(master_rotation > 0)
  {
   asteroid.Posx += -0.5
   asteroid2.Posx += -0.5
   asteroid3.Posx += -0.5
  }
}
function ApplyObjectTurnFast()
{
  if(master_rotation < 0)
  {
   asteroid.Posx += 1
   asteroid2.Posx += 1
   asteroid3.Posx += 1
  }
  if(master_rotation > 0)
  {
   asteroid.Posx += -1
   asteroid2.Posx += -1
   asteroid3.Posx += -1
  }
}
function turnBackround()
{
  if(master_rotation >= 0.1 && master_rotation <= 5 )
  {
    
    Backround_rotation += 0.01
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + 0.01 + 'deg)'
    ApplyObjectTurnSlow()
  }
  if(master_rotation < -0.1 && master_rotation >= -5 )
  {
   
    Backround_rotation += -0.01
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + -0.01 + 'deg)'
    ApplyObjectTurnSlow()
  }
  if(master_rotation > 10 && master_rotation <= 15)
  {
    Backround_rotation += 0.05
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + 0.05 + 'deg)'
    ApplyObjectTurnMid()
  }
  if(master_rotation < -10 && master_rotation >= -15)
  {
    Backround_rotation += -0.05
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + -0.05 + 'deg)'
    ApplyObjectTurnMid()
  }
  if(master_rotation < -15)
  {
    Backround_rotation += 0.1
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + 0.1 + 'deg)'
    ApplyObjectTurnFast()
  }
  if(master_rotation > 15)
  {
    Backround_rotation += -0.1
    ScrollingBackround.style.transformOrigin = 'center'
    ScrollingBackround.style.transform += 'rotate(' + -0.1 + 'deg)'
    ApplyObjectTurnFast()
  }
  if(master_rotation == 0)
  {
    if(Backround_rotation > 0)
    {
      Backround_rotation += -0.05
      ScrollingBackround.style.transformOrigin = 'center'
      ScrollingBackround.style.transform += 'rotate(' + -0.05 + 'deg)'
    }
    if(Backround_rotation < 0)
    {
      Backround_rotation += 0.05
      ScrollingBackround.style.transformOrigin = 'center'
      ScrollingBackround.style.transform += 'rotate(' + 0.05 + 'deg)'
    }
    
        
  }
  
}
//KeyPresses---------------------------------------------------------------------------------
function rotateLeft() 
{
  master_rotation = master_rotation - 1
  
  starShip.element.style.transformOrigin = 'center'
  starShip.element.style.transform = 'rotate(' + master_rotation + 'deg)'
}
function rotateRight() 
{
  master_rotation = master_rotation + 1
  
  starShip.element.style.transformOrigin = 'center'
  starShip.element.style.transform = 'rotate(' + master_rotation + 'deg)'
}
function moveLeft() 
{
  
  current_X = current_X + ShipSpeedX
  starShip.element.style.position = 'relative'
  starShip.element.style.left = current_X + 'px'
  
}
function moveRight() 
{
 
  current_X = current_X + ShipSpeedX
  starShip.element.style.position = 'relative'
  starShip.element.style.left = current_X + 'px'
}
function checkInput()
{
  if(IS_LEFT_PRESSED)
  {
    rotateLeft();
  }
  if(IS_RIGHT_PRESSED)
  {
    rotateRight();
  }
}
function checkRotationMovement()
{
  
  if(master_rotation === 5)
  {
    ShipSpeedX = 0.5
  }
  if(master_rotation === 10)
  {
    ShipSpeedX = 1
  }
  if(master_rotation === 15)
  {
    ShipSpeedX = 1.5
  }
  if(master_rotation === -5)
  {
    ShipSpeedX = -0.5
  }
  if(master_rotation === -10)
  {
    ShipSpeedX = -1
  }
  if(master_rotation === -15)
  {
    ShipSpeedX = -1.5
  }
  if (master_rotation < 0 && current_X > 0)
  {
      moveLeft()
  }
  if (master_rotation > 0 && current_X < 500)
  {
      moveRight()
  }

}
let keyup_element = document.getElementById('react-keyup')
function keyupHandler(event) 
{
  if (event.code === 'ArrowLeft') IS_LEFT_PRESSED = false
  else if (event.code === 'ArrowRight') IS_RIGHT_PRESSED = false
  let now = +(new Date())
  let duration = now - last_keydown
  let update_text = event.code + ' (' + event.keyCode + ')' + ' pressed for ' + duration + 'ms'
  keyup_element.textContent = update_text
  if (event.code === magic_key) 
  alert('you found the magic key S!!')
}
document.addEventListener('keyup', keyupHandler)

let keydown_element = document.getElementById('react-keydown')
function keydownHandler(event) 
{
  last_keydown = +(new Date())
  
  if (event.code === 'ArrowLeft') IS_LEFT_PRESSED = true
  else if (event.code === 'ArrowRight') IS_RIGHT_PRESSED = true
  //else if (event.code === 'ArrowUp') moveLeft()
  //else if (event.code === 'ArrowDown') moveRight()
  
  keydown_element.textContent = event.code + ' (' + event.keyCode + ')'
}
//if(master_rotation != 0)
//{
//  checkRotationMovement()
//}
document.addEventListener('keydown', keydownHandler)

let keypress_element = document.getElementById('react-keypress')
function keypressHandler(event) 
{
  keypress_element.textContent = event.code + ' (' + event.keyCode + ')'
  //if (event.code === 'Key')
}
////-------------------keypresses--------------------------------------------------------
document.addEventListener('keypress', keypressHandler)
class StarShip
{
  constructor() 
  {
    let Posx = 250
    let Posy = 700
    
    // create the HTML element
    this.element = document.createElement('img')
    // set its image
    this.element.src = Ship_img_src
    // set width
    this.element.style.width = '50px'
    // set height
    this.element.style.height = '70px'
    //set the position
    this.element.style.position = 'fixed'
    this.element.style.left = "250" + "px"
    this.element.style.top = "700" + "px"
    //makes it unclickable
    this.element.style.pointerEvents = "none";
         //sets it to render behind other elements which have a default index of 0. but I decided not to use it.
         //this.element.style.zIndex = -1

         //for debugging collision
         this.element.style.border = "1px solid red"
    // add it to the page
    document.body.appendChild(this.element)
  }
}

class Asteroid 
{
  constructor() 
  {
    var candoDamage = true;
    var Health = 1;
    this.Health = Health;
    let Posx = Math.min(Math.floor(Math.random() * 600), 600 - 50)
    let Posy = 1
    let speedY = Math.min(Math.floor(Math.random() * 3 + 2))
    let speedX = Math.min(Math.floor(Math.random() *1))
    this.speedY = speedY
    this.speedX = speedX
    this.Posx = Posx
    this.Posy = Posy

    var wasShipHit

    // create the HTML element
    this.element = document.createElement('img')
    // set image opacity
    this.element.style.opacity = Health
    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = '50px'
    // set height
    this.element.style.height = '50px'

    //for debugging collision
    this.element.style.border = "1px solid red"

    // add it to the page
    document.body.appendChild(this.element)
    
    
    // make it respond to clicks
    //this.element.onclick = this.clicked
    this.element.onclick = this.clicked
    
    // start it in the top-left
    this.setXY(this.Posx, this.Posy)
    
  }
  RandomizeAsteroid()
  {
    this.speedY = Math.min(Math.floor(Math.random() * 3 + 2))
    this.speedX = Math.min(Math.floor(Math.random() *1))
  }
  CheckCollision()
  {
    this.wasShipHit = (isCollide(this.element, starShip.element))
    
      if(this.wasShipHit && this.candoDamage && LiveNum > -1)
      {
        //this will change the asteroid image before it resets
        LiveNum -=1
        this.setExplodedDamage()
        
        //Randomizes which sound will be played, creates a-
     //Random number between 1 and 3 and sets the audio file to use based on that.
      var rand = (Math.floor(Math.random() * (3 - 1 + 1)) + 1)
      if(rand == 1)
      {
        var ShipHit = new Audio('Asteroid_explosion1.mp3');
         ShipHit.play();
      }
      if(rand == 2)
      {
        var ShipHit = new Audio('Asteroid_explosion2.mp3');
        ShipHit.play();
      }
      if(rand == 3)
      {
        var ShipHit = new Audio('Asteroid_explosion3.mp3');
        ShipHit.play();
      }
        this.candoDamage = false;
      }
  }
  //for asteroid movement
  moveAsteroidDown () 
  {
    
    //call a function to start decreasing the asterioid opacity if the health variable is less then 1
    this.setFade()
    this.CheckCollision()
  
  
        //if the asteroid is below a certain point on the page
      if(this.Posy > 900)
      {
        
        //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = Math.min(Math.floor(Math.random() * max_x), max_x - 50)
        //when the asteroid is clicked the image is changed, this changes it back-
        //aswel as resetting its health and opacity. 
        this.setNotExploded()
        this.RandomizeAsteroid()
        this.candoDamage = true;
        //reset the asteroid position on the y to the top of the page and closes the loop for this condition. 
        this.Posy = 1;
      }
      
    
                   //Asteroid Movement---------
  
    //variables store values to later apply to the asteroids x and y position
    //the positions update each time this function loops,-
    //they travel at slightly different speeds. updating the x and y-
    //at the same time slows objects to travel at an angle.
    this.Posy += this.speedY
    this.Posx += this.speedX
    //apply the values of the position variables to the asteroids actual position-
    //using a function within my asteroid class.
    this.setXY(this.Posx, this.Posy)
    
                   //----Asteroid Movement-----
  }
            
           
    //this function lets me set an x and y value and apply it to this asteroid-
    setXY(x, y) 
  {
    this.x = x
    this.y = y
    //then I set the elements position on the page to the x and y value
    this.element.style.position = 'fixed'
    this.element.style.left = this.x + "px"
    this.element.style.top = this.y + "px"
  }
  
  
   
  //when an asteroid is destroyed it will become transparent and have a different image
  // this function will reset the opacity and image of the asteroid-
  //asteroids are reset only after reaching the bottom of the game area,
  //even if "destroyed" the asteroid will continue to fall until it reaches the bottom-
  //of the game area and is reset. this gives the illusion of new asteroids appearing
  //at random times, instead of as soon as destroyed.
  setNotExploded() 
  {
    
    this.element.src = asteroid_img_src
    this.element.Health = 1;
    this.element.style.opacity = this.Health;
    
  }


  //this function is called when the asteroid reaches far enough down the page-
  //to hit the space ship, and changes the image to appear like-
  //it has hit something, before it is reset.
  setExplodedDamage() 
  {
      this.element.src = asteroid_damage_img_src
  }


  //function is called when you click an asteroid.
  //changes the image and sets the health and score. 
  clicked() 
  {
    //set a set sound instand and play it
    var AsteroidHit = new Audio('Lazer2.mp3');
    AsteroidHit.play();
    //set the image of the asteroid
    this.src = asteroid_explode_img_src
    //set asteroid health after explosion-
    // higher value under 1 will have a slower fade
    this.Health = 0.5;
    //increase player score.
    ScoreNum += 100;
    // console.log('asteroid clicked')
  }
  
  //when the asteroid is clicked and health is less then 1,
  //theopacity will decrease overtime until its invisable.  
  setFade()
  {
      if(this.element.Health < 1)
      {
      
      this.element.style.opacity -=0.03
      }
  }
  
}
 
//using the class created above this will create a starship in the gamearea.
let starShip = new StarShip()
//using the asteroid class created above this will create three separate-
//asteroids sharing the same code and characteristics
let asteroid = new Asteroid()
let asteroid2 = new Asteroid()
let asteroid3 = new Asteroid()
//this is the max positions for the asteroid. I dont want to exceed this. 
let max_x = 600
let max_y = 600

function GameManager()
{
  updatescore();
  checkInput();
  checkRotationMovement();
  turnBackround();
  
  asteroid.moveAsteroidDown();
  asteroid2.moveAsteroidDown();
  asteroid3.moveAsteroidDown();
}

  
  
function isCollide(a, b) 
{
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return!
  (
      ((aRect.top + aRect.height) < (bRect.top)) ||
      (aRect.top > (bRect.top + bRect.height)) ||
      ((aRect.left + aRect.width) < bRect.left) ||
      (aRect.left > (bRect.left + bRect.width))
  );
}
function updatescore()
{
   //Updates the Html text to display the values in my score and lives variables.
   Scorecount.innerHTML = "Score:" + " " + ScoreNum
   Lifecount.innerHTML = "Lives:" + " " + LiveNum
 
   //Resets the score and lives when lives run out and display gameover
   if(LiveNum < 0)
   {
     window.alert('Game Over. Try again?')
     //after gameover alert is clicked, asteroid positions and score/lives are reset.
     asteroid.setNotExploded();
     asteroid2.setNotExploded();
     asteroid3.setNotExploded();
     asteroid.Posy = 0.1;
     asteroid2.Posy = 0.1;
     asteroid3.Posy = 0.1;
     ScoreNum = 0
     LiveNum = 3 
   }
}
//setInterval(CheckCollision, 1)
setInterval(GameManager, 10)
//setInterval(checkRotationMovement, 1)
//setInterval(asteroid3.moveAsteroidDown, 12)

//Asteroid.interval = setInterval(this.moveAsteroidDown.bind(this),12)

//creates and element on screen called game area and defines various parameters.
let gamearea = document.createElement('div')
//Makes it so backround elements arent effected by pointer clicks
gamearea.style.pointerEvents = "none";
gamearea.style.position = 'fixed'
gamearea.style.top = '0px'
gamearea.style.left = '0px'
gamearea.style.width = max_x + "px"
gamearea.style.height = max_y + "px"

//makes sure this element renders behind everything else by giving it the lowest index
gamearea.style.zIndex = -999
//adds the element to the document
document.body.appendChild(gamearea)
//set the speed at which the asteroid movement function is called.
//A lower number gives quicker smoother movement
//interval = setInterval(moveAsteroidDown,12)






