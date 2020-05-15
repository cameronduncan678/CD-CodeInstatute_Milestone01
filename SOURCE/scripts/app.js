var castle = document.getElementById("Castle-Locations");
var forest = document.getElementById("Forest-locations");
var river = document.getElementById("River-locations");

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