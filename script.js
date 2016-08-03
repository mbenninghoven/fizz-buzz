//For each number if it's not divisible by 3 or 5, you simply say the number. 
//If it's divisible by 3, instead of the number you say "fizz". 
//If it's divisible by 5, you say "buzz". And finally if it's divisible by both 3 and 5, you say "fizz buzz".

//create an array for the numbers 1 through 100

for (var i=1; i<=100; i++){
	if (i % 5 == 0 && i % 3 == 0){
		document.write("fizzbuzz<br/>");
	}
	else if (i % 3 == 0){
		document.write("fizz<br/>");
	}
	else if (i % 5 == 0){
		document.write("buzz<br/>");
	}
	else {
		document.write(i + "<br/>");
	}
}

//sort through the array using the if statements below and replacing the numbers with their statements if applicable


//if the number is divisible by three replace the number in the array with "fizz"

//if the number is divisible by five replace the bumber in the array with "buzz"

//if the number is divisible by three and five replace the number in the array with "fizz buzz"



//the numbers of the newly populated array with the proper statments will be output on the screen