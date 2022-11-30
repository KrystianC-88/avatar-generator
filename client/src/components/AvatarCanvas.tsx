import React, {useEffect, useLayoutEffect, useRef} from 'react'
import useQuery from 'react-query'
import {IAvatar} from '../interfaces/avatarInterface'

interface props{
    layers: string[]
}

function AvatarCanvas({layers}: props){
    

    const canvasRef = useRef<HTMLCanvasElement>();

    useEffect(()=>{
        const canvasFunc = async () => {
            
            const context = canvasRef.current?.getContext('2d');     
            context?.clearRect(0, 0, context.canvas?.width, context.canvas?.height);

            
            
            const AVATAR: HTMLImageElement[] = layers.map(layer => {
                const img = new Image()

                img.src = `${layer}`

                return img
            })
            
            AVATAR.forEach(layer =>{
                layer.onload = () =>{
                    context?.drawImage(layer, 0, 0, context.canvas.width, context.canvas.height);
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


