import React from 'react'
import AvatarCanvas from '../../components/AvatarCanvas'
import { fetchAvatar } from '../../fetchers/avatarFetcher'
import { useQuery } from 'react-query'
import { IAvatar, ILayer} from '../../interfaces/avatarInterface'





function Generator() {

    const TEMP_AVATARID = "DEV_IMGS"
    const { isLoading, isSuccess, isError, data, error } =
        useQuery<IAvatar, Error>('query-getavatar', async () => {
            return await fetchAvatar(TEMP_AVATARID)
        }, { retry: 2, staleTime: 60000, });


    const name = data?.name
    console.log(name);
    return (
        <>
            {isSuccess ? (
                <>
                    <h1>{name}</h1>
                    <AvatarCanvas {...data?.layers} />
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