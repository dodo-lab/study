package com.sandbox;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalenderModule";
    }

    @ReactMethod
    public void createCalenderEvent(String name, String location) {
        Log.d("CalenderModule", "Create event called with name: " + name
                + " and location " + location);
    }
}
