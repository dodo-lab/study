import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        study_01();
        study_02();
    }

    private static void study_02() {
        Outer.InnerStatic ic = new Outer.InnerStatic();

        Outer o = new Outer();
        Outer.Inner oi = o.new Inner();
        oi.innerMethod();
        o.outerMethod();

        List<Account> accounts = new ArrayList<>();
        accounts.add(new Account("003", AccountType.FUTSU));
        accounts.add(new Account("001", AccountType.TOUZA));
        // 匿名クラス
        Collections.sort(accounts, new Comparator<Account>() {
            @Override
            public int compare(Account account, Account t1) {
                return account.getAccountNo().compareTo(t1.getAccountNo());
            }
        });
        for (Account account: accounts) {
            System.out.println(account.getAccountNo() + " " + account.getAccountType().toString());
        }
    }

    private static void study_01() {
        Pocket<String> p1 = new Pocket<>();
        p1.put("1192");
        String s = p1.get();
        System.out.println(s);

        Pocket<String> p2 = Pocket.createPocket("1920");
        System.out.println(p2.get());
    }
}
