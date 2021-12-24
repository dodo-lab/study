package com.example.linearlayout_aboutme

import android.content.Context
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.inputmethod.InputMethodManager
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.done_button).setOnClickListener { addNickname(it) }
        findViewById<TextView>(R.id.nickname_text).setOnClickListener { updateNickname(it) }
    }

    private fun addNickname(view: View) {
        val nicknameEdit = findViewById<EditText>(R.id.nickname_edit)
        val nicknameText = findViewById<TextView>(R.id.nickname_text)

        nicknameText.text = nicknameEdit.text

        view.visibility = View.GONE
        nicknameEdit.visibility = View.GONE
        nicknameText.visibility = View.VISIBLE

        // キーボードを非表示にする
        val inputMethodManager = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        inputMethodManager.hideSoftInputFromWindow(view.windowToken, 0)
    }

    private fun updateNickname(view: View) {
        val nicknameEdit = findViewById<EditText>(R.id.nickname_edit)
        val doneButton = findViewById<Button>(R.id.done_button)

        view.visibility = View.GONE
        nicknameEdit.visibility = View.VISIBLE
        doneButton.visibility = View.VISIBLE
    }
}