import React, { useEffect, useState } from 'react'
import { fetchAvatar } from '../../fetchers/avatarFetcher'
import { useQuery } from 'react-query'
import { IAvatar, ILayer } from '../../interfaces/avatarInterface'

// components
import AvatarCanvas from '../../components/AvatarCanvas'
import AvatarControlls from './components/AvatarControlls'

function Generator() {

    const [avatarLayers, setAvatarLayers] = useState<ILayer[]>([]);
    const [chosenLayers, setChosenLayers] = useState<string[]>([]); // list of img<base64> of chosen parts

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

    const ChosenLayersHandler = (newAvatarLayers: ILayer[]) => {setAvatarLayers(prev => newAvatarLayers)}

    const generateChosenLayers = () => {
        const Layers = [...avatarLayers];

        let newChosenLayers: string[] = [];
        Layers.forEach(layer =>{
            const chosenPart = layer.parts.find(part => part.isChosen === true);
            if(chosenPart !== undefined) newChosenLayers.push(chosenPart.img)
        })
        console.log({newChosenLayers})
        console.warn("new chosen layers");
        setChosenLayers(prev => newChosenLayers);
    }
    useEffect(generateChosenLayers, [avatarLayers])
    
    const avatarTitle = data?.name
    
    return (
        <>
            {isSuccess ? (
                <>
                    <h1>{avatarTitle}</h1>

                    <AvatarCanvas layersIMG={[...chosenLayers]} />
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