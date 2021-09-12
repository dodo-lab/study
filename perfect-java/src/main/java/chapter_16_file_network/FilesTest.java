package chapter_16_file_network;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;

public class FilesTest {
    // ディレクトリ内のファイル名を表示
    public static void main(String[] args) {
        var path = Paths.get("./");
        try {
            Files.walkFileTree(path, new SimpleFileVisitor<>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                    System.out.println(file);
                    if (attrs.isDirectory() && Files.isReadable(file)) {
                        return FileVisitResult.SKIP_SUBTREE;
                    } else {
                        return FileVisitResult.CONTINUE;
                    }
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
