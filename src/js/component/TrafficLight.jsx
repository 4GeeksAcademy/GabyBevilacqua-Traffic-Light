import React, { useState } from "react";

const TrafficLight = () => {

    // Estado para controlar cuál luz está encendida
    const [selectedLight, setSelectedLight] = useState(null);

// el funcionamiento del boton que basicamente es un loop infinito
    const toggleLight = () => {
        if (selectedLight === null || selectedLight === 'green') {
            setSelectedLight('red');
        } else if (selectedLight === 'red') {
            setSelectedLight('yellow');
        } else if (selectedLight === 'yellow') {
            setSelectedLight('green');
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="card text-center">
                    <div className="card-body d-flex flex-column align-items-center border border-secondary-subtle">

                        <div className={`light red ${selectedLight === 'red' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('red')}></div>

                        <div className={`light yellow ${selectedLight === 'yellow' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('yellow')}></div>

                        <div className={`light green ${selectedLight === 'green' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('green')}></div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="post" />
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="base border border-secondary" />
            </div>
            <div className="container d-flex justify-content-center align-items-center">
            <button className="btn btn-secondary mt-3 border border-white" onClick={toggleLight}>
                    Cambiar luz
                </button>
            </div>
        </>
    );
};



export default TrafficLight;