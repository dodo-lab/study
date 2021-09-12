package chapter_16_file_network;

import java.io.*;

public class FileChar {
    static void write(String filePath, String text) {
        try (var writer = new FileWriter(filePath)) {
            writer.write(text);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static void read(String filePath) {
        try (var reader = new FileReader(filePath);
             var writer = new OutputStreamWriter(System.out)) {

            int length;
            var buf = new char[4096];
            while ((length = reader.read(buf)) != -1) {
                writer.write(buf, 0, length);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        write(Common.FILE_DUMMY_TEXT, "Char I/O Test.");
        read(Common.FILE_DUMMY_TEXT);
    }
}
