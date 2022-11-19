import React, { useState } from 'react'
import { fetchAvatar } from '../../fetchers/avatarFetcher'
import { useQuery } from 'react-query'
import { IAvatar, ILayer} from '../../interfaces/avatarInterface'

// components
import AvatarCanvas from '../../components/AvatarCanvas'
import AvatarControlls from './AvatarControlls'


function Generator() { 

    const [avatarLayers, setAvatarLayers] = useState<ILayer[] | undefined>();
    const [chosenLayers, setChosenLayers] = useState<string[] | undefined>();

    const TEMP_AVATARID = "DEV_IMGS"
    const { isLoading, isSuccess, isError, data, error } =
        useQuery<IAvatar, Error>('query-getavatar', async () => {
            return await fetchAvatar(TEMP_AVATARID)
        }, { retry: 2, staleTime: 60000, 
            onSuccess:() =>{
                setAvatarLayers(data?.layers)
        } 
    });


    const avatarTitle = data?.name


    return (
        <>
            {isSuccess ? (
                <>
                    <h1>{avatarTitle}</h1>
                    <AvatarCanvas {...chosenLayers} />
                    <AvatarControlls />
                    {console.log({avatarLayers})}
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