import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

//Rotas Settings
routes.post('/settings', settingsController.store);
//Rotas Users
routes.post('/users', usersController.store);
//Messages
routes.post('/messages', messagesController.store);
routes.get('/messages/:id', messagesController.showByUser);


export { routes };