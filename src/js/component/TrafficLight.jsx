import React, { useState } from "react";

const TrafficLight = () => {

    // Estado para controlar cuál luz está encendida
    const [selectedLight, setSelectedLight] = useState(null);
    const [showViolet, setShowViolet] = useState(false)

    // el funcionamiento del boton que basicamente es un loop infinito
    const toggleLight = () => {
        if (selectedLight === null) {
            setSelectedLight('red');
        } else if (selectedLight === 'red') {
            setSelectedLight('yellow');
        } else if (selectedLight === 'yellow') {
            setSelectedLight('green');
        } else if (selectedLight === 'green' && showViolet) {
            setSelectedLight('violet');
        } else { setSelectedLight('red')}
console.log(selectedLight);
    };
 /*
    const toggleLight = () => {
        if (selectedLight === null) {
            setSelectedLight('red');
        } else if (selectedLight === 'red') {
            setSelectedLight('yellow');
        } else if (selectedLight === 'yellow') {
            setSelectedLight('green');
        } else if (selectedLight === 'green' && showViolet) {
            setSelectedLight('violet');
        } else { setSelectedLight('red')}
console.log(selectedLight);
    };
 */
    const colorExtra = () => {
        setShowViolet(!showViolet)
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <div className="card text-center border border-secondary-subtle">
                    <div className="card-body d-flex flex-column align-items-center  ">

                        <div className={`light red ${selectedLight === 'red' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('red')}></div>

                        <div className={`light yellow ${selectedLight === 'yellow' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('yellow')}></div>

                        <div className={`light green ${selectedLight === 'green' ? 'selected' : ''}`}
                            onClick={() => setSelectedLight('green')}></div>
                        {showViolet && (
                            <div className={`light violet ${selectedLight === 'violet' ? 'selected' : ''}`}
                                onClick={() => setSelectedLight('violet')}></div>
                        )}
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
                <button className="btn btn-secondary mt-3 ms-2 border border-white" onClick={colorExtra}>
                    Color extra
                </button>
            </div>
        </>
    );
};



export default TrafficLight;