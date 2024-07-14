import { useRef, useState } from "react";
import { NotaNueva } from "./notanueva";

export const Notas = () => {
    const tituloRef = useRef();
    const descricionRef = useRef();
    const [esImportante, setEsImportante] = useState(false);
    const [notas, setNotas] = useState([]);

    const agregarNota = () => {
        const nuevaNota = {
            titulo: tituloRef.current.value,
            descripcion: descricionRef.current.value,
            importante: esImportante
        };
        setNotas([...notas, nuevaNota]);
        tituloRef.current.value = '';
        descricionRef.current.value = '';
        setEsImportante(false);
    }

  
    alert("agrego una nota nueva")

    return(
        <div>
            <h1>Post It Simulator</h1>
            <div>
                <input ref={tituloRef} type="text" placeholder="titulo"/>
            </div>
            <div>
                <input ref={descricionRef} type="text" placeholder="descricion"/>
            </div>
            <label>
                <input type="checkbox" checked={esImportante}/>
            </label> importante
            <button type="submit" onClick={agregarNota}>Agregar Nota</button>
            <div>
                {notas.map(nota => <NotaNueva key={nota.titulo} nota={nota} />)}
            </div>

        </div>
    )
}
