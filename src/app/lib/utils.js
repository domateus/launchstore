module.exports = {
    date(timestamp) {
<<<<<<< HEAD

        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes = date.getMinutes()
=======
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)
>>>>>>> fba2c0b426da7b0b49dc41b9c898b555015b2fa5

        return {
            year, 
            month,
            day,
<<<<<<< HEAD
            hour,
            minutes,
=======
>>>>>>> fba2c0b426da7b0b49dc41b9c898b555015b2fa5
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    },
<<<<<<< HEAD
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price/100)
    }
=======
>>>>>>> fba2c0b426da7b0b49dc41b9c898b555015b2fa5
}