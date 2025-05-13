@echo off
set YYYY=%date:~6,4%
set MM=%date:~3,2%
set DD=%date:~0,2%

set FOLDER=..\dashboards\%YYYY%-%MM%
set FILE=%FOLDER%\dashboard-%YYYY%-%MM%-%DD%.md

if not exist %FOLDER% mkdir %FOLDER%

copy ..\dashboards\_template_dashboard.md %FILE%

powershell -Command "(Get-Content '%FILE%') -replace '{{DATA}}', '%DD%/%MM%/%YYYY%' | Set-Content '%FILE%'"

echo Dashboard criado em: %FILE%
start "" "code" %FILE%