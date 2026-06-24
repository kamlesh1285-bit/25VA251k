
abstract class BankAccount {

    private int accountNumber;
    private String accountHolderName;
    private double balance;

    public BankAccount(int accountNumber,
                       String accountHolderName,
                       double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Setters
    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Deposit Method
    public void deposit(double amount) {
        balance += amount;
    }

    // Display Details
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : " + balance);
    }

    // Abstract Method
    abstract double calculateInterest();
}

// Savings Account Class
class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {
        return getBalance() * 0.05;
    }
}

// Current Account Class
class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    double calculateInterest() {
        return getBalance() * 0.02;
    }
}

// Main Class
public class BankManagementSystem {

    public static void main(String[] args) {

        SavingsAccount sa =
            new SavingsAccount(101,
                               "Rahul Sharma",
                               50000);

        CurrentAccount ca =
            new CurrentAccount(102,
                               "Priya Singh",
                               70000);

        sa.deposit(5000);
        ca.deposit(10000);

        System.out.println("===== Savings Account =====");
        sa.displayDetails();
        System.out.println(
            "Interest : " +
            sa.calculateInterest()
        );

        System.out.println();

        System.out.println("===== Current Account =====");
        ca.displayDetails();
        System.out.println(
            "Interest : " +
            ca.calculateInterest()
        );
    }
}
```
