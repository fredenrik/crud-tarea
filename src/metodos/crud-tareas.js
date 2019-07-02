import store from './state/store'

export const agregarRegTareas = (titulo, desc, resp) => {
    let registros = store.getState().tarea;
    const nuevoReg = registro.concat({
        id: registros.length,
        titulo: titulo,
        descripcion: desc,
        responsabe: resp
    });
    store.setState({
        tarea: nuevoReg
    });
};

export const eliminarRegTarea = (indice) => {
    const registros = store.getState().tarea
        .filter((item, idx) => idx != indice);
    store.setState({
        tarea: registros
    })
};

export const actualizarRegTarea = (indice, titulo, desc, resp) => {
    let registros = store.getState().tarea
    const regActualizado = {
        id: indice,
        titulo: titulo,
        descripcion: desc,
        responsable: resp
    }
    registros[indice] = regActualizado;
    store.setState({
        tarea: registros
    })
};
