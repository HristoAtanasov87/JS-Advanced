function solve(inputObject) {
    if (inputObject.dizziness == true) {
        let reqWater = 0.1 * inputObject.weight * inputObject.experience;
        inputObject.levelOfHydrated += reqWater;
        inputObject.dizziness = false;
    }

    return inputObject;
}


console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));
console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));
console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));