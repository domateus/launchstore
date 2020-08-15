const LoadProductsService = require('../services/LoadProductService')
const User = require('../model/User')

const mailer = require('../lib/mailer')

const email = (seller, product, buyer) => `
    <h2>Olá ${seller.name}</h2>
    <p>Você tem um novo pedido de compra de seu produto</p>
    <p>Produto: ${product.name}</p>
    <p>Preço: ${product.formattedPrice}</p>
    <p><br/><br/></p>
    <p>Dados do comprador</p>
    <p>${buyer.name}</p>
    <p>${buyer.email}</p>
    <p>${buyer.address}</p>
    <p>${buyer.cep}</p>
    <p><br/><br/></p>
    <p><strong>Entre em contato com o comprador para finalizar a venda!</strong></p>
    <p><br/><br/></p>
    <p>Atenciosamente, equipe Launchstore</p>
`

module.exports = {
    async post(req, res) {
        try {
            const product = await LoadProductsService.load('product', { where: {
                id: req.body.id
            }})

            const seller = await User.findOne({where: {id: product.user_id}})

            const buyer = await User.findOne({where: {id: req.session.userId}})

            await mailer.sendMail({
                to: seller.email,
                from: 'no-reply@launchstore.com.br',
                subject: 'Novo pedido de compra',
                html: email(seller, product, buyer)
            })

            return res.render('orders/success')

        } catch (error) {
            console.error(error)
            return res.render('orders/error')
        }
        
    }
}