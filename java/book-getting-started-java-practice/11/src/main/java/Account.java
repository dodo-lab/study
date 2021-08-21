public class Account {
    String owner;
    int zandaka;

    public Account(String owner, int zandaka) {
        this.owner = owner;
        this.zandaka = zandaka;
    }

    public void transfer(Account dest, int amount) {
        dest.zandaka += amount;
        zandaka -= amount;
    }
}
