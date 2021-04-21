import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

//Rotas Settings
routes.post('/settings', settingsController.store)


export { routes };