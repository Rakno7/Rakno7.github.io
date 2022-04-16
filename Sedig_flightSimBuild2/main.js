//image data
let asteroid_img_src = "Asteroid.png" 
let asteroid_explode_img_src = "Asteroid Destroyed.png"
let asteroid_damage_img_src = "Asteroid Damage.png" 
let Ship_img_src = "Space ship.png"
var ScoreNum = 0;
var LiveNum = 9;
const ScrollingBackround = document.getElementById("StarsBackround")
const Scorecount = document.getElementById("Score")
const Lifecount = document.getElementById("Lives")
var ShipSpeedX = 0;
var flightSpeed = 0;
var ShipLowSpeed = new Audio('ShipLowSpeed.mp3')
ShipLowSpeed.loop = true

var ShipAccelerate = new Audio('ShipAccelerate.mp3')
ShipAccelerate.loop = true
var shipVolume = 0.1
var AccelerateVolume = 0
var gameStarted = false;


let Wave1 = true
let Wave2 = false
let Wave3 = false
let Wave4 = false
let Wave5 = false
let Wave6 = false
let Wave7 = false
let Wave8 = false
let Wave9 = false
let Wave10 = false
let Wave11 = false
let Wave12 = false
   
    


//KEY PRESS DATA
var IS_LEFT_PRESSED = false;
var IS_RIGHT_PRESSED = false;
var IS_UP_PRESSED = false;
var IS_DOWN_PRESSED = false;
var IS_SHOOT_PRESSED = false

var canShoot = true
var triggershot = false;

let magic_key = "KeyS"
let last_keydown = 0
let master_rotation = 0
let Backround_rotation = 0
let current_X = 900

let SpawnTimer = 0
let ShotDelay = 0

function ApplyObjectTurn()
{
  for (let i=0; i <num_asteroids; i++)
  {
    asteroids[i].turnX  = -master_rotation / 100
  }

   for (let i=0; i <num_stars; i++)
  {
    stars[i].turnX = -master_rotation / 200
  }
}


