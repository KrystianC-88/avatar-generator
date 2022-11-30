import apiClient from './apiClient'
import {IAvatar} from '../interfaces/avatarInterface'
import {QueryFunctionContext} from 'react-query'


export async function fetchAvatar(avatarID: string){

    console.log(`fetching avatar`)
    const response = await apiClient.get(`http://localhost:4000/avatar/${avatarID}`)
    const avatar: IAvatar = response.data;

    return avatar;
}