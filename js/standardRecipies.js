"use strict"

// ESPRESSO DRINKS
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
        milk: milkTypes.WHOLE
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

//BLENDED DRINKS
function coffeeFrapp(drink){
    let recipe = {
        name: "Coffee Frapp",
        assigned: true,
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function mochaFrapp(drink){
    let recipe = {
        name: "Mocha Frapp",
        assigned: true,
        syrups: [
            {
                name: 'Mocha',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function caramelFrapp(drink){
    let recipe = {
        name: "Caramel Frapp",
        assigned: true,
        syrups: [
            {
                name: 'Caramel',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function javachipFrapp(drink){
    let recipe = {
        name: "Java Chip Frapp",
        assigned: true,
        syrups: [
            {
                name: 'Mocha',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: 'Chips',
                count: standardPumps(drink.size)
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function cafeVanillaFrapp(drink){
    let recipe = {
        name: "Cafe Vanilla Frapp",
        assigned: true,
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: 'Vanilla Bean',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function espressoFrapp(drink){
    let recipe = {
        name: "Espresso Frapp",
        assigned: true,
        milk: milkTypes.WHOLE,
        shots: (function(){
            if(drink.size == drinkSizes.VENTI){
                return 2;
            }
            else{
                return 1;
            }
        })(),
        other: [
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ]
    }
    return recipe;
}

function whiteMochaFrapp(drink){
    let recipe = {
        name: "White Mocha Frapp",
        assigned: true,
        syrups: [
            {
                name: 'White Mocha',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Frapp Roast',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Coffee Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function chaiFrapp(drink){
    let recipe = {
        name: "Chai Tea Frapp",
        assigned: true,
        other: [
            {
                name: 'Chai Tea',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function doubleChocolateChipFrapp(drink){
    let recipe = {
        name: "Double Chocolate Chip Frapp",
        assigned: true,
        syrups: [
            {
                name: 'Mocha',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Chips',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function vanillaBeanFrapp(drink){
    let recipe = {
        name: "Vanilla Bean Frapp",
        assigned: true,
        other: [
            {
                name: 'Vanilla Bean',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function whiteMochaCreamFrapp(drink){
    let recipe = {
        name: "White Mocha Frapp",
        assigned: true,
        syrups: [
            {
                name: 'White Mocha',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function strawBerryCreamFrapp(drink){
    let recipe = {
        name: "Strawberries and Cream Frapp",
        assigned: true,
        other: [
            {
                name: "Straw Puree"
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function greenTeaFrapp(drink){
    let recipe = {
        name: "Green Tea Frapp",
        assigned: true,
        syrups: [
            {
                name: 'Classic',
                count: standardPumps(drink.size) - 1
            }
        ],
        other: [
            {
                name: 'Matcha',
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function syrupCreamFrapp(drink){
    let recipe = {
        name: "Syrup Cream Frapp",
        assigned: true,
        other: [
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function oparahChaiFrapp(drink){
    let recipe = {
        name: "Oparah Chai Tea Frapp",
        assigned: true,
        other: [
            {
                name: "Oparah Chai",
                count: standardPumps(drink.size) - 1
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function strawberrySmoothe(drink){
    let recipe = {
        name: "Strawberry Smoothe",
        assigned: true,
        other: [
            {
                name: "Strawberry Puree"
            },
            {
                name: "Protien",
                count: 2
            },
            {
                name: "Banana",
                count: 1
            }
        ],
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function chocolateSmoothe(drink){
    let recipe = {
        name: "chocolate Smoothe",
        assigned: true,
        syrups: [
            {
                name: "Mocha",
                count: 4
            }
        ],
        other: [
            {
                name: "Protien", 
                count: 2
            },
            {
                name: "Banana",
                count: 1
            }
        ],
        milk: milkTypes.WHOLE
    }
    return recipe;
}

function blendedStrawberryLemonade(drink){
    let recipe = {
        name: "Blended Starwberry Lemonade",
        assigned: true,
        syrups: [
            {
                name: "Classic",
                count: standardPumps(drink.size)
            }
        ],
        other: [
            {
                name: "Strawberry Puree"
            },
            {
                name: "Lemonade"
            },
            {
                name: "Cream Syrup Base",
                count: standardPumps(drink.size) - 1
            }
        ]
    }
}

//Teas

function chaiTeaLatte(drink){
    let recipe = {
        name: "Chai Tea Latte",
        assigned: true,
        other: [
            {
                name: "Chai",
                count: standardPumps(drink.size)
            }
        ],
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function oparahChaiTeaLatte(drink){
    let recipe = {
        name: "Oparah Chai Tea Latte",
        assigned: true,
        other: [
            {
                name: "Oparah Chai",
                count: standardPumps(drink.size)
            }
        ],
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function greenTeaLatte(drink){
    let recipe = {
        name: "Green Tea Latte", 
        assigned: true,
        other: [
            {
                name: "Matcha",
                count: standardPumps(drink.size)
            }
        ],
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
}

function blackIcedTea(drink){
    let recipe = {
        name: "Black Iced Tea", 
        assigned: true,
        other: [
            {
                name: "Black Tea"
            },
            {
                name: "Water"
            }
        ]
    }
    return recipe;
}

function blackIcedTeaLemonade(drink){
    let recipe = {
        name: "Black Iced Tea Lemonade", 
        assigned: true,
        other: [
            {
                name: "Black Tea"
            },
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}

function mangoBlackTea(drink){
    let recipe = {
        name: "Mango Black Iced Tea", 
        assigned: true,
        syrup: [
            {
                name: "Mango",
                count: standardPumps(drink.size)
            }
        ],
        other: [
            {
                name: "Black Tea"
            },
            {
                name: "Water"
            }
        ]
    }
    return recipe;
}

function mangoBlackTeaLemonade(drink){
    let recipe = {
        name: "Mango Black Tea Lemonade", 
        assigned: true,
        syrup: [
            {
                name: "Mango",
                count: standardPumps(drink.size)
            }
        ],
        other: [
            {
                name: "Black Tea"
            },
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}

function greenIcedTea(drink){
    let recipe = {
        name: "Green Iced Tea", 
        assigned: true,
        other: [
            {
                name: "Green Tea"
            },
            {
                name: "Water"
            }
        ]
    }
    return recipe;
}

function greenTeaLemonade(drink){
    let recipe = {
        name: "Green Tea Lemonade", 
        assigned: true,
        other: [
            {
                name: "Green Tea"
            },
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}

function peachGreenTea(drink){
    let recipe = {
        name: "Peach Green Tea Lemonade", 
        assigned: true,
        syrups: [
            {
                name: "Peach"
            }
        ],
        other: [
            {
                name: "Green Tea"
            },
            {
                name: "Water"
            }
        ]
    }
    return recipe;
}

function peachGreenTeaLemonade(drink){
    let recipe = {
        name: "Peach Green Tea Lemonade", 
        assigned: true,
        syrups: [
            {
                name: "Peach"
            }
        ],
        other: [
            {
                name: "Green Tea"
            },
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}

function passionIcedTea(drink){
    let recipe = {
        name: "Passion Iced Tea", 
        assigned: true,
        other: [
            {
                name: "Passion Tea"
            },
            {
                name: "Water"
            }
        ]
    }
    return recipe;
}

function passionIcedTeaLemonade(drink){
    let recipe = {
        name: "Passion Tea Lemonade", 
        assigned: true,
        other: [
            {
                name: "Passion Tea"
            },
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}

function customIcedTea(drink){
    let recipe = {
        name: "Custom Iced Tea",
        assigned: true
    }
    return recipe;
}

function customIcedTeaLemonade(drink){
    let recipe = {
        name: "Custom Iced Tea Lemonade",
        assigned: true,
        other: [
            {
                name: "Lemonade"
            }
        ]
    }
    return recipe;
}