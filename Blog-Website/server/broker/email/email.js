 import { SMTPClient } from "emailjs";   

 const client = new SMTPClient({
    user: '',
	password: '',
	host: '',
	ssl: true,
 })

export const emailBlogPublishConfrimation =(message) => {
    try {
        client.send({
            text: message,
            from: '', // Your email
            to: '', // Author email
            subject: 'Blog pubslished',
        })
    } catch (error) {
        console.log('email send failed')    
    }

}
