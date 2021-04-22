import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';
 
class SettingsController{

  async store(request: Request, response: Response){
    const { chat, username } = request.body;
    
    const settingsService = new SettingsService();

    try{
      const settings = await settingsService.store({ chat, username})

      return response.json(settings)
    }
    catch(err){
      return response.status(400).json({
        error: err.message
      })
    }
  }

}

export { SettingsController }