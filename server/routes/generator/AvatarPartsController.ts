import { Router, Request, Response } from 'express';
import AvatarModel from '../../models/AvatarModel'

class GeneratorController {
  public path = '/avatar/';
  public router = Router();

  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getPart);
    // this.router.post(this.path, this.createAPost);
  }
  
  private getPart = async (request: Request, response: Response) =>{
    const {avatarID} = request.body;
    const avatar = await AvatarModel.find({uuid: avatarID})
    if(avatar){
      return response.json(avatar);
    }
    
  }
}
 
export default GeneratorController;