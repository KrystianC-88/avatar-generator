import React, { useState } from 'react'
import { ILayer } from '../../interfaces/avatarInterface';

interface props {
    avatarLayers: ILayer[],
    currentLayers: string[]
}

function AvatarControlls({ avatarLayers, currentLayers }: props) {

    const handleChange = () => {

    }

    return (
        <div>
            {avatarLayers.map(layer => {
                return (
                    <>
                        <div className='overflow-auto bg-yellow-700'>
                            <h1 className=' font-semibold text-white w-full bg-black'>{layer.category}</h1>
                            {
                                layer.parts.map(part => {
                                    const isChosen = currentLayers.find(layer => layer==part) ? 'border-green-500' : 'border-yellow-500' 
                                    return (
                                        <>
                                            <div className={`border inline-block ${isChosen} m-2 hover:cursor-pointer`}>
                                                <img src={`data:image/png;base64,${part}`} className={"w-40"} />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default AvatarControlls;