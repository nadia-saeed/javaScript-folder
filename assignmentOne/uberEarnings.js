// Function # 01: Calculates the Total Earnings of the Uber driver for the day.
function calculateTotalEarnings(faresOne, earnRate) {
    let earnings = 0;
    for (let i = 0; i < faresOne.length; i++) {
        earnings = earnings + faresOne[i];
    }
    earnings = ((earnRate / 100) * earnings);
    return earnings;
}

// Function # 02: Calculates the total fuel cost for the day.
function calculateFuelCost(faresTwo, rate) {
    let cost = 0;
    for (let i = 0; i < faresTwo.length; i++) {
        cost = cost + faresTwo[i];
    }
    cost = ((rate / 100) * cost);
    return (cost);
}

// Function # 03: Calculates Net Earnings of the Uber driver for the day.
function calculateNetEarnings(faresThree, newRate) {
    let netEarn = 0;
    for (let i = 0; i < faresThree.length; i++) {
        netEarn = netEarn + faresThree[i];
    }
    netEarn = ((newRate / 100) * netEarn);
    return (netEarn);
}

// Function # 04: Calculates average fare amount of the day.
function calculateAverage(faresFour) {
    let average = 0;
    for (let i = 0; i < faresFour.length; i++) {
        average = average + faresFour[i];
    }
    average = Math.round(average / faresFour.length);
    return (average);
}

// Function # 05: Calculates the highest fare amount of the Day.
function highestFare(faresFive) {
    let high = 0;
    for (let i = 0; i < faresFive.length; i++) {
        if (faresFive[i] > high) {
            high = faresFive[i];
        }}
    return (high);
}

// Function # 06: Displays the sorted array; fares in an ascending order.
function sortedAscend(faresSix) {
    let newSix = [];
    for (let i = 0; i < faresSix.length; i++) {
        newSix[i] = faresSix[i];
    }
    for (let i = 0; i < newSix.length; i++) {
        for (let j = 0; j < newSix.length; j++) {
            if (newSix[j] > newSix[j + 1]) {
                let tempSix = newSix[j];
                newSix[j] = newSix[j + 1];
                newSix[j + 1] = tempSix;
            }}}
    return (newSix);
}

// Function # 07: Calculates the total number of miles driven in a day.
function totalMiles(faresSeven, costMile) {
    let tempSeven = 0;
    for (let i = 0; i < faresSeven.length; i++) {
        tempSeven = tempSeven + faresSeven[i];
    }
    tempSeven = (tempSeven / costMile);
    return (tempSeven);
}

// Function # 08: Displays the fares above a certain threshold.
function filtered(faresEight, thresh) {
    let filter = [];
    for (let i = 0; i < faresEight.length; i++) {
        if (faresEight[i] > thresh) {
            filter[filter.length] = faresEight[i];
        }}
    return (filter);
}

// Function # 09: Displays an array without any duplicate fare entries.
function dupRemoved(faresNine) {
    let dup = [];
    for (let i = 0; i < faresNine.length; i++) {
        let duplicate = false;
        for (let j = 0; j < dup.length; j++) {
            if (faresNine[i] === dup[j]) {
                duplicate = true;
                break;
            }}
     if (duplicate == false) {
            dup[dup.length] = faresNine[i];
        }}
    return dup
}

// Function # 10: Displays the day's fare collection in reverse order.
function revFare(faresTen) {
    let rev = [];
    for (let i = faresTen.length - 1; i >= 0; i--) {
        rev[rev.length] = faresTen[i];
    }
    return (rev);
}

// Function # 11: Displays the diff. b/w consecutive fare amounts. Also displays the highest fare difference.
function consDiffFares(faresEleven) {
    let diff = [];
    let high = 0;
    for (let i = 0; i < faresEleven.length - 1; i++) {
        diff[diff.length] = (faresEleven[i + 1] - faresEleven[i])
    }
    for (let j = 0; j < diff.length; j++) {
        if ((high) < diff[j]) {
            high = diff[j];
        }}
    return (`Difference of consecutive fares was [${diff}] with highest difference as ${high}`);
}

// Data:
    let RidesFaresEarned = [30, 100, 30, 40, 100, 40, 60];
    let earningsRate = 50;
    let fuelRate = 20;
    let netRate = earningsRate - fuelRate;
    let costPerMile = 2;
    let threshold = 50;

// Call the Functions:
    let caseOne = calculateTotalEarnings(RidesFaresEarned, earningsRate);
    let caseTwo = calculateFuelCost(RidesFaresEarned, fuelRate);
    let caseThree = calculateNetEarnings(RidesFaresEarned, netRate);
    let caseFour = calculateAverage(RidesFaresEarned);
    let caseFive = highestFare(RidesFaresEarned);
    let caseSix = sortedAscend(RidesFaresEarned);
    let caseSeven = totalMiles(RidesFaresEarned, costPerMile);
    let caseEight = filtered(RidesFaresEarned, threshold);
    let caseNine = dupRemoved(RidesFaresEarned);
    let caseTen = revFare(RidesFaresEarned);
    let caseEleven = consDiffFares(RidesFaresEarned);

// Call the Statements:
console.log(`Uber Driver's Daily Earnings Analysis:

Gross Earnings Overview:
Today's comprehensive earnings report showcases the diligent efforts of our Uber driver. The journey started with a series of fares: [${RidesFaresEarned}], accumulating to a total gross revenue of the driver of Rs.${caseOne}.

Net Earnings Insight:
After accounting for the fuel expenses amounting to Rs.${caseTwo}, the net take-home amount is calculated to be Rs.${caseThree}, reflecting the actual profit for the day's endeavors.

Distance and Efficiency Metrics:
The driver's commitment is evident from the total distance covered, an impressive ${caseSeven} miles. This was achieved with an average earning per trip of Rs.${caseFour}, and the day's most lucrative ride brought in Rs.${caseFive}.

Fare Analysis:
A closer inspection of the fare data reveals a well-ascending ordered sequence of collected fares: [${caseSix}], which, when refined to exclude any repetitions, presents us with a unique fare collection of [${caseNine}]. In a reverse order of value, the fares align as [${caseTen}].

Strategic Fare Enhancements:
${caseEleven}.

High-Value Fares:
We also identified the high-value fares, those surpassing our set threshold of Rs.${threshold}, and these were: [${caseEight}].`)