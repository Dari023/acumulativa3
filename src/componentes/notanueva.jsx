export const NotaNueva = ({ nota }) => {
    const color = nota.importante;
    if (color) {
        return (
            <div className="nota-importante">
                <h2>{nota.titulo}</h2>
                <p>{nota.descripcion}</p>
            </div>
        );
    }
    return (
            <div className="nota-Noimportante">
                <h2>{nota.titulo}</h2>
                <p>{nota.descripcion}</p>
            </div>
        );
    
}


