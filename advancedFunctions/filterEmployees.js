function solve(data, criteria) {
    const parsedData = JSON.parse(data);
    const parsedCriteria = criteria.split('-');

    let result = [];

    parsedData.map(el => {
        el[parsedCriteria[0]] === parsedCriteria[1] ? result.push({ firstName: el.first_name, secondName: el.last_name, email: el.email }) : el
    });

    result.forEach((el, index) => {
        console.log(`${index}. ${el.firstName} ${el.secondName} - ${el.email}`);
    })

}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);