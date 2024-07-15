export const NotaNueva = ({ nota, eliminarNota }) => {
    const color = nota.importante;

    if (color) {
        return (
            <div className="nota-importante">
                <button onClick={() => eliminarNota(nota.id)}>X</button>
                <h2>{nota.titulo}</h2>
                <p>{nota.descripcion}</p>
            </div>
        );
    }
    return (
            <div className="nota-Noimportante">
                <button onClick={() => eliminarNota(nota.id)}>X</button>
                <h2>{nota.titulo}</h2>
                <p>{nota.descripcion}</p>
            </div>
        );
    
}


