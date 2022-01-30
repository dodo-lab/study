package sample.gradle;

/**
 * メインクラス
 */
public class GradleMain {
  /**
   * メインメソッド
   * @param args コマンドライン引数
   */
  public static void main(String[] args) {
    System.out.println("Hello Gradle!");

    for (int i = 0; i < args.length; i++) {
      System.out.println(args[i]);
    }
  }

  public String method() {
    return "original";
  }
}