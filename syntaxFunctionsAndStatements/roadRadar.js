function solve(speed, area) {
    let limit = 0;
    let speeding = 0;
    let status = "";

    switch (area) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }

    speeding = limit - speed;

    if (speeding >= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }

    if (Math.abs(speeding) <= 20) {
        status = "speeding";
    } else if (Math.abs(speeding) <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    console.log(`The speed is ${Math.abs(speeding)} km/h faster than the allowed speed of ${limit} - ${status}`);
}

solve(200, 'motorway');