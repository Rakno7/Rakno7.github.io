//-----------------Bradley Alex Sedig-------------------
const Homebutton = document.getElementById("Home")
const Portfoliobutton = document.getElementById("Portfolio")
const Gamesbutton = document.getElementById("Games")
const Objectivesbutton = document.getElementById("Objectives")
const FlightGbutton = document.getElementById("FlightG")

//this function runs on an interval and checks for onclick events from active buttons and runs the appropriate function
function CheckInput()
{
      Homebutton.onclick = LoadHome
      Portfoliobutton.onclick = LoadPortfolio
      Gamesbutton.onclick = LoadGames
      Objectivesbutton.onclick = LoadObjectives
      FlightGbutton.onclick = LoadFlightSim
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
    window.open("https://rakno7.github.io/Sedig_Website/Sedig_FlightSim/");
    //window.location.href = "https://rakno7.github.io/Sedig_Website/FlightSim/";
}
//set CheckInput fuction be called on an interval
setInterval(CheckInput, 10)






