package chapter_14_exception;

public class TryWithResources {
    // リソースクラスはAutoCloseableインターフェースを継承する
    static class MyResource implements AutoCloseable {
        private final String name;
        private final boolean closeError;

        public MyResource(String name, boolean closeError) {
            this.name = name;
            this.closeError = closeError;
            System.out.println("リソース開始処理:" + name);
        }

        @Override
        public void close() throws Exception {
            System.out.println("リソース解放処理:" + name);
            if (closeError) {
                System.out.println("close内で例外発生");
                throw new Exception();
            }
        }
    }

    private static void normal() {
        System.out.println("--- normal");
        try (MyResource myResource1 = new MyResource("1", false);
             MyResource myResource2 = new MyResource("2", false)) {
            System.out.println("リソース利用処理");
            System.out.println("try内で例外発生");
            throw new Exception();
        } catch (Exception e) {
            System.out.println("エラー処理");
        } finally {
            System.out.println("後処理");
        }
    }

    // close中に例外が発生した場合、すべてのリソースの解放処理をした後にまとめて例外処理をする
    private static void closeError() {
        System.out.println("--- closeError");
        try (MyResource myResource1 = new MyResource("1", false);
             MyResource myResource2 = new MyResource("2", true);
             MyResource myResource3 = new MyResource("3", true)) {
            System.out.println("リソース利用処理");
        } catch (Exception e) {
            System.out.println("エラー処理");
            e.printStackTrace();
        } finally {
            System.out.println("後処理");
        }
    }

    public static void main(String[] args) {
        normal();
        closeError();
    }
}
