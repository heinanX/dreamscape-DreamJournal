import { Request, Response } from "express";
import { LanguageModel } from "./langModel";

export const createLanguage = async(
    req: Request,
    res: Response
) => {
    try {
        const { language } = req.body;
        const formattedData = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();

        const newLang = await LanguageModel.create( { language: formattedData } );
        res.status(201).json(newLang);
    } catch (error) {
        res.status(404).json(error);
    }
}

export const getLanguages = async(
    req: Request,
    res: Response
) => {
    try {
        const langs = await LanguageModel.find( );
        res.status(201).json(langs);
    } catch (error) {
        res.status(404).json(error);
    }
}