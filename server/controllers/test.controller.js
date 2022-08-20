const {getDocs, collection, doc} =require("firebase/firestore")
const {db} = require("../firebase/app.firebase")

module.exports = {
    
    selectUser: async (req, res) => {
        try {
            const qrySelector = await getDocs(collection(db, 'users'))
            const users = [];
            console.log(Array.isArray(qrySelector));
            const data= qrySelector.data()
            console.log(data)



		} catch (ex) {
			console.log(ex);
            res.status(500).send("data couldn't found")
		}
    }
}