function turnBackround()
{
  
  ScrollingBackround.style.transformOrigin = 'center'
  ScrollingBackround.style.transform = 'rotate(' + -master_rotation / 5 + 'deg)'
  
}
//KeyPresses---------------------------------------------------------------------------------
function rotateLeft() 
{
  ApplyObjectTurn()
  if(master_rotation >= -89)
  {
 
    var flightspeedDec = flightSpeed / 10 
    master_rotation = master_rotation - 1 + flightspeedDec
    Rotation_element.textContent = 'Rotation =' + ' ' + master_rotation
  
  
  starShip.element.style.transformOrigin = 'center'
  starShip.element.style.transform = 'rotate(' + master_rotation + 'deg)'
  }
  
}
function rotateRight() 
{
  ApplyObjectTurn()
  if(master_rotation <= 89)
  {
    var flightspeedDec = flightSpeed / 10 
  master_rotation = master_rotation + 1 - flightspeedDec
  Rotation_element.textContent = 'Rotation =' + ' ' + master_rotation
  
  starShip.element.style.transformOrigin = 'center'
  starShip.element.style.transform = 'rotate(' + master_rotation + 'deg)'
  }
}
function moveLeft() 
{
  current_X = current_X + ShipSpeedX
  starShip.element.style.position = 'relative'
  starShip.element.style.left = current_X + 'px'
  //if(!triggershot)
  //{
  //  projectile.element.style.position = 'relative'
  //  projectile.element.style.left = current_X + 'px'
  //}
}
function moveRight() 
{
 
  current_X = current_X + ShipSpeedX
  starShip.element.style.position = 'relative'
  starShip.element.style.left = current_X + 'px'
 // if(!triggershot)
 // {
 //   projectile.element.style.position = 'relative'
 //   projectile.element.style.left = current_X + 'px'
 // }
}
function checkInput()
{
 //if(!IS_SHOOT_PRESSED)
 //{
 //  //canShoot = true;
 //}
  if(IS_SHOOT_PRESSED == true)
  {
    //triggershot = true
    ShotDelay += 0.01
    if(ShotDelay > 2)
    { 
      num_Projectiles += 1
      projectiles.push(new Projectile())
    
      ShotDelay = 0
    }
    
  }
  if(IS_LEFT_PRESSED)
  {
    rotateLeft();
  }
  if(IS_RIGHT_PRESSED)
  {
    rotateRight();
  }
  if(!IS_UP_PRESSED)
  {
    
    if(AccelerateVolume >= 0.01)
    {
      AccelerateVolume -= 0.01
      ShipAccelerate.volume = AccelerateVolume
    }
  }
  if(IS_UP_PRESSED  == true)
  {
    SpawnTimer += 0.2
    if(SpawnTimer > 2)
    { 
      starShip.SpawnParticle()
      SpawnTimer = 0
    }
    if(flightSpeed < 5)
    {
        flightSpeed +=0.01;
        if(flightSpeed > 1.5)
        
        if(shipVolume < 0.9)
        {
          shipVolume += 0.01
        }
        if(AccelerateVolume < 0.9)
        {
          AccelerateVolume += 0.0005;
        }
        ShipLowSpeed.volume = shipVolume
        ShipAccelerate.volume = AccelerateVolume
        //if(master_rotation > 0 && master_rotation < 30 || master_rotation < 0 && master_rotation > -30)
        //{
          starShip.element.style.top = -flightSpeed * 20 + 730  + 'px'
        //}
     }
  }
  if(IS_DOWN_PRESSED  == true && flightSpeed >= 0.05 )
  {
    flightSpeed -=0.01;
    if(shipVolume > 0.1)
    {
      shipVolume -= 0.01
    }
    ShipLowSpeed.volume = shipVolume
    starShip.element.style.top = -flightSpeed * 20 + 730  + 'px'
  }
    
}
function checkRotationMovement()
{
  
  if(master_rotation >= 0 && master_rotation <= 10)
  {
    ShipSpeedX = 0
  }
  if(master_rotation > 0 && master_rotation > 50 && master_rotation < 60)
  {
    ShipSpeedX = 0.1
  }
  if(master_rotation > 0 && master_rotation > 60 && master_rotation < 70)
  {
    ShipSpeedX = 0.2
  }
  if(master_rotation > 0 && master_rotation >= 70)
  {
    ShipSpeedX = 0.3
  }
  if(master_rotation < 0 && master_rotation < -50 && master_rotation > -60)
  {
    ShipSpeedX = -0.1
  }
  if(master_rotation < 0 && master_rotation < -60 && master_rotation > -70)
  {
    ShipSpeedX = -0.2
  }
  if(master_rotation < 0 && master_rotation <= -70)
  {
    ShipSpeedX = -0.3
  }
  if (master_rotation < 0 && current_X > 600 && flightSpeed > 0.1)
  {
      moveLeft()
  }
  if (master_rotation > 0 && current_X < 1000 && flightSpeed > 0.1)
  {
      moveRight()
  }

}
let keyup_element = document.getElementById('react-keyup')
function keyupHandler(event) 
{
  if (event.code === 'ArrowLeft') IS_LEFT_PRESSED = false
   if (event.code === 'ArrowRight') IS_RIGHT_PRESSED = false
   if (event.code === 'ArrowUp') IS_UP_PRESSED = false
   if (event.code === 'ArrowDown') IS_DOWN_PRESSED = false
   if (event.code === 'Numpad0') IS_SHOOT_PRESSED = false
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
   if (event.code === 'ArrowRight') IS_RIGHT_PRESSED = true
   if (event.code === 'ArrowUp') IS_UP_PRESSED = true
   if (event.code === 'ArrowDown') IS_DOWN_PRESSED = true
   if (event.code === 'Numpad0') IS_SHOOT_PRESSED = true
  
  keydown_element.textContent = event.code + ' (' + event.keyCode + ')'
}
//if(master_rotation != 0)
//{
//  checkRotationMovement()
//}
document.addEventListener('keydown', keydownHandler)

let keypress_element = document.getElementById('react-keypress')
let Rotation_element = document.getElementById('Rotation')
function keypressHandler(event) 
{
  keypress_element.textContent = event.code + ' (' + event.keyCode + ')'
  //if (event.code === 'Key')
}
////-------------------keypresses--------------------------------------------------------
document.addEventListener('keypress', keypressHandler)
function CheckTriggerShot()
{
  // if (triggershot)
  // {
  //   projectiles.LaunchForward();
  // }
  // if(!triggershot)
  // {
  //  projectiles.Holding();
  // }
} 

class StarShip
{
  constructor() 
  {
    
    let Posx 
    let Posy 

    
    
    // create the HTML element
    this.element = document.createElement('img')
    // set its image
    this.element.src = Ship_img_src
    
    this.element.style.opacity = 1
    // set width
    this.element.style.width = '10px'
    // set height
    this.element.style.height = '20px'
    //set the position
    this.element.style.position = 'relative'
    this.element.style.left = current_X + "px"
    this.element.style.top = -flightSpeed * 20 + 730  + 'px'
    //makes it unclickable
    this.element.style.pointerEvents = "none";
         //sets it to render behind other elements which have a default index of 0. but I decided not to use it.
         //this.element.style.zIndex = -1

         //for debugging collision
         this.element.style.border = "1px solid red"
    // add it to the page
    document.body.appendChild(this.element)

    
    
  }

