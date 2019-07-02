import createStore from 'redux-zero';

const tareas = [
    {
        id: 0,
        titulo: 'Limpieza',
        descripcion: 'Sacar la basura',
        responsable: 'juan'
    },
    {
        id: 1,
        titulo: 'Ordenar',
        descripcion: 'ordenar cosas',
        responsable: 'pedro'
    }
];

const inicializarState = {
    tarea : tareas
}

const store = createStore(inicializarState);
export default store;