public class Account implements Comparable<Account>  {
    int number;
    int zandaka;

    public int compareTo(Account obj) {
        if( number < obj.number ) {
            return -1;
        }
        if( number > obj.number ) {
            return 1;
        }

        return 0;
    }
}
