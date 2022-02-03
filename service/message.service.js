import Message from '../model/message.model.js'

export async function saveMessage(msg){
    try{
            const newMsg = new Message(msg)
            await newMsg.save()
    }catch(err){
        console.err(err)
    }
}


export async function readMessage(){
    try{
        const msg = await Message.find()
        return msg
    }catch(err){
        console.err(err)
    }
}

export async function filterMessages(email){
    try{
        return await Message.find({email: email})
    }catch(err){
        console.err(err)
    }
}