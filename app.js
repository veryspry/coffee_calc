const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

// calculate cost when button is clicked
submitBtn.addEventListener('click', () => {
	calculate();
});

// make calculations
const calculate = () => {

	const costOfBag = parseFloat( document.getElementById('costOfBag').value, 10 ) ;
	const weightOfBag = parseFloat( document.getElementById('weightOfBag').value, 10 );
	const gramsOfBeansUsed = parseFloat( document.getElementById('gramsOfBeansUsed').value, 10 ) ;
	const costOfFilters = parseFloat( document.getElementById('costOfFilters').value, 10 ) ;
	const totalNumFilters = parseFloat( document.getElementById('totalNumFilters').value, 10 );
	const costOfGallon = parseFloat( document.getElementById('costOfGallon').value, 10 );
	const gramsOfWaterUsed = parseFloat( document.getElementById('gramsOfWaterUsed').value, 10 );

	const beanCost =
		// 1oz = 28.35g
		parseFloat( ( costOfBag / ( weightOfBag * 28.38 ) ) * ( gramsOfBeansUsed ) );

	const filterCost =
		parseFloat( costOfFilters / totalNumFilters );

	const waterCost = 
		// 1 gallon of water = 3798 grams
		parseFloat( ( costOfGallon / 3798 ) * ( gramsOfWaterUsed ) );

	const totalCost = parseFloat( beanCost + filterCost + waterCost ) ;

	console.log(totalCost);


	results.innerHTML = totalCost;	

};




