public class Outer {
    int outerField;
    static int outerStaticField;

    class Inner {
        void innerMethod() {
            outerField = 100;
        }
    }

    static class InnerStatic {
        void innerMethod() {
            // staticな外部メンバのみ利用可能
            outerStaticField = 10;
        }
    }

    void outerMethod() {
        int a = 10;
        class InnerLocal {
            public  void innerMethod() {
                System.out.println("innerMethodです");
                System.out.println(outerField + a);
            }
        }

        InnerLocal il = new InnerLocal();
        il.innerMethod();
    }
}
