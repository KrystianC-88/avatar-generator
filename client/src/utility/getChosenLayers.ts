import { ILayer } from "../interfaces/avatarInterface";

export default function getChosenLayers(layers: ILayer[]) : string[]{
    
    let chosenLayers: string[] = []
    layers.forEach(layer =>{
        const chosenLayer = layer.parts.find(part => part.isChosen === true)
        if(chosenLayer === undefined) return
        chosenLayers.push(chosenLayer?.img)
    })

    return chosenLayers
}