  SpawnParticle()
  {
     Particles.push(new Particle())
     num_Particles += 1
  }

  
}

class Asteroid 
{
  constructor() 
  {
    var candoDamage = true;
    var Health = 1;
    this.Health = Health;
    let Posx = 2000//Math.min(Math.floor(Math.random() * 600), 600 - 50)
    let Posy = 2000
    let speedY = 0.1
    let speedX = Math.floor(Math.random()* 2) - 2 / 5; 
    let RotateSpeed = Math.floor(Math.random()* 1) - 1 / 20;
    this.RotateSpeed = RotateSpeed
    let normalRotation = master_rotation * 1 / 25
    this.speedY = speedY
    this.speedX = speedX
    let turnX = 0
    this.turnX = turnX
    this.Posx = Posx
    this.Posy = Posy
    let AsteroidSize = (Math.floor(Math.random() * ScoreNum) * ScoreNum)
    this.AsteroidSize = AsteroidSize
    let Asteroid_Rotation = Math.min(Math.floor(Math.random() * 180))
    this.Asteroid_Rotation = Asteroid_Rotation

    var wasShipHit

    // create the HTML element
    this.element = document.createElement('img')
    // set image opacity
    this.element.style.opacity = Health
    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = this.AsteroidSize + 'px'
    // set height
    this.element.style.height = this.AsteroidSize +'px'



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
    
    this.AsteroidSize = Math.min(Math.floor(Math.random() * 100) + 10)
    this.element.style.height = this.AsteroidSize +'px'
    this.element.style.width = this.AsteroidSize +'px'
    //this.speedY = Math.min(Math.floor(Math.random() * 3 + 2))
    //this.speedX = Math.min(Math.floor(Math.random() * 1))
  }
  SpawnParticle()
  {
    num_Debris += 20 
    this.candoDamage = false;
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
    
    this.setExplodedDamage()
    for (let i=0;i<20;i++) debris.push(new Debris())
  
 
     
  
   
    //num_Debris += 20
    for (let i=0; i <num_Debris; i++)
  {
    debris[i].Posx = this.Posx + Math.min(Math.floor(Math.random() * 100) + 20);
    debris[i].Posy = this.Posy + Math.min(Math.floor(Math.random() * 100) - 20);
  }
  }
  CheckCollision()
  {
    this.wasShipHit = (isCollide(this.element, starShip.element))
    
    for (let i=0; i <num_Projectiles; i++)
     {
      this.wasHit = (isCollide(this.element, projectiles[i].element))
     }
      
    if(this.wasHit && this.candoDamage)
      {
        //this.clicked()
        //this.SpawnParticle()

        
        var rand = (Math.floor(Math.random() * (3 - 1 + 1)) + 1)
        if(rand == 1)
        {
          var ShipHit = new Audio('Asteroid_explosion1.mp3');
          ShipHit.volume = 0.3
           ShipHit.play();
        }
        if(rand == 2)
        {
          var ShipHit = new Audio('Asteroid_explosion2.mp3');
          ShipHit.volume = 0.3
          ShipHit.play();
        }
        if(rand == 3)
        {
          var ShipHit = new Audio('Asteroid_explosion3.mp3');
          ShipHit.volume = 0.3
          ShipHit.play();
        }
        this.candoDamage = false;
      }
      
      
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
            ShipHit.volume = 0.3
             ShipHit.play();
          }
          if(rand == 2)
          {
            var ShipHit = new Audio('Asteroid_explosion2.mp3');
            ShipHit.volume = 0.3
            ShipHit.play();
          }
          if(rand == 3)
          {
            var ShipHit = new Audio('Asteroid_explosion3.mp3');
            ShipHit.volume = 0.3
            ShipHit.play();
          }
        this.candoDamage = false;
      }
  }
  checkwave()
  {
    if(Wave4 && !Wave6 && !Wave8)
    {
      this.element.style.height = this.AsteroidSize * 2
      this.element.style.width = this.AsteroidSize * 2
    }
    if(Wave6 && !Wave8)
    {
      this.element.style.height = this.AsteroidSize * 6
      this.element.style.width = this.AsteroidSize * 6
    }
    if(Wave8)
    {
      this.element.style.height = this.AsteroidSize * 10
      this.element.style.width = this.AsteroidSize * 10
    }
  }
  //for asteroid movement
  moveAsteroidDown () 
  {
    
    this.Asteroid_Rotation += this.RotateSpeed
    //call a function to start decreasing the asterioid opacity if the health variable is less then 1
    this.setFade()
    this.CheckCollision()
    this.checkwave()
  
  
        //if the asteroid is below a certain point on the page
        if(this.Posy > max_y + 100 || this.Posx > max_x + 100 || this.Posx <-100 )
      {
        
        var random = Math.min(Math.floor(Math.random() * 4))
        

        if(random == 1)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = Math.min(Math.floor(Math.random() * max_x), max_x - 50);
        //this.RandomizeStar()
        this.Posy = -100;
        }
        
        if(random == 2)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = -200;
        //this.RandomizeStar()
        this.Posy = Math.min(Math.floor(Math.random() * max_x), max_x - 50);
        }
        if(random == 3)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = max_x;
        //this.RandomizeStar()
        this.Posy = Math.min(Math.floor(Math.random() * max_x), max_x - 50);
        }
        this.setNotExploded()
        this.RandomizeAsteroid()
        this.candoDamage = true;
      }
      
      
    
                   //Asteroid Movement---------
  
    //variables store values to later apply to the asteroids x and y position
    //the positions update each time this function loops,-
    //they travel at slightly different speeds. updating the x and y-
    //at the same time slows objects to travel at an angle.
    
     this.Posy += this.speedY
     this.Posx += this.speedX / 2
  
    if(flightSpeed > 0.05)
    {
     this.Posx += -master_rotation  / 5 * flightSpeed / 10
        if(master_rotation < 0)
        {
          this.normalRotation = master_rotation  * 1 / 80
          if(this.speedY + flightSpeed + this.normalRotation > 0)
          {
          this.Posy += this.speedY + flightSpeed + this.normalRotation
          }
        }
        if(master_rotation > 0)
        {
          this.normalRotation = master_rotation  * 1 / 80
          if(this.speedY + flightSpeed - this.normalRotation > 0)
          {
          this.Posy += this.speedY + flightSpeed - this.normalRotation
          }
        }
     }
    

      
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
    this.element.style.transformOrigin = 'center'
    this.element.style.transform = 'rotate(' + this.Asteroid_Rotation + 'deg)'
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
    this.candoDamage = false;
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

