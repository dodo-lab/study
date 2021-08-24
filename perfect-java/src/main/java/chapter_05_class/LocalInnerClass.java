package chapter_05_class;

import java.util.Comparator;

public class LocalInnerClass {
    // 比較オブジェクトを返却する
    static Comparator<String> getComparator() {
        class StringLengthComparator implements Comparator<String> {
            @Override
            public int compare(String s, String t1) {
                return s.length() - t1.length();
            }
        }

        return new StringLengthComparator();
    }

    public static void main(String[] args) {
        Comparator<String> comparator = LocalInnerClass.getComparator();
        System.out.println(comparator.compare("123", "456"));
        System.out.println(comparator.compare("1234", "456"));
        System.out.println(comparator.compare("123", "4567"));
    }
}
