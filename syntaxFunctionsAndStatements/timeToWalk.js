function solve(steps, lengthOfFoot, speed) {
    let distance = steps * lengthOfFoot;
    let rest = Math.floor(distance / 500);
    speed = speed * 1000 / 60;

    let minutes = Math.floor(distance / speed) + rest;
    let hours = 0;
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes = minutes - hours * 60;
    }
    let seconds = (((distance / speed) - Math.floor(distance / speed)) * 60).toFixed(0);

    hours = hours.toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`);
}

solve(4000, 0.60, 5);
solve(112564, 0.70, 5.5);