import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#000',
    width, height,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 0.15,
    fontSize: 30,
    width: 200,
    textAlign: 'center',
    color: '#fff'
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class LoadingOverlay extends Component {
  constructor(props) {
    super(props);
    this.loadingText = 'Loading Please Wait...';
  }

  render() {
    return (
      <View style={styles.overlay}>
        <Text style={styles.text}>{this.loadingText}</Text>
        <ActivityIndicator
          animating={this.props.animating}
          style={styles.activityIndicator}
          size="large"
          color='#fff'
        />
      </View>
    );
  }
}
