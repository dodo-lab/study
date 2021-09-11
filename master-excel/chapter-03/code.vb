' 全角カタカナに変換
Function KATAKANAW(文字列)
    KATAKANAW = StrConv(文字列, vbKatakana + vbWide)
End Function

' 半角カタカナに変換
Function KATAKANAN(文字列)
    KATAKANAN = StrConv(文字列, vbKatakana + vbNarrow)
End Function

' ひらがなに変換
Function HIRAGANAW(文字列)
    HIRAGANAW = StrConv(文字列, vbHiragana + vbWide)
End Function
