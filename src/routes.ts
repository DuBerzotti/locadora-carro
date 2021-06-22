import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse (request: Request, response: Response)  {

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Eduardo",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Eduardo"
    });

    return response.send();

}