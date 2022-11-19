export interface IAvatar {
    name: string,
    layers: ILayer[]
}

export interface ILayer {
    category: string, parts: string[]
}