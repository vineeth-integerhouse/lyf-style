# IntegerHouse Mobile App Template

Please follow these steps to customize this template while creating new project.

Note:- THIS DOC IS INCOMPLETE, STILL UNDER PROCESSING OF UPDATING

## Change Project Name 

1. /package.json 
   1. Change `templateapp` to project name `new-project-name`. 
2. /CHANGELOG.md
   1. Change `TemplateApp` to `ProjectName` in first line of the file.

### Change Application Name & Identifier

Please run the following command to change app name & application id. Bundle identifier will change for Android only, for iOS please update in XCode.

`npx react-native-rename <newName> -b <bundleIdentifier>`
