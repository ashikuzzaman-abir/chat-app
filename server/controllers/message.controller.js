const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = {
  createConversation: async (req, res) => {
    try{
      const { createdWith }= req.body;
      const createdBy = req.user.id;
      // const 
      const conversation = await prisma.conversations.create({
        data:{
          createdBy: createdBy,
        }
      })
      
    } catch(err){
      if (err) console.log(err);
    };
  }

}