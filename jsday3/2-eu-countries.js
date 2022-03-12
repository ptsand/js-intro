let originalCountry;
let originalFill;
document.getElementById("svg2").onclick = e => {
    const countryNode = e.target;
    const isoCode = countryNode.id;
    console.log(isoCode)
    if (originalCountry) {
        originalCountry.style.fill = originalFill
        document.getElementById("country-info").classList.add("d-none")
    }
    originalCountry = countryNode
    originalFill = countryNode.style.fill
    countryNode.style.fill = "steelblue"
    fetch(`https://countries.plaul.dk/api/countries/${isoCode}`)
    .then(res => {
        if (!res.ok) {
            throw `Error: ${res.status}, while trying to fetch ${isoCode}`
        }
        return res.json()
    })
    .then(country => {
        document.getElementById("country-info").classList.remove("d-none") // display info
        document.getElementById("flag").setAttribute("src", country.flag)
        document.getElementById("name").innerText = country.name.common
        document.getElementById("un-member").innerText = country.unMember
        let currencies = [];
        for (prop in country.currencies) {
            currencies.push(`${prop}, name: ${country.currencies[prop].name}, symbol: ${country.currencies[prop].symbol}`)
        }
        document.getElementById("currencies").innerText = currencies.join(" - ")
        document.getElementById("capital").innerText = country.capital
        document.getElementById("borders").innerText = country.borders.join(",")
    })
    .catch(e => console.error(e))
}