class Projectile
{
   constructor()
   {
     let Posx = current_X - 20
     let Posy = -flightSpeed * 20 + 820 
     this.Posx = Posx
     this.Posy = Posy
     let speed = 1
     this.speed = speed
     let RotationOnlaunch = master_rotation
     this.RotationOnlaunch = RotationOnlaunch
     let DespawnTimer = 1
     this.DespawnTimer = DespawnTimer

     //var wasAsteroidHit

    // create the HTML element
    this.element = document.createElement('img')
    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = 15 + 'px'
    // set height
    this.element.style.height = 15 +'px'

    //for debugging collision
    this.element.style.border = "1px solid red"
if(master_rotation < 0 )
{
      this.element.style.position = 'relative'
      this.element.style.left = -current_X + "px"
      this.element.style.top = this.y -flightSpeed * 10 + 730  + 'px'
}
if(master_rotation > 0 )
{
      this.element.style.position = 'relative'
      this.element.style.left = current_X + "px"
      this.element.style.top = this.y + -flightSpeed * 10 + 730  + 'px'
}
    

    // add it to the page
    document.body.appendChild(this.element)
    
   }
   Holding()
   {
     //this.Posy = starShip.Posy
     //this.Posx = starShip.Posx
     this.setXY(this.Posx, this.Posy)
   }
   
