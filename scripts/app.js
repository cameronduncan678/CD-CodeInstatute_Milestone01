var castle = document.getElementById("Castle-Locations");
var forest = document.getElementById("Forest-locations");
var river = document.getElementById("River-locations");

var space = document.getElementById("white-space");

var castleButton = document.getElementById("castleButton");
var forestButton = document.getElementById("forestButton");
var riverButton = document.getElementById("riverButton");

//Trek page functions -------------------------------//
function castle_Loc_Page()
{
    if(castle.style.display === "none")
    {
        if(forest.style.display === "block")
        {
            forest.style.display = "none";
            forestButton.classList.remove('active-trek');
            forestButton.classList.add('inactive-trek');
        }
        if(river.style.display === "block")
        {
            river.style.display = "none";
            riverButton.classList.remove('active-trek');
            riverButton.classList.add('inactive-trek');
        }
        
        castle.style.display = "block";
        space.style.display = "none";
        castleButton.classList.remove('inactive-trek');
        castleButton.classList.add('active-trek');
    }
    else
    {
        castle.style.display = "none";
        space.style.display = "block";
        castleButton.classList.remove('active-trek');
        castleButton.classList.add('inactive-trek');
    }
}

function forest_Loc_Page()
{
    
    if(forest.style.display === "none")
    {
        if(castle.style.display === "block")
        {
            castle.style.display = "none";
            castleButton.classList.remove('active-trek');
            castleButton.classList.add('inactive-trek');
        }
        if(river.style.display === "block")
        {
            river.style.display = "none";
            riverButton.classList.remove('active-trek');
            riverButton.classList.add('inactive-trek');
        }
        forest.style.display = "block";
        space.style.display = "none";
        forestButton.classList.remove('inactive-trek');
        forestButton.classList.add('active-trek');
    }
    else
    {
        forest.style.display = "none";
        space.style.display = "block";
        forestButton.classList.remove('active-trek');
        forestButton.classList.add('inactive-trek');
    }
}

function river_Loc_Page()
{ 
    if(river.style.display === "none")
    {
        if(castle.style.display === "block")
        {
            castle.style.display = "none";
            castleButton.classList.remove('active-trek');
            castleButton.classList.add('inactive-trek');
        }
        if(forest.style.display === "block")
        {
            forest.style.display = "none";
            forestButton.classList.remove('active-trek');
            forestButton.classList.add('inactive-trek');
        }
        river.style.display = "block";
        space.style.display = "none";
        riverButton.classList.remove('inactive-trek');
        riverButton.classList.add('active-trek');
    }
    else
    {
        river.style.display = "none";
        space.style.display = "block";
        riverButton.classList.remove('active-trek');
        riverButton.classList.add('inactive-trek');
    }
}


//Booking page functions -------------------------------//

var bk_castle = document.getElementById("castleBook");
var bk_forest = document.getElementById("forestBook");
var bk_river = document.getElementById("riverBook");

function bookCastle()
{
    if(bk_castle.style.display === "none")
    {
        if(bk_forest.style.display === "inline-block")
        {
            bk_forest.style.display = "none";
        }
        if(bk_river.style.display === "inline-block")
        {
            bk_river.style.display = "none";
        }
        bk_castle.style.display = "inline-block";
    }
    else
    {
        bk_castle.style.display = "none";
    }
}

function bookForest()
{
    
    if(bk_forest.style.display === "none")
    {
        if(bk_castle.style.display === "inline-block")
        {
            bk_castle.style.display = "none";
        }
        if(bk_river.style.display === "inline-block")
        {
            bk_river.style.display = "none";
        }
        bk_forest.style.display = "inline-block";
    }
    else
    {
        bk_forest.style.display = "none";
    }
}

function bookRiver()
{
    
    if(bk_river.style.display === "none")
    {
        if(bk_castle.style.display === "inline-block")
        {
            bk_castle.style.display = "none";
        }
        if(bk_forest.style.display === "inline-block")
        {
            bk_forest.style.display = "none";
        }
        bk_river.style.display = "inline-block";
    }
    else
    {
        bk_river.style.display = "none";
    }
}

