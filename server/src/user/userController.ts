import { NextFunction, Request, Response} from 'express'
import { UserModel } from './userModel'

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const { username, password, mail} = req.body
            const newUser = {
                username: username,
                password: password,
                mail: mail 
            }
            const user = await UserModel.create(newUser)
            res.status(200).json(user)
    } catch (error) {
        res.status(200).json(error)
    }
}