   LaunchForward()
   {
     this.DespawnTimer -= 0.004
     if(this.DespawnTimer < 0)
     {
      canShoot = true
       this.element.remove()
       
       //num_Projectiles -=3
       //projectiles.pop();
       //projectiles.pop();
       //projectiles.pop();
      
      //projectiles.pop();
     }
     if(this.RotationOnlaunch < 0)
     {
      if (this.RotationOnlaunch >  -10)
      {
        this.Posy += -1 * 1
        //this.Posx += 0 
      }

      if (this.RotationOnlaunch <= - 10 && this.RotationOnlaunch > - 20)
      {
        this.Posy += -0.9 * 5
        this.Posx += -0.1 * 5  // this.speed
      }
      if (this.RotationOnlaunch <= - 20 && this.RotationOnlaunch > - 30)
      {
        this.Posy += -0.8  * 5
        this.Posx += -0.2  * 5
      }
      if (this.RotationOnlaunch <= - 30 && this.RotationOnlaunch > - 40)
      {
        this.Posy += -0.7  * 5
        this.Posx += -0.3  * 5
      }
      if (this.RotationOnlaunch <= - 40 && this.RotationOnlaunch > - 50)
      {
        this.Posy += -0.6  * 5
        this.Posx += -0.4  * 5
      }
      if (this.RotationOnlaunch <= - 50 && this.RotationOnlaunch > - 60)
      {
        this.Posy += -0.5  * 5
        this.Posx += -0.5  * 5
      }
      if (this.RotationOnlaunch <= - 50 && this.RotationOnlaunch > - 70)
      {
        this.Posy += -0.4  * 5
        this.Posx += -0.6  * 5
      }
      if (this.RotationOnlaunch <= - 60 && this.RotationOnlaunch > - 80)
      {
        this.Posy += -0.3  * 5
        this.Posx += -0.7  * 5
      }
      if (this.RotationOnlaunch <= - 80)
      {
        this.Posy += -0.2  * 5
        this.Posx += -0.8  * 5
      }

    
     }
     if(this.RotationOnlaunch > 0)
     {
      if (this.RotationOnlaunch <  10)
      {
        this.Posy += -1 * 5
        //this.Posx += 0 
      }
      if (this.RotationOnlaunch >=  10 && this.RotationOnlaunch < 20)
      {
        this.Posy += -0.9 * 5
        this.Posx += 0.1 * 5
      }
      if (this.RotationOnlaunch >=  20 && this.RotationOnlaunch < 30)
      {
        this.Posy += -0.8 * 5
        this.Posx += 0.2  * 5
      }
      if (this.RotationOnlaunch >=  30 && this.RotationOnlaunch < 40)
      {
        this.Posy += -0.7  * 5
        this.Posx += 0.3 * 5
      }
      if (this.RotationOnlaunch >=  40 && this.RotationOnlaunch < 50)
      {
        this.Posy += -0.6 * 5
        this.Posx += 0.4  * 5
      }
      if (this.RotationOnlaunch >=  50 && this.RotationOnlaunch < 60)
      {
        this.Posy += -0.5 * 5
        this.Posx += 0.5  * 5
      }
      if (this.RotationOnlaunch >=  50 && this.RotationOnlaunch < 70)
      {
        this.Posy += -0.4  * 5 
        this.Posx += 0.6  * 5
      }
      if (this.RotationOnlaunch >=  60 && this.RotationOnlaunch < 80)
      {
        this.Posy += -0.3  * 5
        this.Posx += 0.7  * 5
      }
      if (this.RotationOnlaunch >= 80)
      {
        this.Posy += -0.2  * 5
        this.Posx += 0.8  * 5
      }
     }
     this.setXY(this.Posx, this.Posy)
   }
   setXY(x, y) 
  {
    this.x = x
    this.y = y
    //if(triggershot)
    //{
    this.element.style.position = 'fixed'
    this.element.style.left = this.Posx + 'px'
    this.element.style.top = this.Posy + 'px'
    //}
    //then I set the elements position on the page to the x and y value
    //if(!triggershot)
    //{
    //this.element.style.top = -flightSpeed * 20 + 730  + 'px'
    //}
  }
}
class Particle 
{
  constructor() 
  {
    let Posx = current_X 
    let Posy = -flightSpeed * 20 + 840 
    let normalRotation = 0
    let speedY = 0
    let speedX = 0
    let scrollspeed = Math.min(Math.floor(Math.random() * 10) + 1) / 20;
    this.scrollspeed = scrollspeed;
    this.speedY = speedY
    this.speedX = speedX
    let turnX = 0
    this.turnX = turnX
    this.Posx = Posx
    this.Posy = Posy
    let DespawnTimer = 1
    this.DespawnTimer = DespawnTimer

    // create the HTML element
    this.element = document.createElement('img')

    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = this.scrollspeed * 20 + 'px'
    // set height
    this.element.style.height = this.scrollspeed * 20 +'px'

    //for debugging collision
    this.element.style.border = "3px solid gray"

    this.element.style.zIndex = -1

    // add it to the page
    document.body.appendChild(this.element)
    
    // start it in the top-left
    this.setXY(this.Posx, this.Posy)
    
  }
 
  
  //for Partcicle movement relative to ship
  moveParticle() 
  {
    this.element.style.opacity = this.DespawnTimer
    if(this.DespawnTimer < 0.01)
    { 
      //this.element.style.border = "1px solid red"
      //Particles.pop();
      this.element.remove()
      //this.DespawnTimer = 0
    }
    if(this.DespawnTimer >= 0.01)
  {
    this.DespawnTimer -= 0.01
                   //Particle Movement---------
  
    //variables store values to later apply to the asteroids x and y position
    //the positions update each time this function loops,-
    //they travel at slightly different speeds. updating the x and y-
    //at the same time slows objects to travel at an angle.
    this.Posy += this.scrollspeed /10
    this.Posx += this.scrollspeed / 10 
    
    if(flightSpeed > 0.05)
    {

       this.Posx += -master_rotation  / 5 * flightSpeed / 10
       if(master_rotation < 0)
       {
         this.normalRotation = master_rotation  * 1 / 80
         if(flightSpeed + this.scrollspeed + this.normalRotation > 0)
         {
         this.Posy +=  flightSpeed  + this.normalRotation + this.scrollspeed
         }
       }
       if(master_rotation > 0)
       {
         this.normalRotation = master_rotation  * 1 / 80
         if( flightSpeed + this.scrollspeed - this.normalRotation > 0)
         {
         this.Posy += flightSpeed  + this.scrollspeed - this.normalRotation 
         }
       }
    }
    
    //apply the values of the position variables to the asteroids actual position-
    //using a function within my asteroid class.
    this.setXY(this.Posx, this.Posy)
    
  }  
  
  
  
  //----Star Movement-----
  }
                   
