package sample.gradle;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;

import org.junit.Test;
import mockit.Mocked;
import mockit.Expectations;

public class GradleMainTest {

    // @Mocked private GradleMain gradleMain;
    private GradleMain gradleMain;

    @Test
    public void test() {
        gradleMain = new GradleMain();

        // exercise
        var actual = gradleMain.method();

        // verify
        assertThat(actual, is("original"));
    }
}