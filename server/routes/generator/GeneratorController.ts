import { Router, Request, Response } from 'express';
import AvatarModel from '../../models/AvatarModel'
import generateUUID from '../../utility/UUIDgenerator';


class GeneratorController {
  public path = '/avatar';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(`${this.path}/:id`, this.getAvatar);
    // this.router.post(this.path, this.createAPost);
  }
  
  private getAvatar = async (request: Request, response: Response) =>{
    const {id} = request.params;
    const avatar = await AvatarModel.find({uuid: id})
    
  }

}
 
export default GeneratorController;