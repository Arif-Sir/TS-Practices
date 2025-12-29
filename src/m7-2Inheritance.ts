// m7-2 Inheritance-the 1st pilar of OOP

class stu{
    name: string;
    age: number;

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getSleep(){
        console.log(`${this.name} is a stu`);
    }
    getWork(workingHour: number){
    console.log(`${this.name} wokr ${workingHour} hour`);
}
}

const stu1 = new stu ('Mr.a', 18);

stu1.getSleep();

const stu2 = new stu ('Mr. S', 55);

stu2.getWork(5);

// super constructor



//=========== 7-3 Type guard using typeof and in

type NormalUser = {
    name: string;
};

type Adminuser = {
    name: string;
    role: "Admin";
};

const getUser =  (user: NormalUser | Adminuser )=>{
    if("role" in user){
        console.log(`${user.name} and his role is : ${user.role}`);
    } else {
        console.log(`${user.name}`);
    }
};

getUser({name: "Normal" , role: "Admin"});

//=============================
// 7-4 Type guard using instance of - see github: https://github.com/Apollo-Level2-Web-Dev/be-a-typescript-technocrat/blob/module-7/src/instanceofguard.ts


//===================
// 7-5 Access Modifiers - using provet and public

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }


// balance ke se kore
  addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

const mezbaBhaiAccount = new BankAccount(115, "Mezba", 20);

mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);