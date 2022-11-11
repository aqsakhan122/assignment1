//task 5
class Payment
{
 amountOfPayment;
 paymentDetails;
};

paymentDetails();
{
	console.log ( "Amount of payment: +"  amountOfPayment );
}

class CashPayment extends Payment
{
	CashPayment();
	CashPayment(AmountOfPayment);
	paymentDetails();
}

Class CardPayment extends Payment
{
	Cardayment();
	CashPayment(AmountOfPayment);
	paymentDetails();
};

class CreditCardPayment extends CardPayment
{
    nameOnCard;
	expirationDate;
	cardNumber;
{
    CardPayment();
	paymentDetails();
}
};

 class CreditCardPayment extends paymentDetails()
{
	console.log("Amount of credit card payment" .AmountOfPayment);
	console.log ("Name on the credit card" .nameOnCard);
	console.log ("Expiration date" . expirationDate);
	console.log ("Credit card number" . cardNumber);	
}

main()
{
	var cp1=mew CashPayment(75.25);
	var cp2=new CashPayment(36.95);
	var ccp1=mew CardPayment(95.15, "Smith", "12/21/2009", "321654987");
	var ccp2= new CreditCardPayment(45.75, "James", "10/30/2008", "963852741");

	console.log("Details of Cash #1..." );
	cp1.paymentDetails();
	
	console.log("Details of Cash #2...");
	cp2.paymentDetails();
	
	console.log("Details of Credit Card #1...");
	ccp1.paymentDetails();
	
	console.log("Details of Credit Card #2...");
	ccp2.paymentDetails();
}

//task 6
class Employee

{
getInfo()
{
console.log("Enter your salary");
console.log("Enter the no.of working hours");
}

AddSal()
{
sal;
if(sal < 500)

sal = sal + 10;

console.log("Salary: " + sal);
}
AddWork()
{
sal;
hours;
if(hours > 6)
sal =sal + 5;
console.log("Salary: " + sal);
}

main()
{
var obj = new Employee();

obj.getInfo();
obj.AddSal();
obj.AddWork();
}
}

//task 7
class Game
{
    info(msg)
    {
        console.log(msg);
    }
}
class Cricket extends Game
{
info(msg)
{
    super.info(msg);
   
}
}
class Football extends Game{
    info(msg){
        super.info(msg);
        
    }
}

var game=new Game;
var cricket=new Cricket;
var football=new Football;

game.info("I love game and sports");
cricket.info("I love cricket");
football.info("I love football");

//task 8
class Car
{
    constructor(name,make,color,speed)
    {
        this.name=name;
        this.make=make;
        this.color=color;
        this.speed=speed;
    }
    
    setName(name){
    name=this.name;
    return this;
    }
    setMake(make){
        make=this.make;
        return this;
    }
    setColor(color){
        color=this.color;
        return this;
    }
    setSpeed(speed)
    {
        speed=this.speed;
        return this;
    }
}  