    //this function lets me set an x and y value and apply it to this Star
    setXY(x, y) 
  {
    this.x = x
    this.y = y
    //then I set the elements position on the page to the x and y value
    if(master_rotation < 0)
    {
      
      this.element.style.position = 'fixed'
      this.element.style.left = this.x + "px"
      this.element.style.top = this.y + master_rotation + 70 + "px"
    }
    if(master_rotation > 0)
    {
      this.element.style.position = 'fixed'
      this.element.style.left = this.x + "px"
      this.element.style.top = this.y + -master_rotation + 70 + "px"
    }
    
  }

}

class Debris
{
  constructor() 
  {
    
    let Posx = 200
    let Posy = 200
    let normalRotation = 0
    let speedY = 0
    let speedX = 0
    let scrollspeed = Math.min(Math.floor(Math.random() * 5)  -5) / 20;
    let RandomMovement = Math.min(Math.floor(Math.random() * 2)  -2);
    let RandomMovement2 = Math.min(Math.floor(Math.random() * 2)  -2);
    this.RandomMovement = RandomMovement
    this.RandomMovement2 = RandomMovement2
    this.scrollspeed = scrollspeed;
    this.speedY = speedY
    this.speedX = speedX
    let turnX = 0
    this.turnX = turnX
    this.Posx = Posx
    this.Posy = Posy
    let DespawnTimer = 1
    this.DespawnTimer = DespawnTimer

    // create the HTML element
    this.element = document.createElement('img')

    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = Math.min(Math.floor(Math.random() * 2) + 1) / 20  + 'px'
    // set height
    this.element.style.height = Math.min(Math.floor(Math.random() * 2) + 1) / 20  +'px'

    //for debugging collision
    this.element.style.border = "8px solid black"

    this.element.style.zIndex = -1

    // add it to the page
    document.body.appendChild(this.element)
    
    // set position 
    this.setXY(this.Posx, this.Posy)
    
  }
 
  
  //for Partcicle movement relative to ship
  moveParticle() 
  {
    this.element.style.opacity = this.DespawnTimer
    if(this.DespawnTimer < 0.005)
    {
      this.element.remove()
      //this.DespawnTimer = 0
    }
    if(this.DespawnTimer >= 0.005)
  {
    this.DespawnTimer -= 0.005
                   //Particle Movement---------
  
    //variables store values to later apply to the asteroids x and y position
    //the positions update each time this function loops,-
    //they travel at slightly different speeds. updating the x and y-
    //at the same time slows objects to travel at an angle.
    this.Posy +=  this.RandomMovement2 / 5
    this.Posx +=  this.RandomMovement / 5
    
    if(flightSpeed > 0.05)
    {

      
       if(master_rotation < 0)
       {
        this.Posx +=  flightSpeed / 100
         this.normalRotation = master_rotation  * 1 / 80
         if(flightSpeed > 0)
         {
         this.Posy +=  flightSpeed  
         }
       }
       if(master_rotation > 0)
       {
        this.Posx -=  flightSpeed / 100
         this.normalRotation = master_rotation  * 1 / 80
         if( flightSpeed > 0)
         {
         this.Posy += flightSpeed  
         }
       }
    }
    
    //apply the values of the position variables to the asteroids actual position-
    //using a function within my asteroid class.
    this.setXY(this.Posx, this.Posy)
    
  }  
  
  
  
  //----Star Movement-----
  }
                   
