import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        study_01_02();
        practice();
    }

    private static void practice() {
        try {
            List<Book> books = new ArrayList<>();
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/mm/dd");

            Book b1 = new Book();
            b1.setTitle("Java入門");
            b1.setPublishDate(dateFormat.parse("2011/10/07"));
            b1.setComment("スッキリわかる");
            books.add(b1);

            Book b2 = new Book();
            b2.setTitle("Python入門");
            b2.setPublishDate(dateFormat.parse("2019/06/11"));
            b2.setComment("カレーが食べたくなる");
            books.add(b2);

            Book b3 = new Book();
            b3.setTitle("C言語入門");
            b3.setPublishDate(dateFormat.parse("2018/06/21"));
            b3.setComment("ポインタも自由自在");
            books.add(b3);

            for (Book book: books) {
                System.out.println(book.getTitle() + " "
                        + dateFormat.format(book.getPublishDate()) + " "
                        + book.getComment());
            }
            Collections.sort(books, new TitleComparator());
            for (Book book: books) {
                System.out.println(book.getTitle() + " "
                        + dateFormat.format(book.getPublishDate()) + " "
                        + book.getComment());
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    private static void study_01_02() {
        Hero h1 = new Hero("アルス", 100, 20);
        System.out.println(h1.toString());
    }
}
