var base_number = 4;

function calculateGrade(score)
{
	if(score >= 90 && score <= 100)
	{
		return "A";
	}
	
	if(score >= 80 && score <= 89)
	{
		return "B";
	}
	
	if(score >= 70 && score <= 79)
	{
		return "C";
	}
	
	if(score >= 60 && score <= 69)
	{
		return "D";
	}
	
	return "F";
}

function showStars(rows)
{
	var star = "*";
	for(let i = 0; i <= rows; i++)
	{
		console.log(star.repeat(i));
	}
}

function isPrime(n)
{
	var i = 0
	for(i = 2; i <= Math.sqrt(n); i++)
	{
		if((n % i) == 0)
		{
			return "Not Prime";
		}
	}
	
	return "Prime";
}

function multiplicationTable(n)
{
	for(let i = 1; i <= 10; i++)
	{
		console.log(n*i);
	}
}

console.log(calculateGrade(base_number * 10 + 5));

showStars(base_number+2)

console.log(isPrime(base_number + 10));

multiplicationTable(base_number)