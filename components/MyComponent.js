import React from 'react';
import {Text, View, StyleSheet, Button, Alert, TextInput} from 'react-native';

class MyComponent extends React.Component{
  state= {
    text: 'This is my Component object.',
    addMyText: '',
    all: []
    
    }

    //Display 'all' array.
    renderAll= ()=>{
      return this.state.all.map( (t, index)=>{
        return(
          <Text key={index} onPress={()=>{this.deleteItem(t)}}>
            {t} - {index+1}</Text>
        )}
      )
    }

    //Add a string to 'all' array.
    addToAll= ()=>{
      var singleText= this.state.addMyText;
      var allText= this.state.all;
      allText.push(singleText);
      this.setState({all: allText, addMyText: ''});
    }

    deleteItem= (t)=>{
      var all= this.state.all;
      var item= all.indexOf(t); //Finds item in 'all' array.
      all.splice(item, 1);      //Delete item.
      this.setState({all: all}); //Update array.
    }

  clickMeComponent= ()=>{
    Alert.alert(
      'Alert Title',
      'welcome to my App...',
      [
        {text: 'Cancel', onPress:()=>console.log('Cancel')},
        {text:'OK', onPress:()=> this.setState({text:'One text'})}
      ]
      );
  }

  render(){
    return(
      <View style={style.container}>
        <Text style={style.paragraph}>{this.state.text}</Text>
        <TextInput style={style.myTextInput} onChangeText={(text)=>this.setState({text: text})}/>        
        <Text style={style.paragraph}>This is your List</Text>
        <TextInput style={style.myTextInput} onChangeText={(text)=>this.setState({addMyText: text})} value={this.state.addMyText}/>
        <Button title="Render All" onPress={this.addToAll}/>
        

        {this.renderAll()}
        <Button title="Click Me"  onPress={this.clickMeComponent}/>
      </View>
    )
  }      
}


export default MyComponent;

const style= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    backgroundColor: '#D5D5D5',
    padding: 1,
    marginTop: 10
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2F2F2F'    
  },
  myTextInput:{
    height: 30,
    borderColor: 'blue',
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white'
  }
});
