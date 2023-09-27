import { sendMail } from '../../utils/mailer';
import { thankYouForApplyingForJob, applyForJobToHr } from '../../utils/templates';
import upload from 'express-fileupload';
import nextConnect from 'next-connect';

async function handleApplyForJobRequest(data) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const payload = {
                to: data.email,
                subject: 'Applied for an Opportunity',
                html: thankYouForApplyingForJob(data)
            };
            await sendMail(payload);
    
            const payload2 = {
                to: 'career@braininventory.com', //HR team email - Static
                // to: 'h.ali@braininventory.com',
                subject: 'New Applicant',
                html: applyForJobToHr(data),
                attachments: [data.file]
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


const apiRoute = nextConnect();
apiRoute.use(upload());
apiRoute.post( async (req, res) => {
    await handleApplyForJobRequest({ ...req.body, file: { filename:req.files.doc.name, content: req.files.doc.data} })
    .then((resp) => {
        console.log(resp);
        if (resp) {
            res.status(200).json({
                success: true,
                message: 'Email Sent!'
            })
        }
    }).catch((error) => {
        res.status(400).json({
            success: false,
            error: error
        })
    });
})
export const config = {
    api: {
      bodyParser: false,
    },
  }

export default apiRoute;