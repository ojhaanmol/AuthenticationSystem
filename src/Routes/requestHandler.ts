import {NextFunction, Request,Response} from 'express';

type ControllerFunction = (body:Request['body'], headers:Request['headers'], params:Request['params'], query:Request['query'])=>Promise<object|Number|String>

const handleRequest = (controllerFunction : ControllerFunction) =>{
    return  async( request:Request, response:Response, next:NextFunction ) => {
        try {
            const{ body, headers, params, query } = request;
            const controllerfunctionOutput = await controllerFunction( body, headers, params, query );
            response.json( {statusCode:1,statusMessage:'Success',data:controllerfunctionOutput} );
            return;
        } catch (error) {
            
            response.json( {statusCode:0,statusMessage:'Failure'} ); 
            console.log(`do proper Error Handling for ${__filename}`)
        }
    }
}

export {handleRequest}