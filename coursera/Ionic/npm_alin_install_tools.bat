npm install cordova ionic -g
ionic start conFusion sidemenu
ionic serve

ionic serve --lab REM see the pages in both iOS and Android

REM ionic build needs java 8: set JAVA_HOME=c:\Progra~1\Java\jdk1.8.0_45\

ionic plugin add de.appplant.cordova.plugin.local-notification
ionic plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
ionic plugin add cordova-plugin-camera
ionic plugin add org.apache.cordova.camera

cordova plugin add --save ionic-plugin-keyboard
cordova plugin add cordova-plugin-image-picker

ionic platform add android

ionic build android
ionic emulate android
ionic run android
ionic emulate android --livereload REM then type <consolelogs> to see the logs