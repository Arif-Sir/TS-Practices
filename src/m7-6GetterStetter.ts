class BankAccount{
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

//  set balance
    addBalance(balance: number){
    this._userBalance = this._userBalance + balance;
    }
     // for get
    getBalance(){
        return this._userBalance;
    }

}

const ar = new BankAccount(2852,'AR', 20);

console.log(ar.getBalance());

