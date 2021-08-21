import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.GZIPOutputStream;

public class Main {
    public static void main(String[] args) {
//        study_01();
//        study_02();
//        study_03();
//        study_04();
//        study_05();
//        practice_01("test.txt", "out.txt");
        practice_02("test.txt", "out.zip");
    }

    public static void practice_02(String inputFile, String outputFile) {
        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile);
             BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(outputStream);
             GZIPOutputStream gzipOutputStream = new GZIPOutputStream(bufferedOutputStream)) {
            int input = inputStream.read();
            while (input != -1) {
                gzipOutputStream.write(input);
                input = inputStream.read();
            }
            gzipOutputStream.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void practice_01(String inputFile, String outputFile) {
        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {
            byte[] inputData = inputStream.readAllBytes();
            outputStream.write(inputData);
            outputStream.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_05() {
        try (
                FileReader fr = new FileReader("test.txt");
                BufferedReader br = new BufferedReader(fr)
        ) {
            String line = null;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_04() {
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        stream.write(65);
        stream.write(66);
        byte[] data = stream.toByteArray();
        for (byte b : data) {
            System.out.print((char) b);
        }
    }

    public static void study_03() {
        try (FileOutputStream outputStream = new FileOutputStream("rpgsave.dat")) {
            outputStream.write(65);
            outputStream.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_02() {
        try (FileReader fr = new FileReader("test.txt")) {
            System.out.println("すべてのデータを読み込んで表示します");
            int i = fr.read();
            while (i != -1) {
                char c = (char) i;
                System.out.print(c);
                i = fr.read();
            }
            System.out.println();
            System.out.println("ファイルの末尾に到達しました");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_01() {
        try {
            RandomAccessFile file = new RandomAccessFile("test.txt", "rw");

            // 20バイト目から1バイト読み取る
            file.seek(20);
            byte b = file.readByte();
            // 18バイト目に書き込む
            file.seek(18);
            file.write('b');
            file.close();
            System.out.println("書き込み成功");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