    //this function lets me set an x and y value and apply it to this Star
    setXY(x, y) 
  {
    this.x = x
    this.y = y
    //then I set the elements position on the page to the x and y value
    if(master_rotation < 0)
    {
      
      this.element.style.position = 'fixed'
      this.element.style.left = this.x + "px"
      this.element.style.top = this.y + master_rotation + 70 + "px"
    }
    if(master_rotation > 0)
    {
      this.element.style.position = 'fixed'
      this.element.style.left = this.x + "px"
      this.element.style.top = this.y + -master_rotation + 70 + "px"
    }
    
  }

}

class Star 
{
  constructor() 
  {
    let Posx = 9000
    let Posy = 9000
    let normalRotation = 0
    let speedY = 0
    let speedX = 0
    let scrollspeed = Math.min(Math.floor(Math.random() * 5) + 0.1) / 20;
    this.scrollspeed = scrollspeed;
    this.speedY = speedY
    this.speedX = speedX
    let turnX = 0
    this.turnX = turnX
    this.Posx = Posx
    this.Posy = Posy

    // create the HTML element
    this.element = document.createElement('img')

    // set its image
    this.element.src = asteroid_img_src
    // set width
    this.element.style.width = this.scrollspeed * 3 + 'px'
    // set height
    this.element.style.height = this.scrollspeed * 3 +'px'

    //for debugging collision
    this.element.style.border = "1px solid white"

    this.element.style.zIndex = -1

    // add it to the page
    document.body.appendChild(this.element)
    
    // start it in the top-left
    this.setXY(this.Posx, this.Posy)
    
  }
  RandomizeStar()
  {
    //this.speedY = Math.min(Math.floor(Math.random() * 3 + 2))
    //this.speedX = Math.min(Math.floor(Math.random() * 1))
  }
  
  //for Star movement relative to ship
  moveStar() 
  {
    
    //call a function to start decreasing the asterioid opacity if the health variable is less then 1
        //if the asteroid is below a certain point on the page
      if(this.Posy > max_y + 100 || this.Posx > max_x + 100|| this.Posx < 0 - 100 )
      {
        
        var random = Math.min(Math.floor(Math.random() * 4))

        if(random == 1)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = Math.min(Math.floor(Math.random() * max_x), max_x - 50);
        //this.RandomizeStar()
        this.Posy = Math.min(Math.floor(Math.random() * -100));
        }
        
        if(random == 2)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = Math.min(Math.floor(Math.random() * -100));;
        //this.RandomizeStar()
        this.Posy = Math.min(Math.floor(Math.random() * max_y), max_y - 50);
        }
        if(random == 3)
        {
          //the position of the asteroid on the x axis is set to a random position-
        //between two max values.
        this.Posx = max_x + Math.min(Math.floor(Math.random() * 100))
        //this.RandomizeStar()
        this.Posy = Math.min(Math.floor(Math.random() * max_y), max_y - 50);
        }
        
      }
    
                   //Star Movement---------
  
    //variables store values to later apply to the asteroids x and y position
    //the positions update each time this function loops,-
    //they travel at slightly different speeds. updating the x and y-
    //at the same time slows objects to travel at an angle.



    
    
    this.Posy += this.scrollspeed /10
    this.Posx += this.scrollspeed / 10 
    
    if(flightSpeed > 0.05)
    {

       this.Posx += -master_rotation  / 5 * flightSpeed / 10
       if(master_rotation < 0)
       {
         this.normalRotation = master_rotation  * 1 / 80
         if(flightSpeed + this.scrollspeed + this.normalRotation > 0)
         {
         this.Posy +=  flightSpeed  + this.normalRotation + this.scrollspeed
         }
       }
       if(master_rotation > 0)
       {
         this.normalRotation = master_rotation  * 1 / 80
         if( flightSpeed + this.scrollspeed - this.normalRotation > 0)
         {
         this.Posy += flightSpeed  + this.scrollspeed - this.normalRotation 
         }
       }
    }
    
    //apply the values of the position variables to the asteroids actual position-
    //using a function within my asteroid class.
    this.setXY(this.Posx, this.Posy)
    
                   //----Star Movement-----
  }
                   
    //this function lets me set an x and y value and apply it to this Star
    setXY(x, y) 
  {
    this.x = x
    this.y = y
    //then I set the elements position on the page to the x and y value
    this.element.style.position = 'fixed'
    this.element.style.left = this.x + "px"
    this.element.style.top = this.y + "px"
  }

}

 
//using the class created above this will create a starship in the gamearea.

//using the asteroid class created above this will create separate-
//asteroids sharing the same code and characteristics
//this is the max positions for the asteroid. I dont want to exceed this. 
let max_x = 1800
let max_y = 900


let Particles = []
num_Particles = 1
for (let i=0;i<num_Particles;i++) Particles.push(new Particle())

