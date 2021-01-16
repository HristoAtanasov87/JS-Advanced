function solve(input, first, last) {
    let begging = input.indexOf(first);
    let end = input.indexOf(last);

    return input.slice(begging, end + 1);
}

console.log(solve(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));