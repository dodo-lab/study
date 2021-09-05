package chapter_13_enum_constant;

public class Enum {
    enum Gender {
        MAN,
        WOMAN,
        OTHER,
    }

    private static void genderExec(Gender gender) {
        switch (gender) {
            case MAN:
                System.out.println("man");
                break;
            case WOMAN:
                System.out.println("woman");
                break;
            case OTHER:
                System.out.println("other");
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + gender);
        }
    }

    public static void main(String[] args) {
        genderExec(Gender.MAN);
    }
}
