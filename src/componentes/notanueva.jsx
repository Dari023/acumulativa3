export const NotaNueva = ({ nota, eliminarNota }) => {
    const color = nota.importante;

    if (color) {
        return (
            <div className="nota-importante nota">
                <button onClick={() => eliminarNota(nota.id)}>X</button>
                <div className="contenido">
                    <h2>{nota.titulo}</h2>
                    <p>{nota.descripcion}</p>
                </div>
            </div>
        );
    }
    return (
            <div className="nota-Noimportante nota">
                <button onClick={() => eliminarNota(nota.id)}>X</button>
                <div className="contenido">
                    <h2>{nota.titulo}</h2>
                    <p>{nota.descripcion}</p>
                </div>
            </div>
        );
    
}


