import java.util.*;

public class Book implements Comparable<Book>, Cloneable {
    private String title;
    private Date publishDate;
    private String comment;

    @Override
    public boolean equals(Object o) {
        if(this == o) {
            return true;
        }
        if( (o == null) || !(o instanceof Book) ) {
            return false;
        }

        Book b = (Book)o;
        if( !publishDate.equals(b.publishDate) || !title.equals(b.title) ) {
            return false;
        }

        return true;
    }

    @Override
    public int compareTo(Book book) {
        return publishDate.compareTo(book.publishDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, publishDate, comment);
    }

    @Override
    public Book clone() {
        Book book = new Book();
        book.title = title;
        book.publishDate = (Date) publishDate.clone();
        book.comment = comment;
        return book;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
