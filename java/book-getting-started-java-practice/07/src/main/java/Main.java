import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.imageio.ImageIO;
import javax.sound.midi.InvalidMidiDataException;
import javax.sound.midi.MidiSystem;
import javax.sound.midi.MidiUnavailableException;
import javax.sound.midi.Sequencer;
import javax.sound.sampled.*;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.awt.image.BufferedImage;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class Main {
    public static void main(String[] args) {
//        study_01();
//        study_02();
//        study_03();
//        study_04();
//        study_05();
//        study_06();
//        study_07();
//        study_08();
//        study_09();
//        study_10();
//        study_11();

//        practice_01();
//        practice_02();
        practice_03();
    }

    public static void practice_03() {
        Employee employee = new Employee("田中太郎", 42);
        Department department = new Department("総務部", employee);

        // インスタンスの直列化と保存
        try (FileOutputStream fos = new FileOutputStream("company.dat");
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            oos.writeObject(department);
            oos.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // ファイルからインスタンスを復元
        try (FileInputStream fis = new FileInputStream("company.dat");
             ObjectInputStream ois = new ObjectInputStream(fis)) {
            Department readDepartment = (Department) ois.readObject();
            System.out.println("部署名：" + readDepartment.name);
            System.out.println("リーダー：" + readDepartment.leader.name + " / " + readDepartment.leader.age + "歳");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void practice_02() {
        ResourceBundle rb = ResourceBundle.getBundle("pref_res");
        String capital = rb.getString("aichi.capital");
        String food = rb.getString("aichi.food");
        System.out.println(capital + " : " + food);
    }

    public static void practice_01() {
        try (FileReader fr = new FileReader("pref.properties")) {
            Properties p = new Properties();
            p.load(fr);

            String capital = p.getProperty("aichi.capital");
            String food = p.getProperty("aichi.food");
            System.out.println(capital + " : " + food);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_11() {
        try (FileOutputStream fos = new FileOutputStream("img12.png")) {
            BufferedImage image = ImageIO.read(new File("img12.jpg"));
            ImageIO.write(image, "png", fos);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_10() {
        try {
            // MIDIでBGMを再生するシンセサイザの準備
            Sequencer seq = MidiSystem.getSequencer();
            seq.open();
            seq.setSequence(MidiSystem.getSequence(new File("battle01.mid")));
            seq.setLoopCount(-1);
            seq.start();

            // 効果音をwavから読み取る準備
            AudioInputStream ais = AudioSystem.getAudioInputStream(new File("test.wav"));
            Clip clip = AudioSystem.getClip();
            clip.open(ais);

            System.out.println("何か入力すると音が鳴るよ");

            for (int i = 0; i < 4; ++i) {
                new Scanner(System.in).nextLine();
                clip.start();
                clip.setFramePosition(0);
            }

            // サンプリング音声の終了
            clip.stop();
            ais.close();

            // MIDIシンセサイザの終了
            seq.stop();
            seq.close();
        } catch (MidiUnavailableException e) {
            e.printStackTrace();
        } catch (InvalidMidiDataException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (UnsupportedAudioFileException e) {
            e.printStackTrace();
        } catch (LineUnavailableException e) {
            e.printStackTrace();
        }
    }

    public static void study_09() {
        try (ZipFile file = new ZipFile("jackson-core-2.12.4.jar")) {
            for (ZipEntry e : Collections.list(file.entries())) {
                System.out.println(e.getName() + " size=" + e.getCompressedSize());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_08() {
        Hero hero1 = new Hero("ミナト", 75, 18);

        // インスタンスの直列化と保存
        try (FileOutputStream fos = new FileOutputStream("rpgdata.dat");
             ObjectOutputStream oos = new ObjectOutputStream(fos)) {
            oos.writeObject(hero1);
            oos.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // ファイルからインスタンスを復元
        try (FileInputStream fis = new FileInputStream("rpgdata.dat");
             ObjectInputStream ois = new ObjectInputStream(fis)) {
            Hero hero2 = (Hero) ois.readObject();
            System.out.println("名前：" + hero2.getName());
            System.out.println("HP：" + hero2.getHp());
            System.out.println("MP：" + hero2.getMp());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void study_07() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            JsonFileData file = mapper.readValue(new File("hero.json"), JsonFileData.class);

            System.out.println("名前：" + file.hero.name);
            System.out.println("武器：" + file.hero.weapon.name);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_06() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            JsonNode root = mapper.readTree(new File("hero.json"));
            JsonNode hero = root.get("hero");
            JsonNode weapon = hero.get("weapon");

            System.out.println("名前：" + hero.get("name").textValue());
            System.out.println("武器：" + weapon.get("name").textValue());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_05() {
        try (InputStream is = new FileInputStream("hero.xml")) {
            Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(is);
            Element hero = doc.getDocumentElement();
            Element weapon = study_05_findChildByTag(hero, "weapon");
            Element power = study_05_findChildByTag(weapon, "power");
            String value = power.getTextContent();

            System.out.println("鋼の剣の攻撃力：" + value);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Element study_05_findChildByTag(Element self, String name) throws Exception {
        NodeList children = self.getChildNodes();
        for (int i = 0; i < children.getLength(); ++i) {
            if (children.item(i) instanceof Element) {
                Element e = (Element) children.item(i);
                if (e.getTagName().equals(name)) {
                    return e;
                }
            }
        }

        return null;
    }

    public static void study_04() {
        Locale locale = Locale.getDefault();
        System.out.println(locale.getCountry() + "-" + locale.getLanguage());

        String now = (new SimpleDateFormat()).format(new Date());
        ResourceBundle rb = ResourceBundle.getBundle("messages");
        System.out.println(rb.getString("CURRENT_TIME_IS") + now);
    }

    public static void study_03() {
        try (Writer fw = new FileWriter("asaka.properties")) {
            Properties p = new Properties();
            p.setProperty("heroName", "アサカ");
            p.setProperty("heroHp", "62");
            p.setProperty("heroMp", "45");
            p.store(fw, "勇者の情報");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_02() {
        try (Reader fr = new FileReader("test.properties")) {
            Properties p = new Properties();
            p.load(fr);

            String name = p.getProperty("heroName");
            String strHp = p.getProperty("heroHp");
            int hp = Integer.parseInt(strHp);

            System.out.println("勇者の名前：" + name);
            System.out.println("勇者のHP：" + hp);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void study_01() {
        String s = "ミナト,アサカ,スガワラ";
        String[] st = s.split(",");
        for (String name : st) {
            System.out.println(name);
        }
    }
}
