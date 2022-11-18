import React, {useEffect, useLayoutEffect, useRef} from 'react'
import useQuery from 'react-query'
import mergeImages from 'merge-images'
import {ILayer} from '../interfaces/avatarInterface'

function AvatarCanvas(layers:ILayer[]){

    console.warn(layers)

    //@ts-ignore
    const canvasRef = useRef<HTMLCanvasElement>();
    
    useLayoutEffect(()=>{
        //@ts-ignore
        const context = canvasRef.current.getContext('2d');
        
        
    },[])


    return(
        <>
            {/*//@ts-ignore*/}
            <canvas ref={canvasRef}/>
            HELLO CANVAS
        </>
    )
}

export default AvatarCanvas


