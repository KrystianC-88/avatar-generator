import React, { useState } from 'react'
import { fetchAvatar } from '../../fetchers/avatarFetcher'
import { useQuery } from 'react-query'
import { IAvatar, ILayer } from '../../interfaces/avatarInterface'

// components
import AvatarCanvas from '../../components/AvatarCanvas'
import AvatarControlls from './AvatarControlls'

const defaultLayers = (layers: ILayer[]) =>{
    const defaultAvatar: string[] = layers.map(layer => layer.parts[0])
    return defaultAvatar
}

function Generator() {

    const [avatarLayers, setAvatarLayers] = useState<ILayer[]>([]);
    const [chosenLayers, setChosenLayers] = useState<string[]>([]);


    
    const TEMP_AVATARID = "DEV_IMGS"
    const { isLoading, isSuccess, isError, data, error } =
        useQuery<IAvatar, Error>('query-getavatar', async () => {
            return await fetchAvatar(TEMP_AVATARID)
        }, {
            retry: 2, staleTime: 60000,
            onSuccess: (res: IAvatar) => {
                setAvatarLayers(prev => res.layers)
                setChosenLayers(prev => defaultLayers(res.layers))
            }
        });


    const avatarTitle = data?.name
    
    const ChosenLayersHandler = (parts: any) => {

    }

    return (
        <>
            {isSuccess ? (
                <>
                    <h1>{avatarTitle}</h1>

                    <AvatarCanvas layers={chosenLayers} />
                    <AvatarControlls />
                </>
            ) :
                <>
                    <h1>Loading...</h1>
                </>
            }
        </>
    )
}

export default Generator