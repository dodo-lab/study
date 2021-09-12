package chapter_16_file_network;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileByte {
    private static void write(String filePath, String text) {
        try (var outputStream = new FileOutputStream(filePath)) {
            outputStream.write(text.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void read(String filePath) {
        try (var inputStream = new FileInputStream(filePath)) {

            var buf = new byte[4096];   // ファイル読み書きは4KB以上の単位で行うのが定石
            int length;

            // ファイルの終端に達するまで読み続ける
            while ((length = inputStream.read(buf)) != -1) {
                System.out.write(buf, 0, length);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        write("tmp/dummy.txt", "this is dummy file.");
        read("tmp/dummy.txt");
    }
}
