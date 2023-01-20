let res = fetch('https://restcountries.com/v3.1/all')
    .then(result => result.json())
    .then(data => {
        // console.log(data);
        let tbody = document.querySelector('tbody');
        data.forEach(item => {
            // console.log(item);
            tbody.innerHTML += `<tr>
                <td >${item.cca2}</td>
                <td><img src="${item.flags.svg}" alt='error:(' width = '50' height = '50'></td>
                <td>${item.name.official}</td>
                <td>${item.capital}</td>
                <td>${item.population}</td>
            </tr>`
        })
    })
    .catch(err => console.log(err));