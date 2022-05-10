// BANK ACCOUNT
let account = {
  accountName: "Shram",
  balance: 100,
  
};

function getBalance(){
  return account.balance;

}
function deposit(){
  account.balance += parseFloat(prompt("Enter the amount you going to deposit:"));
  alert("Amount Deposited!");

}
function withdrawal(){
  account.balance -= parseFloat(prompt("Enter the amount you going to Withdraw:"));
  alert("Amount Withdrawn!");
}
function getAccountName(){
  return account.accountName;

}
function accountError(){
  alert('Erorr!');
  console.log('Something Went Wrong');
}
function exitAccount(){
    alert("Thank you for banking!");

}

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
//isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
//alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
//function atm() {
  //let choice = parseInt(prompt("Display menu choices here"));
  atm();
function atm() {
  let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exist"));
  if(choice==1){
    alert("Your balance is "+getBalance());
    atm();
  }else if(choice==2){
    deposit();
    atm();
  }
  else if(choice==3){
    withdrawal();
    atm();
  }else if(choice==4){
    alert("Account name is "+getAccountName());
    atm();
  }else if(choice==5){
    exitAccount();
  }else{
      accountError();
      atm();
  }

}


  //prompt user for choice.

  // you can use the variable choice for your switch or if/else statement
  // so choice will hold the value of the user input.
