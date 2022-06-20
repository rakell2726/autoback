const jugadorController = {};

jugadorController.getAll = (req,res) =>{
    //logica
    res.json({"nombre":"david","apellido":"pineda","edad":"18"});
}

module.exports = jugadorController

