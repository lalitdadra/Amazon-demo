class Bank {
    private cash: number;
    private employeesCount: number;
    private hiddenCharges: number;
 
    constructor(cash: number, employeesCount: number) {
        this.cash = cash
        this.employeesCount = employeesCount
        this.hiddenCharges = 30
    }
 
    public displayCash() {
        console.log(this.cash)
    }
 
    public displayEmployeeCount() {
        console.log(this.employeesCount);
    }
 
    public withdraw() {
        console.log(this.cash - this.hiddenCharges, ' is being withdrawn');
        console.log(this.hiddenCharges);

const ab =    }
 
}
 
class AxisBank extends Bank{
    name: string;
    customerCount: number;
    
    constructor(cash: number, name: string, customerCount: number) {
        super(cash, 10);
        this.name = name;
        this.customerCount = customerCount
    }
 
    displayName() {
        // console.log(this.name);
    }
 
}
 
const b = new Bank(10000, 20, );
b.displayCash();
b.withdraw();
 