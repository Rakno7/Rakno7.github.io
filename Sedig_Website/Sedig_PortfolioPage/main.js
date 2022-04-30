//-----------------Bradley Alex Sedig-------------------
// image data
let D0_src = "Portfolio/1 24 21 compositions.png"
let D1_src = "Portfolio/1 30 21 compositions.png"
let D2_src = "Portfolio/1 12 20 lasso landscapes.png"
let D3_src = "Portfolio/6 27 19 thumbnail value.png"
let D4_src = "Portfolio/2 9 22 Age of reason concept.png"
let D5_src = "Portfolio/3 25 21 landfill bookshop.png"
let D6_src = "Portfolio/city.png"
let D7_src = "Portfolio/7 18 21 Slime Dungeon character and enemy concepts.png"
let D8_src = "Portfolio/3 24 19 imaginary.png"
let D9_src = "Portfolio/10 29 21 Slime Dungeon King Concept.png"

let P0_src = "Portfolio/Pixel/1 26 20 cave lit entrance.png"
let P1_src = "Portfolio/Pixel/cave lit lower level.png"
let P2_src = "Portfolio/Pixel/1 26 20 town main street underground.png"
let P3_src = "Portfolio/Pixel/Angled top down tileset.png"
let P4_src = "Portfolio/Pixel/Dungeon1.gif"
let P5_src = "Portfolio/Pixel/4 27 21 Pixel character sketches.png"

let P6_src = "Portfolio/Pixel/9 24 21 SlimeDungeon Character Art.png"
let P7_src = "Portfolio/Pixel/Slime spritesheet.png"
let P8_src = "Portfolio/Pixel/Object Sprites.png"
let P9_src = "Portfolio/Pixel/1 20 20 red sun desert rocks.png"

let Art0_src = "Portfolio/Painting/6 14 20 Robert by the pool.png"
let Art1_src = "Portfolio/Painting/9 23 19 Self Portrait.png"
let Art2_src = "Portfolio/Painting/10 4 20 mop station.png"
let Art3_src = "Portfolio/Painting/9 20 20 three self portraits.png"
let Art4_src = "Portfolio/Painting/11 30 21 bed.png"
let Art5_src = "Portfolio/Painting/3 26 20 hand portrait-Recovered.png"
let Art6_src = "Portfolio/Painting/4 4 21 streetview bus windsow.png"
let Art7_src = "Portfolio/Painting/6 22 20 random streetviews.png"
let Art8_src = "Portfolio/Painting/7 26 20 random streetviews.png"
let Art9_src = "Portfolio/Painting/9 13 20 totoro from life 2.png"






const Homebutton = document.getElementById("Home")
const Portfoliobutton = document.getElementById("Portfolio")
const Gamesbutton = document.getElementById("Games")
const Objectivesbutton = document.getElementById("Objectives")
const FlightGbutton = document.getElementById("FlightG")


const Startbutton = document.getElementById("StartButton")
const Stopbutton = document.getElementById("StopButton")
const DigitalArtbutton = document.getElementById("DigitalArt")
const PixelArtbutton = document.getElementById("PixelArt")
const Animationbutton = document.getElementById("Animations")
const Switch = document.getElementById("SwitchColor")

const PortfolioRow1 = document.getElementById("Row1")
const PortfolioRow2 = document.getElementById("Row2")

//bools to set the buttons state
//let StartActive = true;
//let StopActive = false;

//when you start the program the start button should be active and the stop button inactive and invisable.
//Stopbutton.style.opacity = 0


var Img0 = document.createElement('img') 
var Img1 = document.createElement('img')
var Img2 = document.createElement('img')
var Img3 = document.createElement('img')
var Img4 = document.createElement('img')
var Img5 = document.createElement('img') 
var Img6 = document.createElement('img')
var Img7 = document.createElement('img')
var Img8 = document.createElement('img')
var Img9 = document.createElement('img')

Img0.src = D0_src; PortfolioRow1.appendChild(Img0);

Img1.src = D1_src; PortfolioRow1.appendChild(Img1);

Img2.src = D2_src; PortfolioRow1.appendChild(Img2);

Img3.src = D3_src; PortfolioRow1.appendChild(Img3);

Img4.src = D4_src; PortfolioRow1.appendChild(Img4);

Img5.src = D5_src; PortfolioRow2.appendChild(Img5);

Img6.src = D6_src; PortfolioRow2.appendChild(Img6);

Img7.src = D7_src; PortfolioRow2.appendChild(Img7);

Img8.src = D8_src; PortfolioRow2.appendChild(Img8);

Img9.src = D9_src; PortfolioRow2.appendChild(Img9);
//PortfolioWindow.appendChild(document.createElement("br"))

//this function is called when the start button is clicked
function start()
{
    //when you click this button it fades away and becomes unclickable while the oposite button becomes clickable and visable
    Startbutton.style.opacity = 0
    Stopbutton.style.opacity = 1 
    Switch.style.backgroundColor = "rgb(204, 236, 255)"
    StopActive = true
    StartActive = false
}
//this function is called when the stop button is clicked
function stop()
{
    //when you click this button it fades away and becomes unclickable while the oposite button becomes clickable and visable
    Startbutton.style.opacity = 1
    Stopbutton.style.opacity = 0
    Switch.style.backgroundColor = "rgb(221, 221, 221, 0.774)"
    StartActive = true
    StopActive = false
}
//this function runs on an interval and checks for onclick events from active buttons and runs the appropriate function

      Homebutton.onclick = LoadHome
      Portfoliobutton.onclick = LoadPortfolio
      Gamesbutton.onclick = LoadGames
      Objectivesbutton.onclick = LoadObjectives
      FlightGbutton.onclick = LoadFlightSim
      DigitalArtbutton.onclick = displayDigital
      PixelArtbutton.onclick = displayPixel
      Animationbutton.onclick = displayPainting 
    //AutoScroll
   //if(StartActive)
   //{
   //Startbutton.onclick = start
   //}
   //if(StopActive)
   //{
   //Stopbutton.onclick = stop
   //}

function LoadHome()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/";
}
function LoadPortfolio()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/Sedig_PortfolioPage/";
}
function LoadGames()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/Sedig_GamesPage/";
}
function LoadObjectives()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/Sedig_ObjectivesPage/";
}
function LoadFlightSim()
{
    window.open("https://rakno7.github.io/Sedig_Website/Sedig_flightSim/");
    //window.location.href = "https://rakno7.github.io/Sedig_Website/FlightSim/";
}

function displayDigital()
{
    Img0.src = D0_src;
    Img1.src = D1_src;
    Img2.src = D2_src;
    Img3.src = D3_src;
    Img4.src = D4_src;
    Img5.src = D5_src;
    Img6.src = D6_src;
    Img7.src = D7_src;
    Img8.src = D8_src;
    Img9.src = D9_src;
}
function displayPixel()
{
    Img0.src = P0_src;
    Img1.src = P1_src;
    Img2.src = P2_src;
    Img3.src = P3_src;
    Img4.src = P4_src;
    Img5.src = P5_src;
    Img6.src = P6_src;
    Img7.src = P7_src;
    Img8.src = P8_src;
    Img9.src = P9_src;
}
function displayPainting()
{
    Img0.src = Art0_src;
    Img1.src = Art1_src;
    Img2.src = Art2_src;
    Img3.src = Art3_src;
    Img4.src = Art4_src;
    Img5.src = Art5_src;
    Img6.src = Art6_src;
    Img7.src = Art7_src;
    Img8.src = Art8_src;
    Img9.src = Art9_src;
}

//set CheckInput fuction be called on an interval
//setInterval(CheckInput, 10)






