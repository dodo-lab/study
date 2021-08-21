import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AccountTest {
    @Test
    public void instantiate() {
        Account a = new Account("ミナト", 30000);
        assertEquals("ミナト", a.owner);
        assertEquals(30000, a.zandaka);
    }

    @Test
    public void transfer() {
        Account a = new Account("ミナト", 30000);
        Account b = new Account("アサカ", 300000);
        a.transfer(b, 20000);

        assertEquals(10000, a.zandaka);
        assertEquals(320000, b.zandaka);
    }
}
