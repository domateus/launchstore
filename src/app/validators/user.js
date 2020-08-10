const User = require('../model/User')

async function post(req, res, next) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.render('user/register', {
                user: req.body,
                error: 'Preencha todos os campos'
            })
        }
    }

    let { email, cpf_cnpj, password, passwordRepeat } = req.body

    cpf_cnpj = cpf_cnpj.replace(/\D/g, "")

    const user = await User.findOne({
        WHERE: { email },
        OR: { cpf_cnpj }
    })

    if (user) return res.render('user/register', {
        user: req.body,
        error: 'Usuário já cadastrado'
    })

    if (password !== passwordRepeat) return res.render('user/register', {
        user: req.body,
        error: 'Senhas diferentes'
    })
    
    next()
}

module.exports = {
    post
}