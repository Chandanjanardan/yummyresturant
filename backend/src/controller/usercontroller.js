const UserModel = require("../model/db.model")

const registerController = async (req, res) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    let userobj = {
        name: name,
        password: password,
        email: email
        
    }

    try {
        const mail = await UserModel.find({ email })

        if (mail.length !== 0) {
            console.log(mail)
            res.json({
                message: `${email} already exist`
            })
        }
        else {
            let data = await UserModel(userobj).save()
            if (data) {
                return res.json({
                    message: "data inserted successfully"
                })
            }
            return res.json({
                message: "data not inserted"
            })
        }
    }
    catch (error) {
        return res.json({
            message: "some error"
        })
    }
}
module.exports = {
    registerController
}