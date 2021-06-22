import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function CreateCourse (request: Request, response: Response)  {

    CreateCourseService.execute("NodeJS", 10, "Eduardo");

    return response.send();

}