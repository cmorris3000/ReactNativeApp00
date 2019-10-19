import * as React from 'react';
import { Text, View, StyleSheet, Alert, Button} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

import MyComponent from './components/MyComponent';



export default class App extends React.Component {
  state={
    myTextTwo: 'Second text'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to get a shareable url.
        </Text>
        
        <MyComponent />        
        <Text>{this.state.myTextTwo}</Text>
        <Button title="Click Me two" onPress={()=>this.setState({myTextTwo:'Two'})} />
              
      </View>      
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
