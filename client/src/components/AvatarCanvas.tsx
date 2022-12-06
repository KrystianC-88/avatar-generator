import React, {useEffect, useLayoutEffect, useRef} from 'react'
import useQuery from 'react-query'
import {IAvatar} from '../interfaces/avatarInterface'
import generateImageElement from '../utility/generateImageElement';

interface props{
    layersIMG: string[]
}

function AvatarCanvas({layersIMG}: props){
    console.warn("reload")
    const canvasRef = useRef<HTMLCanvasElement>();

    const canvasDrawImages =  () => {  
        const context = canvasRef.current?.getContext('2d');     
        context?.clearRect(0, 0, context.canvas?.width, context.canvas?.height);
        
        const AVATAR: HTMLImageElement[] = layersIMG.map(layer => generateImageElement(layer))
        
        AVATAR.forEach(layer =>{
            context?.drawImage(layer, 0, 0, context.canvas.width, context.canvas.height);}
        )        
        
    }

    canvasDrawImages();


    return(
        <>
            {/*//@ts-ignore*/}
            <canvas ref={canvasRef} width="400" height="400"/>
        </>
    )
}

export default AvatarCanvas


