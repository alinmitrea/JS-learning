REM build and copy the dist folder to ../.././json-server/public
gulp json-server-deploy

REM start the json server
cd ..\..\json-server\
start_server.bat