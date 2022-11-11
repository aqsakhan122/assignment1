//program that display all poositive and negetive numbers
const number = parseInt(prompt("Enter a number: "));

if (number > 0) 
{
    console.log("The number is positive");
}

else 
{
     console.log("The number is negative");
}

//program that cal sum of positive numbers in array
function SummPositive( numbers )
 {
    var i,sum = 0;
    for(i = 0; i < numbers.length; i++) 
    {
      if(numbers[i] > 0) 
      {
        sum += numbers[i];
      }
    }
    console.log(positive);
    return sum;
  }
  var sum_result = SummPositive( [ 1, -2, 3, 23,-13, 10,-52 ] );
  console.log(sum_result);

  // program to display fibonacci sequence using recursion
function fibonacci(num) 
{
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
const nTerms = prompt('Enter the number of terms: ');
if(nTerms <=0) 
{
    console.log('Enter a positive integer.');
}
else
 {
    for(let i = 0; i < nTerms; i++) 
    {
        console.log(fibonacci(i));
    }
}

//counter
const btnCount = document.getElementById('btn-count');
btnCount.addEventListener('click', () => 
{
  	let counter = 0;
  	counter++;
  	document.getElementById('result').innerText = counter;

      btnreset.addEventListener('click', () => 
      {
         counter = 0;
         document.getElementById('result').innerText = reset;
 
      });
});