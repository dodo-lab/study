Sub アンケート回答登録()
    ' 入力内容を回答表の一番下に転記
    n = Range("L1").CurrentRegion.Rows.Count + 1
    Cells(n, 12).Value = Range("I3").Value
    Cells(n, 13).Value = Range("I6").Value
    Cells(n, 14).Value = Range("I9").Value
    Cells(n, 15).Value = Range("I10").Value

    ' 入力内容のクリア
    Range("H3").Value = 0
    Range("H6").Value = 0
    Range("H9").Formula = "=NA()"
    Range("H10").Formula = "=NA()"
End Sub
