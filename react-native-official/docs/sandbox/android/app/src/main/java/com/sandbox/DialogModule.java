package com.sandbox;

import android.app.AlertDialog;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class DialogModule extends ReactContextBaseJavaModule {
    public DialogModule(@NonNull ReactApplicationContext context) {super(context);}

    @NonNull
    @Override
    public String getName() {
        return "DialogModule";
    }

    @ReactMethod
    public void addListener(String eventName) {
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        // Remove upstream listeners, stop unnecessary background tasks
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SINGLE_BUTTON", "SINGLE");
        constants.put("DOUBLE_BUTTON", "DOUBLE");
        return constants;
    }

    @ReactMethod
    public void show(String title, String message, String type) {
        if(type.equals("SINGLE")) {
            new AlertDialog.Builder(getCurrentActivity())
                    .setTitle(title)
                    .setMessage(message)
                    .setPositiveButton("CLOSE", (dialog, which) -> {
                        dialog.dismiss();
                    })
                    .show();
        } else {
            new AlertDialog.Builder(getCurrentActivity())
                    .setTitle(title)
                    .setMessage(message)
                    .setPositiveButton("OK", (dialog, which) -> {
                        sendEvent();
                    })
                    .setNegativeButton("CLOSE", (dialog, which) -> {
                        dialog.dismiss();
                    })
                    .show();
        }
    }

    private void sendEvent() {
        WritableMap params = Arguments.createMap();
        params.putBoolean("click", true);
        getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("onClick", params);
    }
}
