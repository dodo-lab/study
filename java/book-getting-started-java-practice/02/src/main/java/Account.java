import lombok.Data;

@Data
public class Account {
    private String accountNo;
    private int zandaka;
    private AccountType accountType;

    public Account(String accountNo, AccountType accountType) {
        this.accountNo = accountNo;
        this.accountType = accountType;
        this.zandaka = 0;
    }
}
