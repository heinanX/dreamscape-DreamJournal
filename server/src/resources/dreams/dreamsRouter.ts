import { Router } from 'express'
import { validate } from '../_middlewares/validation';
import { dreamsJoiSchema } from './dreamsModel';
import { getDreams, getDream, createDream, deleteDream } from './dreamsController';
export const dreamsRouter = Router();

dreamsRouter.get('/', getDreams);
dreamsRouter.get('/:id', getDream);
dreamsRouter.post('/create', validate(dreamsJoiSchema), createDream);
dreamsRouter.delete('/:id', deleteDream);