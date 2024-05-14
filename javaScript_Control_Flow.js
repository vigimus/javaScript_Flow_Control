//Ett påstående: ? förklaring 1, förklaring 2

function arAnvandareTillaten(bool) {
    return bool;
}

// Ett snyggt sätt att göra flowcontrol där vi både får med
// vad som händer om boolean är värdet sant eller falskt
var svar = arAnvandareTillaten(true) ? "Välkommen in" : "Nekad åtkomst";

//Om automatiseratSvar har värdet sant så kommer den spotta ut ---> "1234-5678"
//Om automatiseratSvar har värdet falskt så kommer den spotta ut ---> "inte tillgängligt"
// Det går att göra precis samma sak med if/else sats och return men det skulle bli massa extra rader kod
var automatiseratSvar = "Ditt kontonummer # är " + ( arAnvandareTillaten(false) ? "1234-5678" : "inte tillgängligt");


//Switch påståenden
//Switch påståenden är ett snyggt sätt att göra samma påståenden samtidigt kring något
//Återigen sparar dig massa rader och du slipper if/else på if/else på if/else sats
function flyttaKommandot(direction) {
    var vadHander;
    Switch (direction) {
        case "forward":
        vadHander = "Du stötte på ett monster";
        //break betyder att man ska slå sig loss från switch påståendet
        //måste alltid komma efter påståendet annars blir det undefined
        break;
        case "back":
        vadHander = "Du kom hem med nöd och neppe";
        break;
        case "right":
        vadHander = "Du hittade en flod";
        break;
        case "left":
        vadHander = "Du stötte på ett troll";
        break;
        //default är vad värdet kommer vara om det inte matchar något värde ovanför
    default:
        vadHander = "Välj snälla vilket håll du går åt!";
    }
    return vadHander;
}