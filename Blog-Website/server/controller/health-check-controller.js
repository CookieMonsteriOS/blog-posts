import {dateTime} from '../utils/generic-utils.js'

export const healthCheck = async(request,response) => {
    const formattedDate = dateTime()
    
    const healthCheck = {
        uptime: process.uptime(),
        message:'OK',
        timeStamp:formattedDate
    }

    try {
        response.send(healthCheck)
    } catch (error) {
        healthCheck.message = error
        response.status(503).send() 
    }      

}