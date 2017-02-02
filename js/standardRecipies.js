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
        name: "Espresso Con Panna",
        assigned: true
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
        milk: milkTypes.TWOPERCENT,
        syrups: [
            {
                name: "Cinnamon Dolce",
                count: standardPumps(drink.size)
            }
        ]
    }
    return recipe;
 }

 function cappuccino (drink) { 
    let recipe = {
        name: "Cappuccino",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

 function flatWhite (drink) { 
    let recipe = {
        name: "Flat White",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.WHOLEMILK
    }
    function shotsSBDS(){
        switch (drink.size){
            case drinkSizes.SHORT:
                return 1;
            case drinkSizes.TALL:
                return 2;
            case drinkSizes.GRANDE:
                return 3;
            case drinkSizes.VENTI:
                return 3;
        }
    }
    return recipe;
 } 

  function latteMacchiato (drink) { 
    let recipe = {
        name: "Latte Macchiato",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

function skinnyLatte (drink) { 
    let recipe = {
        name: "Skinny Syrup Latte",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.NONFAT
    }
    return recipe;
 }

 function skinnyCinnamonDolceLatte (drink) { 
    let recipe = {
        name: "Skinny Cinnamon Dolce Latte",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT,
        syrups: [
            {
                name: "SF Cinnamon Dolce",
                count: standardPumps(drink.size)
            }
        ]
    }
    return recipe;
 }

 function caramelMacchiato (drink) { 
    let recipe = {
        name: "Caramel Macchiato",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT,
        syrups: [
            {
                name: "Vanilla",
                count: standardPumps(drink.size, -1)
            }
        ]
    }
    return recipe;
 }

 function skinnyCaramelMacchiato (drink) { 
    let recipe = {
        name: "Skinny Caramel Macchiato",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.NONFAT,
        syrups: [
            {
                name: "SF Vanilla",
                count: standardPumps(drink.size, -1)
            }
        ]
    }
    return recipe;
 }

  function skinnyCaramelMacchiato (drink) { 
    let recipe = {
        name: "Skinny Caramel Macchiato",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

function mocha(drink){
    let recipe = {
        name: "Mocha",
        assigned: true,
        syrups: [
            {
                name: 'Mocha',
                count: standardPumps(drink.size)
            }
        ],
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function skinnyMocha(drink){
    let recipe = {
        name: "Skinny Mocha",
        assigned: true,
        syrups: [
            {
                name: 'Skinny Mocha',
                count: standardPumps(drink.size)
            }
        ],
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
                name: 'White Mocha',
                count: standardPumps(drink.size)
            }
        ],
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function pumpkinSpiceLatte(drink){
    let recipe = {
        name: "Pumpkin Spice Latte",
        assigned: true,
        syrups: [
            {
                name: 'Pumpkin Spice',
                count: standardPumps(drink.size)
            }
        ],
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}