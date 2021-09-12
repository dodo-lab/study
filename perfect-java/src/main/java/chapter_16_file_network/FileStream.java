package chapter_16_file_network;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FileStream {
    static void lineStream(String filePath) {
        // BufferedReaderのlinesメソッドを利用
        try (var bufferedReader = new BufferedReader(new FileReader(filePath))) {
            bufferedReader.lines()
                    .map(s -> "BufferedReader: " + s)
                    .forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Filesのlinesメソッドを利用
        try {
            var path = Paths.get(filePath);
            Files.lines(path)
                    .map(s -> "Paths: " + s)
                    .forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static void fileStream(String directory) {
        var path = Paths.get(directory);

        try {
            // Pathsのlistメソッドで、ディレクトリ直下を参照
            Files.list(path)
                    .forEach(System.out::println);

            // Filesのwalkメソッドはサブディレクトリ内も参照可能（代に引数に Integer.MAX_VALUE を指定することで末尾の階層まで参照可能）
            Files.walk(path, 2)
                    .forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        FileChar.write(Common.FILE_DUMMY_TEXT, "File\nStream\nTest");
        lineStream(Common.FILE_DUMMY_TEXT);
        fileStream("./");
    }
}
