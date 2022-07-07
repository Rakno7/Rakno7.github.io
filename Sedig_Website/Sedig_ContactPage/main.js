//-----------------Bradley Alex Sedig-------------------
const Homebutton = document.getElementById("Home")
const Portfoliobutton = document.getElementById("Portfolio")
const Gamesbutton = document.getElementById("Games")
const Objectivesbutton = document.getElementById("Objectives")
const Contactbutton = document.getElementById("Contact")
const FlightGbutton = document.getElementById("FlightG")

//this function runs on an interval and checks for onclick events from active buttons and runs the appropriate function

      Homebutton.onclick = LoadHome
      Portfoliobutton.onclick = LoadPortfolio
      Gamesbutton.onclick = LoadGames
      Objectivesbutton.onclick = LoadObjectives
      Contactbutton.onclick = LoadContact
      FlightGbutton.onclick = LoadFlightSim

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
function LoadContact()
{
    window.location.href = "https://rakno7.github.io/Sedig_Website/Sedig_ContactPage/";
}
function LoadFlightSim()
{
    window.open("https://rakno7.github.io/Sedig_Website/Sedig_flightSim/");
    //window.location.href = "https://rakno7.github.io/Sedig_Website/FlightSim/";
}







