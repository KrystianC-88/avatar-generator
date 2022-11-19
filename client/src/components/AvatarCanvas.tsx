import React, {useEffect, useLayoutEffect, useRef} from 'react'
import useQuery from 'react-query'
import {ILayer} from '../interfaces/avatarInterface'

function AvatarCanvas(layers: string[]){


    
    
    const canvasRef = useRef<HTMLCanvasElement>();
    
    useEffect(()=>{
        const canvasFunc = async () => {
            
            const context = canvasRef.current?.getContext('2d');     
            context?.clearRect(0, 0, context.canvas?.width, context.canvas?.height);

            const AVATAR = layers.map(av => {
                const img = new Image()
                img.src = `data:image/png;base64,${av}`
                return img
            })
            
            AVATAR.forEach(part =>{
                part.onload = () =>{
                    context?.drawImage(part, 0, 0, context.canvas.width, context.canvas.height);
                }
            })
            
        }

        canvasFunc()
        
    },[])


    return(
        <>
            {/*//@ts-ignore*/}
            <canvas ref={canvasRef} width="400" height="400"/>
        </>
    )
}

export default AvatarCanvas


