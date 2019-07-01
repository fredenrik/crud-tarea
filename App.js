import React from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';


export default class App extends React.Component{
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         titulo: 0,
    //         descripcion: 0,
    //     };
    //
    //     this.buttonClick = this.buttonClick.bind(this);
    //     this.updateValue = this.updateValue(this);
    // }

  render() {
    return (
        <View style={styles.container}>
          <Text>Agregar Titulo</Text>
          <View style={styles.containerButton}>
            <TextInput value={state.name}
                       onChangeText={updateTituloValue}
                       style={{height: 30, width: 100, borderColor: 'gray', borderWidth: 1}} />
          </View>
            <Text>Agregar Descriocion</Text>
            <View style={styles.containerButton}>
                <TextInput value={state.name}
                           onChangeText={updateDescripcionValue}
                           style={{height: 30, width: 100, borderColor: 'gray', borderWidth: 1}} />
            </View>
          <Button title="Agregar" onPrees={agregarTarea} />

            <View>
                <TextInput value={state.titulo}/>
                <TextInput value={state.descripcion}/>
            </View>
        </View>
    );
  }
}
const arrayTareas = [];
const state = {
    titulo: '',
    descripcion: ''
}

const updateTituloValue = (val) => {
    state.titulo = val
}
const updateDescripcionValue = (val) => {
    state.descripcion = val
}

const agregarTarea = () => {
    arrayTareas.push(this.state);
}

const eliminarTarea = (pos) => {
    arrayTareas.splice(1,pos)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    backgroundColor: '#fff',
    margin: 5,
  },
});