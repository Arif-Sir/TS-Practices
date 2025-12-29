// v 5-7 (Function)

function add(num1: number, num2: number): number
{
    return num1 + num2;
}

add(2,2);

 const user ={
    balance: 0,
    addBalance(value: number): number{
        const total= this.balance + value;
        return total;
    }
 };

 user.addBalance(500) 

 // 5-8 Rest & Spread Operator

 const friends = ["Ar" , "Mr"];

 const enemy = ["e1", "e2"];

 const mutual = ["m1", "m2"];

 friends.push(...mutual)

// console.log(friends);

 //rest operation

 const sentInvirte = (...myfriends: string[]) => {
  friends.forEach((myfriends: String) =>          // look carefully what has done in here
    console.log(`Send Invite to ${myfriends}`)

    );
 };

//  sentInvirte ("a","b","k","l","lk");

 //5-9 Destructuring in typescript

 //1) obj   2) array

 //5-11 Union & intersection types

 type User = 'admin' | 'user' | 'guest'

 const getDashBoaard = (role: User)=> {
    if (role === 'admin'){
        return 'Your may go'
    }
    else if (role === 'user'){
        return ' YOu are not an admin'
    }
    else {
        return 'Login first'
    }
 };

 // intersection & 

 // 5-12 ternary, nullish coalescing & optional chaining ==> ?
 // ? : ternanry ; ?? : nulish coalesicng operator ; ? : optional chnaining

const ageNumber = (age: number) => {
    const result = age >= 21 ? 'You can' : " You not";
    console.log(result);
};

ageNumber(80)

//----------------- ?? : nulish coalesicng operator for null / undefinie 
