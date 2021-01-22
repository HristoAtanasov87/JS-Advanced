function colorize() {
    const rows = Array.from(document.querySelectorAll('table tr'));
    console.log(rows);

    rows.map((x, index) => index % 2 !== 0 ? x.style.backgroundColor = 'teal' : x);
}