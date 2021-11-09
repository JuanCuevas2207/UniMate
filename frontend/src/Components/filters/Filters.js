const Filters = (props) =>{
    return(
        <div className={'p-4 row card'}>
            <h2 className={'mb-4'}>Filtros de busqueda</h2>
            <h5>Rango de costo</h5>
            <h5>Ubicación</h5>
            <h5>Fecha de disponibilidad</h5>
            <div className={'row mb-3'}>
                <div className={'col-6'}>
                    <label>Fecha de inicio</label>
                    <input type="date" id="start" name="start"></input>
                </div>
                <div className={'col-6'}>
                    <label>Fecha fin</label>
                    <input type="date" id="end" name="end"></input>
                </div>
            </div>                
            <h5 className={'mb-3'}><input type="checkbox" id="furnished"></input> ¿Amoblado?</h5>
            <h5>Tipo de ambiente</h5>
            <p className={'mb-3'}><input type="checkbox" id="university"></input> Universitario</p>
        </div>
    );
};

export default Filters;