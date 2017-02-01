function americano (drink) { 
    let recipe = {
        name: "Americano",
        assigned: true,
        shots: standardShots(drink.size, 1),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

 function espresso (drink) { 
    let recipe = {
        name: "Espresso",
        assigned: true
    }
    return recipe;
 }

function espressoMacchiato (drink) { 
    let recipe = {
        name: "Espresso Macchiato",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

 function espressoConPanna (drink) { 
    let recipe = {
        name: "Espresso Macchiato",
        assigned: true,
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 } 
 
 function starbucksDoubleShotOnIce (drink) { 
    let recipe = {
        name: "Starbucks Double Shot On Ice",
        assigned: true,
        shots: shotsSBDS(),
        milk: milkTypes.TWOPERCENT
    }
    function shotsSBDS(){
        switch (drink.size){
            case drinkSizes.TALL:
                return 2;
            case drinkSizes.GRANDE:
                return 3;
            case drinkSizes.VENTI:
                return 5;
            default:
                return 0;
        }
    }
    return recipe;
 }

function latte (drink) { 
    let recipe = {
        name: "Latte",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

function cinnamonDolceLatte (drink) { 
    let recipe = {
        name: "Cinnamon Dolce Latte",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    addSyrup(drink, "Cinnamon Dolce")
    return recipe;
 }

function skinnyLatte (drink) { 
    let recipe = {
        name: "Skinny Syrup Latte",
        assigned: true,
        syrups: [],
        shots: standardShots(drink.size),
        milk: milkTypes.NONFAT
    }
    return recipe;
 }

function whiteMocha(drink){
    let recipe = {
        name: "White Mocha",
        assigned: true,
        syrups: [
            {
                name: 'WHITEMOCHA',
                count: standardPumps(drink.size)
            }
        ],
        shots: standardShots(drink.size)
    }
    return recipe;
}