import { useRef, useState } from "react";
import { NotaNueva } from "./notanueva";
import "../css/app.css"

export const Notas = () => {
    const tituloRef = useRef();
    const descricionRef = useRef();
    const [esImportante, setEsImportante] = useState(false);
    const [notas, setNotas] = useState([]);

    const agregarNota = () => {
        const nuevaNota = {
            id: notas,
            titulo: tituloRef.current.value,
            descripcion: descricionRef.current.value,
            importante: esImportante
        };
        console.log(nuevaNota);
        setNotas([...notas, nuevaNota]);
        // alert("se agrego una nota")
        
        //para limpiar
        tituloRef.current.value = '';
        descricionRef.current.value = '';
        setEsImportante(false);

    }
    
    // para saber si es true o false
    const importanteSioNO = (event) => {
        const marca =  event.target.checked;

        if (marca === true) {
            setEsImportante(true);
        } else {
            setEsImportante(false);
        }
    }
    // eliminar mota
    const eliminarNota = (id) => {
        const nuevasNotas = notas.filter(nota => nota.id !== id);
        setNotas(nuevasNotas);
        // alert("se elimino una nota")
    };
    
    
    
    
    return(
        <div className="principal">
            <h1>Post It Simulator</h1>
            <div>
                <input ref={tituloRef} type="text" placeholder="titulo"/>
            </div>
            <div>
                <input ref={descricionRef} type="text" placeholder="descricion"/>
            </div>
            <label>
                <input type="checkbox" checked={esImportante} onChange={importanteSioNO}/>
            </label> importante
            <button type="submit" onClick={agregarNota}>Agregar Nota</button>
            <div>
                {notas.map(nota => <NotaNueva key={nota.id} nota={nota} eliminarNota={eliminarNota}/>)}
            </div>

        </div>
    )
}
