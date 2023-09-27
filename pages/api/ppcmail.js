import { ppcMail, ppcMailThank } from "../../utils/ppc_mail";
import { PpcTemplate, PpcThankTemplate } from "../../utils/templates";

export default function ppcContact(req, res){
    console.clear();
    const data = JSON.parse(req.body)
    return new Promise(async (resolve, reject) => {
        try {
            const payload = {
                html: PpcTemplate(data)
            };
            const payload2 = {
                email: data.email,
                fullName: data.fullName,
                html: PpcThankTemplate(data)
            };
            await ppcMail(payload);
            await ppcMailThank(payload2);

            resolve(true)
            res.status(200).json({
                success: true,
                message:'success',
            })
        } catch (error) {
            reject({
                error: error?.message || 'Email not sent!',
            });
            res.status(500).json({
                success: false,
                message: "Error"
            })
        }
    })
}
