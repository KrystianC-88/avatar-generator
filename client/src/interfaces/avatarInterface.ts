export interface IAvatar {
    name: string,
    layers: ILayer[]
}

export interface ILayer {

    category: string, parts: IPart[]
}

export interface IPart{
    img: string,
    isChosen: boolean

}