let debris = []
num_Debris = 1
for (let i=0;i<num_Debris;i++) debris.push(new Debris())

let asteroids = []
let num_asteroids = 1
for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())


let stars = []
let num_stars = 50
for (let i=0;i<num_stars;i++) stars.push(new Star())

let projectiles = []
let num_Projectiles = 1
for (let i=0;i<num_Particles;i++) projectiles.push(new Projectile())


let starShip = new StarShip()


function Start()
{
  
  
  if(IS_LEFT_PRESSED || IS_RIGHT_PRESSED)
  {
    ShipAccelerate.play();
    ShipLowSpeed.play();
    ShipAccelerate.volume = 0
    ShipLowSpeed.volume = 0.1
    gameStarted = true
  }

}

function GameManager()
{
  //this is the game level state
  if(!Wave1 && ScoreNum < 10000)
  {
    num_asteroids +=1
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave1 = true;
  }
  if(!Wave2 && ScoreNum > 20000)
  {
    num_asteroids += 1
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave1 = false
    Wave2 = true;
  }
  if(!Wave3 && ScoreNum > 30000)
  {
    num_asteroids += 1
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave2 = false
    Wave3 = true;
  }
  if(!Wave4 && ScoreNum > 40000)
  {
    num_asteroids += 1
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave3 = false
    Wave4 = true;
  }
  if(!Wave5 && ScoreNum > 50000)
  {
    num_asteroids += 1
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave4 = false
    Wave5 = true;
  }
  if(!Wave6 && ScoreNum > 60000)
  {
    //num_asteroids += 1
    //for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave5 = false
    Wave6 = true;
  }
  if(!Wave7 && ScoreNum > 70000)
  {
    //num_asteroids += 2
    //for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave6 = false
    Wave7 = true;
  }
  if(!Wave8 && ScoreNum > 80000)
  {
   // num_asteroids += 2
   // for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave7 = false
    Wave8 = true;
  }
  if(!Wave9 && ScoreNum > 100000)
  {
    num_asteroids += 2
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave8 = false
    Wave9 = true;
  }
  if(!Wave10 && ScoreNum > 150000)
  {
    num_asteroids += 2
    
    for (let i=0;i<num_asteroids;i++) asteroids.push(new Asteroid())
    Wave9 = false
    Wave10 = true;
  }
  
  
    

  


  if(!gameStarted)
  {
    Start();
  }
  updatescore();
  checkInput();
  checkRotationMovement();
  turnBackround();
  
  //CheckTriggerShot();
  
  
  for (let i=0; i <num_asteroids; i++)
  {
    asteroids[i].moveAsteroidDown()
  }
  for (let i=0; i <num_stars; i++)
  {
    stars[i].moveStar()
  }
  for (let i=0; i <num_Particles; i++)
  {
    Particles[i].moveParticle()
  }
  for (let i=0; i <num_Projectiles; i++)
  {
    projectiles[i].LaunchForward()
  }
  for (let i=0; i <num_Debris; i++)
  {
    debris[i].moveParticle()
  }
  
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
  if(flightSpeed > 0)
  {
    ScoreNum += Math.trunc(flightSpeed)
  }
   //Updates the Html text to display the values in my score and lives variables.
   Scorecount.innerHTML = "Distance:" + " " + ScoreNum
   Lifecount.innerHTML = "Lives:" + " " + LiveNum
 
   //Resets the score and lives when lives run out and display gameover
   if(LiveNum < 0)
   {
     window.alert('You exploded.. Try again?')
     //after gameover alert is clicked, asteroid positions and score/lives are reset.
     for (let i=0; i <num_asteroids; i++)
     {
       asteroids[i].setNotExploded();
       asteroids[i].Posy = 0.1;
     }
     ScoreNum = 0
     LiveNum = 9 
   }
}


setInterval(GameManager, 6)

//creates and element on screen called game area and defines various parameters.
let gamearea = document.createElement('div')
//Makes it so backround elements arent effected by pointer clicks
gamearea.style.pointerEvents = "none";
gamearea.style.position = 'fixed'
gamearea.style.top = '0px'
gamearea.style.left = '0px'
gamearea.style.width = max_x + "px"
gamearea.style.height = max_y + "px"
gamearea.style.border = "1px solid white"

//makes sure this element renders behind everything else by giving it the lowest index
gamearea.style.zIndex = -999
//adds the element to the document
document.body.appendChild(gamearea)
//set the speed at which the asteroid movement function is called.
//A lower number gives quicker smoother movement
//interval = setInterval(moveAsteroidDown,12)






