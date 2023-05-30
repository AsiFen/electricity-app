// return the available units 
//return the units bought 
//retrun the total amount spent
// create variable to keep track of total amount spent
//create variable to keep track of total units bought
//top-up electricity when amount is 10, 20 , 50 with 7, 14, 35 respectively
//if an advance is taken return true 
//advance repayments take off from the the top up 
//amount owed - amount
// an advance must be taken once at a time
// is appliance  is selected their corresponding price must be dedudcted from the units availables


function Electricity() {
    var unitsAvailable = 0
    var advanceTook = ''
    var amountSpent = 0
    var unitsBought = 0
    var amountOwed = 0
    // do we want to go with this or array? 
    // let appliances = ['stove', 'kettle', 'TV', 'fridge']

    function topUpElectricity(amount) {
        if (advanceTook == true) {
            if (amountOwed == 0) {
                advanceTook = false
            }

            if (amount > amountOwed) {
                amount = amount - amountOwed
                amountOwed = amountOwed - amount

                advanceTook = false

            }
            if (amountOwed > amount) {
                amountOwed = amountOwed - amount
                amount = 0   // unitsAvailable += 0
                advanceTook = true

            }
          
        }
        if (amount == 10) {
            unitsAvailable += 7
            amountSpent += 10
            unitsBought += 7
        }
        if (amount == 20) {
            unitsAvailable += 14
            amountSpent += 20
            unitsBought += 14

        }
        if (amount == 50) {
            unitsAvailable += 35
            amountSpent += 50
            unitsBought += 35

        }
        if (!advanceTook) {
            if (amount == 'advance') {
                // if (advanceTook[amount] === undefined) {
                unitsAvailable += 21
                amountOwed = 30
                advanceTook = true
            }
        }
    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if (appliance == 'TV') {
            if (unitsAvailable > 3) {
                unitsAvailable = unitsAvailable - 3
                return true
            }
        }

        if (appliance == 'Fridge') {
            if (unitsAvailable > 13) {
                unitsAvailable = unitsAvailable - 13
                return true
            }
        }

        if (appliance == 'Kettle') {
            if (unitsAvailable > 5) {
                unitsAvailable = unitsAvailable - 5
                return true
            }
        }
        if (appliance == 'Stove') {
            if (unitsAvailable > 10) {
                unitsAvailable - 10
                return true
            }
        }

        return false

    }

    function advanceTaken() {
        return advanceTook

    }
    function totalAmountSpent() {
        return amountSpent
    }

    function totalUnitsBought() {
        return unitsBought

    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}