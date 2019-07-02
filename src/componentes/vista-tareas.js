'use strict'
import React, {
    Component,
    View,
    Text, TextInput, Button, StyleSheet
} from 'react-native';
import {
    actualizarRegTarea,
    eliminarRegTarea,
    agregarRegTareas} from "../metodos/crud-tareas";

class VistaTareas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Agregar Titulo</Text>
                <View style={styles.containerButton}>
                    <TextInput value={state.name}
                               style={{height: 30, width: 100, borderColor: 'gray', borderWidth: 1}} />
                </View>
                <Text>Agregar Descripcion</Text>
                <View style={styles.containerButton}>
                    <TextInput value={state.name}
                               style={{height: 30, width: 100, borderColor: 'gray', borderWidth: 1}} />
                </View>
                <Button title="Agregar" onPrees={agregarRegTareas} />
            </View>
        );
    }
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