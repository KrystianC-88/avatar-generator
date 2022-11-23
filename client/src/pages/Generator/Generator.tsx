import React, { useState } from 'react'
import { fetchAvatar } from '../../fetchers/avatarFetcher'
import { useQuery } from 'react-query'
import { IAvatar, ILayer } from '../../interfaces/avatarInterface'

// components
import AvatarCanvas from '../../components/AvatarCanvas'
import AvatarControlls from './components/AvatarControlls'



function Generator() {

    const [avatarLayers, setAvatarLayers] = useState<ILayer[]>([]);


    
    const TEMP_AVATARID = "DEV_IMGS"
    const { isLoading, isSuccess, isError, data, error } =
        useQuery<IAvatar, Error>('query-getavatar', async () => {
            return await fetchAvatar(TEMP_AVATARID)
        }, {
            retry: 2, staleTime: 60000,
            onSuccess: (res: IAvatar) => {
                setAvatarLayers(prev => res.layers)
            }
        });

    const avatarTitle = data?.name
    
    const ChosenLayersHandler = (newAvatarLayers: ILayer[]) => {
        setAvatarLayers(prev => newAvatarLayers)
    }

    // const CanvasLayers = getChosenLaters()

    return (
        <>
            {isSuccess ? (
                <>
                    <h1>{avatarTitle}</h1>

                    {/* <AvatarCanvas layers={chosenLayers} /> */}
                    <AvatarControlls avatarLayers={avatarLayers} updateCurrentLayers={ChosenLayersHandler}/>
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