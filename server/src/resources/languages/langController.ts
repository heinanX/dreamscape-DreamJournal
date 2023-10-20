import { Request, Response, NextFunction } from "express";
import { LanguageModel } from "./langModel";

export const getLanguages = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const langs = await LanguageModel.find( );
        res.status(200).json(langs);
    } catch (error) {
        next(error);
    }
}

export const getLanguage = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const language = await LanguageModel.findOne({ _id: req.params.id });
        res.status(200).json(language);
    } catch (error) {
        next(error);
    }
}

export const createLanguage = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { language } = req.body;
        const formattedData = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();

        const newLang = await LanguageModel.create( { language: formattedData } );
        res.status(201).json(newLang);
    } catch (error) {
        next(error);
    }
}

export const deleteLanguage = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await LanguageModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json( 'language deleted' );
    } catch (error) {
        next(error);
    }
}