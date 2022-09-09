const { Op } = require('sequelize') //importando os operadores
const User = require('../models/User')

module.exports = {
    async show(req,res){
        // encontrar todos os usuários que tem email que termina com @rocketseat.com.br
        //Desses usuários buscar todos que moram na Rua Guilherme Gembala
        // Desses usuários buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@rocketseat.com.br'
                }
            },
            include: [
                { association: 'addresses', where: {street: 'Rua Guilherme Gembala'}}, //endereços
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }
                    } 
                }, // tecnologias
            ]
        })

        return res.json(users)
    }
}