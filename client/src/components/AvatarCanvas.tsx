import React, {useEffect, useRef} from 'react'

function AvatarCanvas(){

    const canvasRef = useRef<HTMLCanvasElement>();
    
    useEffect(()=>{
        const context = canvasRef.current.getContext
    },[])


    return(
        <>
            <canvas ref={canvasRef}/>
        </>
    )
}

export default AvatarCanvas


