//-----------------Bradley Alex Sedig-------------------
const Homebutton = document.getElementById("Home")
const Portfoliobutton = document.getElementById("Portfolio")
const Gamesbutton = document.getElementById("Games")
const Objectivesbutton = document.getElementById("Objectives")
const FlightGbutton = document.getElementById("FlightG")
const Contactbutton = document.getElementById("Contact")

const Backbutton = document.getElementById("Back")
const ForwardButton = document.getElementById("Forward")
 Contactbutton.onclick = LoadContact

const SubcityGifSpace = document.getElementById("SubGif")
const SubcityGifs = ["Survival1.gif","Survival2.gif","Survival3.gif", "Survival4.gif","Survival5.gif"]

let SubGifIndex = 2;
//let Subcity0_src = "Survival1.gif"
//let Subcity1_src = "Survival2.gif"
//let Subcity2_src = "Survival3.gif"
//let Subcity3_src = "Survival4.gif"
//let Subcity4_src = "Survival5.gif"


//this function runs on an interval and checks for onclick events from active buttons and runs the appropriate function
      Contactbutton.onclick = LoadContact
      Homebutton.onclick = LoadHome
      Portfoliobutton.onclick = LoadPortfolio
      Gamesbutton.onclick = LoadGames
      Objectivesbutton.onclick = LoadObjectives
      FlightGbutton.onclick = LoadFlightSim
      Backbutton.onclick = ImgBck
      ForwardButton.onclick = ImgFwd

function ImgFwd()
{
    if(SubGifIndex < 4)
    {
        SubGifIndex ++;
    }

    if(SubGifIndex == 4)
    {
        SubGifIndex = 0;
    }
    
   SubcityGifSpace.src = SubcityGifs[SubGifIndex]
}
function ImgBck()
{
    if(SubGifIndex > 0)
    {
        SubGifIndex --;
    }

    if(SubGifIndex == 0)
    {
        SubGifIndex = 4;
    }
    
   SubcityGifSpace.src = SubcityGifs[SubGifIndex]
}
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
function LoadContact()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/Sedig_ContactPage/";
}
//set CheckInput fuction be called on an interval






