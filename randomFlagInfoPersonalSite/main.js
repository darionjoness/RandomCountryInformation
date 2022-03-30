// 4 Regions Asia, Americas, Europe, Africa
// Facts FlagImg, Region, Country, Capital, Population, Area
const buttons = document.querySelectorAll('.countryButtons button');
const countryCards = document.querySelector('.countryCards');

buttons.forEach(button => {
	button.addEventListener('click', getData)
})

async function getData(e){
	clearCard();
	// Fetch from countries rest api
	const response = await fetch('https://restcountries.com/v2/all')

	const data = await response.json();


	// filter through and filter to get the value of button selected
	const valueCountries = await data
		.filter(country => country.region === e.target.value)

	// Get Random country
	const randCountry = await valueCountries[Math.floor(Math.random() * valueCountries.length)]


	insertElements(randCountry)

}

function insertElements(randomCountry){
	// Create countryCard Div
	const countryCard = document.createElement('div');
	// Add countryCard class to 
	countryCard.classList.add('countryCard')

	// Create a img element to put the flag image on 
	const newImg = document.createElement('img');

	// Set img src equal to flag img
	newImg.src = randomCountry.flag

	// Append Image to the countryCard
	countryCard.appendChild(newImg)

	// Create new h2
	const regionH2 = document.createElement('h2');
	// Set innerText for h2
	regionH2.innerText = `Region: ${randomCountry.region}`
	// Append the h2 to the countryCard
	countryCard.appendChild(regionH2)

	// Create another h2
	const countryH2 = document.createElement('h2');
	// Set innerText for h2
	countryH2.innerText = `Country: ${randomCountry.name}`
	// Append h2 to the countryCard
	countryCard.appendChild(countryH2)

	// Create Capital h3
	const capitalH3 = document.createElement('h3');
	// Set innerText for h3
	capitalH3.innerText = `Capital: ${randomCountry.capital}`;
	// Append h3 to countryCard
	countryCard.appendChild(capitalH3)

	// Create Poplulation h3
	const populationH3 = document.createElement('h3');
	// Set innerText for h3
	populationH3.innerText = `Population: ${randomCountry.population}`;
	// Append h3 to countryCard
	countryCard.appendChild(populationH3);

	// Create Area h3
	const areaH3 = document.createElement('h3');
	// Set innerText for h3
	areaH3.innerText = `Area: ${randomCountry.area}`;
	// Append h3 to countryCard 
	countryCard.appendChild(areaH3)

	// Add class of active to the countryCards
	countryCards.classList.add('active')
	// Append Country Card onto countryCards div
	countryCards.appendChild(countryCard)
	
}



function clearCard(){
	document.querySelector('.countryCards').innerHTML = '';
}








