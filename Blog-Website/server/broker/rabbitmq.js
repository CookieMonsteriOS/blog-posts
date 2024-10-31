import amqp from 'amqplib';
import { emailBlogPublishConfrimation } from './email/email.js';

export const publishSuccessWorker = async () =>{ 
    try {
    
    const connection = await amqp.connect('amqp://localhost') //Connect to RabbitMQ
    const channel = await connection.createChannel()
    await channel.assertQueue('blog_published_notifcation')

    channel.consume('blog_published_notifcation', async (msg) => {
        if (msg !== null) {
          const notification = JSON.parse(msg.content.toString());
          if (notification.channel === 'email') {
            emailBlogPublishConfrimation('Blog Published at')
          } 
          channel.ack(msg);
        }
      });


   } catch (error) {
    
   }  
} 