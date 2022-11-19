import React, {useEffect, useLayoutEffect, useRef} from 'react'
import useQuery from 'react-query'
import {ILayer} from '../interfaces/avatarInterface'

function AvatarCanvas(layers:ILayer[]){

    console.warn(layers)
    const avatarBase64 = [layers[0].parts[0], layers[1].parts[1], layers[2].parts[1]]

    
    
    //@ts-ignore
    const canvasRef = useRef<HTMLCanvasElement>();
    
    useEffect(()=>{
        const canvasFunc = async () => {
            // @ts-ignore
            const context = canvasRef.current.getContext('2d');     
            context?.clearRect(0, 0, context.canvas?.width, context.canvas?.height);

            const AVATAR = avatarBase64.map(av => {
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
            HELLO CANVAS
        </>
    )
}

export default AvatarCanvas


