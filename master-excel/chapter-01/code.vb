Sub 納品書データクリア()
'
' 納品書データクリア Macro
'

'
    Range("E2").Select
    Selection.ClearContents
    Range("A3:B3").Select
    Selection.ClearContents
    Range("D3:E3").Select
    Selection.ClearContents
    Range("B8:D12").Select
    Selection.ClearContents
    Range("E2").Select
End Sub

' 金額と章税率から税込金額を求める関数
Function ZEIKOMI(金額, 消費税率)
    ZEIKOMI = 金額 + 金額 * 消費税率
End Function