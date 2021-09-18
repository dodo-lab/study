package chapter_18_reflection;

import com.sun.tools.javac.Main;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public class ProxyClass {
    private interface My {
        int exec(String value);
    }

    private static class MyImpl implements My {
        @Override
        public int exec(String value) {
            System.out.println(value);
            return value.length();
        }
    }

    private static class MyProxy implements InvocationHandler {
        private final Object target;

        private MyProxy(Object target) {
            this.target = target;
        }

        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            System.out.println("before interceptor");
            var ret = method.invoke(target, args);
            System.out.println("after intercept");

            return ret;
        }
    }

    public static void main(String[] args) {
        var my = (My) Proxy.newProxyInstance(ProxyClass.class.getClassLoader(),
                new Class<?>[]{My.class},
                new MyProxy(new MyImpl()));

        var ret = my.exec("abc");
        System.out.println("ret = " + ret);
    }
}
