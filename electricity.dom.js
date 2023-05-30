// DOM element(s) references
var topupNowBtn = document.querySelector('.topupNow')
var unitsAvailableElem = document.querySelector('.unitsAvailable')
var totalUnits = document.querySelector('.totalUnits')
var totalAmount = document.querySelector('.totalAmount')
var advanceTaken = document.querySelector('.advanceTaken')
var useNowBtn = document.querySelector('.useNow')


if (localStorage['unitsAvailable']) {
    var getUnits = localStorage['unitsAvailable']
}

if (localStorage['unitsBought']) {
    var getUnitsBought = localStorage['unitsBought']
}

if (localStorage['totalAmountSpent']) {
    var getTotalAmount = localStorage['totalAmountSpent']
}

if (localStorage['advanceTaken']) {
    var getAdvanceTaken = localStorage['advanceTaken']
}



// Factory Function instance 
const electricity = Electricity();
topupNowBtn.addEventListener('click', () => {
    var checkedUsage = document.querySelector('input[name="buyElectricity"]:checked')
    if (checkedUsage) {
        var amount = checkedUsage.value
        electricity.topUpElectricity(amount)

        localStorage['unitsAvailable'] = electricity.getUnitsAvailable()
        unitsAvailableElem.innerHTML = electricity.getUnitsAvailable()

        localStorage['unitsBought'] = electricity.totalUnitsBought()
        totalUnits.innerHTML = electricity.totalUnitsBought()

        localStorage['totalAmountSpent'] = electricity.totalAmountSpent()
        totalAmount.innerHTML = electricity.totalAmountSpent()

        if (electricity.advanceTaken()) {
            setTimeout(() => {
                advanceTaken.classList.remove('hidden')
            }, 2000);
            advanceTaken.classList.add('hidden')

            advanceTaken.innerHTML = electricity.advanceTaken()
            localStorage['advanceTaken'] = electricity.advanceTaken()
        }
    }

})
useNowBtn.addEventListener('click', () => {
    var radioTopUp = document.querySelector('.input[name="useElectricity"]:checked')
    if (radioTopUp) {
        var appliance = radioTopUp.value

        electricity.useAppliance(appliance)

        localStorage['unitsAvailable'] = electricity.getUnitsAvailable()
        unitsAvailableElem.innerHTML = electricity.getUnitsAvailable()

        localStorage['unitsBought'] = electricity.totalUnitsBought()
        totalUnits.innerHTML = electricity.totalUnitsBought()

        localStorage['totalAmountSpent'] = electricity.totalAmountSpent()
        totalAmount.innerHTML = electricity.totalAmountSpent()

        localStorage['advanceTaken'] = electricity.advanceTaken()
        advanceTaken.innerHTML = electricity.advanceTaken()
    }


})

// DOM events here 

if (getUnits) {
    unitsAvailableElem.innerHTML = getUnits
}
if (getTotalAmount) {
    totalAmount.innerHTML = getTotalAmount
}
if (getUnitsBought) {
    totalUnits.innerHTML = getUnitsBought
}
if (getAdvanceTaken) {
    advanceTaken.innerHTML = getAdvanceTaken
}