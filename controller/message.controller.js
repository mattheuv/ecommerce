import { filterMessages } from "../service/message.service.js"
class MessageController {
// usar async await
   


    chat (req, res) {
        res.render("chat")
    }

      async chatFilter(req, res) {
        const {email} = req.params
       res.status(200).json(await filterMessages(email))
    }

}

export default MessageController