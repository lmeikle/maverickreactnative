# Maverick React Native

My first react native app (using Expo)

### Instructions

`yarn`<br />
Installs the dependencies

`yarn web`<br />
Starts the web client

### Notes

https://facebook.github.io/react-native/docs/getting-started

Install the Expo CLI (you could also use Xcode or Android Studio)
   - need Node 10 LTS or greater installed
   - npm install -g expo-cli
   - expo init maverick-react-native
   - Install the Expo client app on your phone
		- ensure using the same wifi network!
		- and use Tunnel not Lan (at work)
   - there is also an IDE if you want

#####Running your app on a simulator or virtual device<br/>
Expo CLI allows you to run your React Native app on a physical device without setting up a development environment. 
If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions 
for "React Native CLI Quickstart" to learn how to install Xcode or set up your Android development environment.

`yarn android`<br />
To run in a android emulator

`yarn ios`<br />
To run in a ios emulator (macOS only)
Before running your app on iOS, make sure you have CocoaPods installed and initialize the project:<br />
`cd maverickreactnative/ios`<br />
`pod install`

#### WebView
Added a WebView to the native app only ie App.js vs App.native.js. 
Therefore it's only visible when running on device/emulator, as it's not in the web one 
( as react-native-web doesnt support it out the box).
https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md
