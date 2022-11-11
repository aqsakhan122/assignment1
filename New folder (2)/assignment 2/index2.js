class Shape
 {
    constructor(name, sides, sideLength)
    {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;


        this.calcPerimeter = function() {
            let peri = this.sides * this.sideLength;
            console.log(peri);
        }
    };
}

class Square extends Shape 
{
    constructor(sideLength) 
    {
            super("square", 4, sideLength);
    }

    calcPerimeter() 
    {
        return (this.sides * this.sideLength);
    }

}
class Triangle extends Shape 
{
    constructor(sideLength)
     {
            super("Triangle", 3, sideLength);
    }

 
    calcPerimeter() 
    {
        return (this.sides * this.sideLength);
    }
}
let square = new Square(5);
console.log(square.name);
console.log(square.sides);
console.log(square.calcArea());
console.log(square.calcPerimeter());


let triangle = new Triangle(3);
console.log(triangle.name);
console.log(triangle.sides);
console.log(triangle.calcArea());
console.log(triangle.calcPerimeter());

// task 2 
let totalRuns = 0;
class Player {
    constructor(PlayerID , PlayerName , PlayerRun , PlayerDOB , PlayerShName)
    {
       this.PlayerID = PlayerID;
       this.PlayerName = PlayerName;
       this.PlayerRun = PlayerRun;
       this.PlayerDOB = PlayerDOB;
       this.PlayerShName = PlayerShName;
    }
    DisplayInfo() 
    {
     console.log("Player id " + this.PlayerID + " have name is "+ this.PlayerName + " make runs   "+ this.PlayerRun +" have date of birth "+this.PlayerDOB+" player shirt name "+this.PlayerShName);
    }

    GetRuns() {
    console.log("Get Runs is :" + this.PlayerRun);
    }

     AddRuns () 
     {
       totalRuns = totalRuns + this.PlayerRun;
       console.log("Total Runs of the player is :" + totalRuns);
     }
}

let splayer = new Player(1,'Fahad',120,1997,10);
let splayer1 = new Player(2,'Raza',150,1997,13);
splayer.DisplayInfo();
splayer.GetRuns();
splayer1.DisplayInfo();
splayer.AddRuns();
splayer1.AddRuns();


//task 3
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < 4; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) 
    {
      console.log("Already read " + book);
    } 
    else
    {
     console.log("You need to read " + book);
    }
   }

   //task 4
   class Account
   {
    #accountId
    #accountTitle
    #balance
    #emailId
        constructor(accountId,accountTitle,balance,emailId)
        {
            this.#accountId=accountId;
            this.#accountTitle=accountTitle;
            this.#balance=balance;
            this.#emailId=emailId;
        }
        set AccountId(accountId){
             this.#accountId=accountId;
        }
        get AccountId(){
            return this.#accountId
        }
        set AccountTitle(accountTitle){
            this.#accountTitle=accountTitle;
        }
        get AccountTitle(){
            return this.#accountTitle
        }
        set balance(balance){
            this.#balance=balance;
        }
        get balance(){
            return this.#balance
        }
        set emailId(emailID){
            this.#emailId=emailID;
        }
        get emailId(){
            return this.#emailId
        }
        depositAmount(amount)
        {
            console.log(`New amount is ${amount}`);
        }
    
    withDrawAmount(amount,balance)
    {
        console.log(`The withdrwal amount is ${amount} and the remaining blance is ${balance - amount}`);
    }
}
const newBank = new Account('Haris');
newBank.depositAmount(10000);
newBank.withDrawAmount(5000,10000);
newBank.AccountId='0237';
console.log("Your account id is:"+newBank.AccountId);
