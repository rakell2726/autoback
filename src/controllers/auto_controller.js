const autoController = {};
const autos = require('../autos.json')

autoController.getAll = (req,res)=>{
    //logica para listar todos los cursos
    res.json(autos);
}
autoController.create = (req,res)=>{
    //logica para crear un nuevo objeto
    const id= autos.length+1;
    const newAuto = req.body;
    newAuto["id"]= id; 
    autos.push(newAuto);
    res.json(newAuto);
}
autoController.update = (req,res)=>{
    //logica para actualizar un curso
    res.json({"mensaje":"objeto actualizado"});
}
autoController.delete = (req,res)=>{
    //logica para eliminar
    res.json({"mensaje":"objeto eliminado"});
}


module.exports = autoController