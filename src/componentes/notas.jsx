import { useRef, useState, useEffect } from "react";
import { NotaNueva } from "./notanueva";
import "../css/app.css"

export const Notas = () => {
    const tituloRef = useRef();
    const descricionRef = useRef();
    const [esImportante, setEsImportante] = useState(false);
    const [notas, setNotas] = useState([]);
    const key = "localstorage"

    const agregarNota = () => {

        // const titulo = tituloRef.current.value;
        const descripcion = descricionRef.current.value;
    
        // if (titulo === "" && descripcion === "") {
        //     alert("Los campos están vacíos");
        //     return
        // } else if (titulo === "") {
        //     alert("El título está vacío");
        //     return
        if (descripcion === "") {
            alert("La descripción es obligatoria");
            return
        }
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

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem(key))
        if (stored) {
            setNotas(stored)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(notas))
    },[notas])
    
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
        <div>
            <h1 className="titulo">Post It Simulator</h1>
            <div className="principal">
                <div className="tides">
                    <input ref={tituloRef} type="text" placeholder="titulo"/>
                    <input className="segun2" ref={descricionRef} type="text" placeholder="descricion"/>
                </div>
                <div className="impor">
                    <label>
                        <input className="form-check-input" type="checkbox" checked={esImportante} onChange={importanteSioNO}/>
                    </label> importante
                </div>
                   
                <div className="agrenote">
                    <button className="btn btn-dark" type="submit" onClick={agregarNota}>Agregar</button>
                </div>
            </div>
            <div className="contenedor">
                {notas.map(nota => <NotaNueva key={nota.id} nota={nota} eliminarNota={eliminarNota}/>)}
            </div>

        </div>
    )
}
