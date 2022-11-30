import React, { useState } from 'react'
import { ILayer, IPart } from '../../../interfaces/avatarInterface';
import AvatarPart from './AvatarPart';
import uuid from 'react-uuid'

interface props {
    avatarLayers: ILayer[],
    updateCurrentLayers: Function
}

function AvatarControlls({ avatarLayers, updateCurrentLayers }: props) {

    const handleChange = (part: IPart) => {
        const tempAvatarLayers = [...avatarLayers]

        tempAvatarLayers.forEach(layer =>{
            const currentlyChosen = layer.parts.find(part => part.isChosen === true)
            const PartToChange = layer.parts.find(currPart => currPart === part)
            if(PartToChange === undefined) return;
            
            // @ts-ignore
            currentlyChosen.isChosen = false
            
            PartToChange.isChosen = true
        })

        updateCurrentLayers(tempAvatarLayers)
    }

    return (
        <div>
            {avatarLayers.map(layer => {
                return (
                    <>
                        <div key={uuid()} className='overflow-auto bg-yellow-700 w-full'>
                            <h1 className=' font-semibold text-white w-full bg-black'>{layer.category}</h1>
                            {
                                layer.parts.map(part => {
                                    return (
                                        <AvatarPart key={uuid()} part={part} clickEvent={handleChange} />
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