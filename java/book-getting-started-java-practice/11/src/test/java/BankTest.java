import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class BankTest {
    @Test
    public void setName() {
        Bank b = new Bank();
        b.setName("ミヤビ");
        assertEquals("ミヤビ", b.getName());
    }

    @Test
    public void setNameWithNull() {
        try {
            Bank b = new Bank();
            b.setName(null);
        } catch (NullPointerException e) {
            return;
        }

        fail();
    }

    @Test
    public void throwsExceptionWithTwoCharName() {
        Bank b = new Bank();
        assertThrows(IllegalArgumentException.class, () -> {
            b.setName("ミヤ");
        });
    }
}
