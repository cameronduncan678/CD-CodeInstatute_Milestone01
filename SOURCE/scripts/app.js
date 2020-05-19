var castle = document.getElementById("Castle-Locations");
var forest = document.getElementById("Forest-locations");
var river = document.getElementById("River-locations");


//Trek page functions -------------------------------//
function castle_Loc_Page()
{
    if(castle.style.display === "none")
    {
        if(forest.style.display === "block")
        {
            forest.style.display = "none";
        }
        if(river.style.display === "block")
        {
            river.style.display = "none";
        }
        castle.style.display = "block";
    }
    else
    {
        castle.style.display = "none";
    }
}

function forest_Loc_Page()
{
    
    if(forest.style.display === "none")
    {
        if(castle.style.display === "block")
        {
            castle.style.display = "none";
        }
        if(river.style.display === "block")
        {
            river.style.display = "none";
        }
        forest.style.display = "block";
    }
    else
    {
        forest.style.display = "none";
    }
}

function river_Loc_Page()
{
    
    if(river.style.display === "none")
    {
        if(castle.style.display === "block")
        {
            castle.style.display = "none";
        }
        if(forest.style.display === "block")
        {
            forest.style.display = "none";
        }
        river.style.display = "block";
    }
    else
    {
        river.style.display = "none";
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


function treksPage_castle()
{
    document.location = "Treks.html";
    
    document.getElementById("Castle-Locations").style.display = "block-inline";
    
}