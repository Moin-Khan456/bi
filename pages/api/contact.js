import { sendMail } from '../../utils/mailer';
import { queryToSales, thankYouForContactingWithSales } from '../../utils/templates';


async function handleContactUsRequest(data) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const payload = {
                to: data.email,
                subject: 'Thank you for the Inquiry',
                html: thankYouForContactingWithSales(data)
            };
            await sendMail(payload);
    
            const payload2 = {
                // to: 'h.ali@braininventory.com', //Sales team email - Static
                to: 'askus@braininventory.com', //Sales team email - Static
                subject: 'New Inquiry',
                html: queryToSales(data),
            }
            
            await sendMail(payload2);

            resolve(true)
        } catch (error) {
            reject({
                error: error?.message || 'Email not sent!'
            });
        }
    })
}


export default async function handler(req, res) {
    if (req.method === 'POST') {
        handleContactUsRequest(JSON.parse(req.body)).then((resp) => {
            if (resp) {
                res.status(200).json({ success: true })
            }
        })
        .catch((error) => {
            res.status(500).json({error: error})
        });
    }
}