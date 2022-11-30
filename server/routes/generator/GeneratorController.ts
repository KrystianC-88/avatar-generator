import { Router, Request, Response } from 'express';
import AvatarModel from '../../models/AvatarModel'
import img2base64 from '../../utility/img2base64';
import generateUUID from '../../utility/UUIDgenerator';
import path from 'path'

interface IResponseAvatar {
  name: string,
  layers: [
    {
      category: string, parts:{img: string, isChosen: boolean}[]
    }
  ]
}


class GeneratorController {
  public path = '/avatar';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getAvatar);
    this.router.get(`/dummydata`, this.dummyPopo);
    // this.router.post(this.path, this.createAPost);
  }
  
  private getAvatar = async (request: Request, response: Response) =>{
    const {id} = request.params;
    const avatar = await AvatarModel.findOne({uuid: id})

    if(avatar === null) return response.send({message:"not found"})

    // @ts-ignore
    let responseAvatar: IResponseAvatar = {name:"DEVELOPMENT NAME", layers:[]}
    
    avatar?.layers.forEach(layerInfo =>{
      const StoragePath = path.join(__dirname, '..', '..', '..', 'avatars', avatar.uuid)

      
      let index = -1;
      const partsBase64 = layerInfo.parts.map(part => {
        const img = 'data:image/png;base64,'+img2base64(`${StoragePath}/${part}.png`)
        index++
        return {img: img, isChosen: index == 0 ? true : false}
      })
      
      responseAvatar.layers.push({category:layerInfo.categoryName, parts:[...partsBase64]})
    })
    
    response.send(responseAvatar)
  }

  
private dummyPopo = async (request: Request, response: Response) =>{
  const avatar = new AvatarModel({
    uuid: 'DEV_IMGS',
    layers:[
      {
        categoryName: 'body',
        parts:['body']
      },
      {
        categoryName: 'eyes',
        parts:['eyes1', 'eyes2']
      },
      {
        categoryName: 'mouth',
        parts:['mouth1', 'mouth2']
      }
    ]
  })

  await avatar.save()
  response.send({msg:"succesefule"})
}

}
 
export default GeneratorController;
