import React, { useRef } from 'react';

const ModelViewer = () => {
    const modelRef = useRef(null);

    return (
        <>
            <div>Model Viewer</div>
            <model-viewer
                src={'/projects/Windturbine-transformed.glb'}
                className="model-viewer"
                alt="A wind turbine model"
                exposure="0.008"
                autoplay
                camera-controls=""
                ar=""
                ar-modes="webxr"
                style={{ width: '100%', height: '500px', backgroundColor: 'black' }}
                ref={(ref) => {
                    modelRef.current = ref;
                }}
            >
            </model-viewer>
        </>
    )
}

export default ModelViewer;
