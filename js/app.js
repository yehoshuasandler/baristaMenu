document.addEventListener('DOMContentLoaded', function(){

    let menu = document.getElementById('app');

    menu.addEventListener('click', function(e){

        if(e.target && e.target.nodeName === 'BUTTON'){
            if(e.target.getAttribute('data-name')){

                let dataName = e.target.getAttribute('data-name');
                let dataValue = "";

                if(dataName){
                    dataValue = e.target.getAttribute('data-value');
                }

                switch(dataName){
                    case "ICED":
                        currentDrink = changeIced(currentDrink);
                        break;
                    case "CAFFEINE":
                        currentDrink = changeCaffeine(currentDrink, dataValue);
                        break;
                    case "SIZE":
                        currentDrink = changeSize(currentDrink, dataValue);
                        break;
                    case "SHOTTYPE":
                        currentDrink = changeShotType(currentDrink,dataValue);
                        break;
                    case "SHOTCOUNT":
                        currentDrink = setShotCount(currentDrink,dataValue);
                        break;
                    case "RECIPE":
                        currentDrink = addRecipe(currentDrink, dataValue);
                        break;
                    case "SYRUP":
                        Object.assign(currentDrink.recipe, addSyrup(currentDrink.recipe, dataValue, currentDrink.size));
                        break;
                    case "CONTROL":
                        changeMenu(dataValue);
                        break
                }
                console.log(currentDrink);
                order.set(currentDrink);
            }
        }
    });

    function changeMenu(menu){
        switch(menu){
            case "OPTIONS":
                drinkOptionsMenu.style.display = "block";
                recipeMenu.style.display = "none";
                syrupMenu.style.display = "none";
                brewedMenu.style.display = "none";
                blendedMenu.style.display = "none";v1`  124fy`
                break;
            case "ESPRESSO":
                drinkOptionsMenu.style.display = "none";
                recipeMenu.style.display = "block";
                brewedMenu.style.display = "none";
                syrupMenu.style.display = "none";
                blendedMenu.style.display = "none";
                break;
            case "SYRUP":
                drinkOptionsMenu.style.display = "none";
                recipeMenu.style.display = "none";
                brewedMenu.style.display = "none";
                syrupMenu.style.display = "block";
                blendedMenu.style.display = "none";
                break;
            case "BREWED":
                drinkOptionsMenu.style.display = "none";
                recipeMenu.style.display = "none";
                syrupMenu.style.display = "none";
                brewedMenu.style.display = "block";
                blendedMenu.style.display = "none";
                break;
            case "BLENDED":
                drinkOptionsMenu.style.display = "none";
                recipeMenu.style.display = "none";
                syrupMenu.style.display = "none";
                blendedMenu.style.display = "block";
                brewedMenu.style.display = "none";
                break;
            
        }
    }
    let drinkOptionsMenu = document.getElementById("options-menu");
    let recipeMenu = document.getElementById("espresso-menu");
    let syrupMenu = document.getElementById("syrup-menu");
    let brewedMenu = document.getElementById("brewed-menu");
    let blendedMenu = document.getElementById("blended-menu");


});

let ERR = {
    set: function(message){
        window.alert(message);
    }
}


