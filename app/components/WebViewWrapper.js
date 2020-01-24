import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingOverlay from './LoadingOverlay';

export default class WebViewWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingVIsible: true
    };

    this.onLoadWebviewIos = this.onLoadWebviewIos.bind(this);
    this.onLoadWebviewAndroid = this.onLoadWebviewAndroid.bind(this);

    this.src = 'https://www.fundapps.co/';
  }

  onLoadWebviewIos(navState) {
    if (Platform.OS === 'ios') {
      this.setState({isLoadingVIsible: false})
    }
  }

  onLoadWebviewAndroid(navState) {
    if (Platform.OS === 'android') {
      if (navState.loading === false) {
        this.setState({isLoadingVIsible: false});
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: this.src}}
          style={{flex: 1, width: Dimensions.get('window').width}}
          onNavigationStateChange={this.onLoadWebviewAndroid}
          onLoad={this.onLoadWebviewIos}
        />
        {this.state.isLoadingVIsible ? (
          <LoadingOverlay animating={true}/>
        ) : null}
      </View>
    );
  }
}
