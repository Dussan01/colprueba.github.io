import Role from "../models/Role";
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";



export const signup = async(req, res) => {
    const { email, nombres, apellidos, telefono, password, roles } = req.body;
    console.log(req.body)
    const newUser = new User({
        email,
        password: await User.encryptPassword(password),
        nombres,
        apellidos,
        telefono
    });

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "usuario" })
        newUser.roles = [role._id]
    }
    const savedUser = await newUser.save()
    console.log(savedUser)
    res.status(200).render('principal')
}


export const signin = async(req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles");
    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
    const macthPassword = await User.comparePassword(req.body.password, userFound.password);
    if (!macthPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" });



    res.status(200).render('principal')

}



// APIs =====================================00

export const signupJson = async(req, res) => {
    const { email, nombres, apellidos, telefono, password, roles } = req.body;
    console.log(req.body)
    const newUser = new User({
        email,
        password: await User.encryptPassword(password),
        nombres,
        apellidos,
        telefono
    });
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "usuario" })
        newUser.roles = [role._id]
    }
    const savedUser = await newUser.save()
    console.log(savedUser)
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400,
    })
    res.status(200).json({ token })
}


export const signinJson = async(req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles");
    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
    const macthPassword = await User.comparePassword(req.body.password, userFound.password);
    if (!macthPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" });
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400
    })
    res.json({ token })

}