const service = {}
const model = require('../../config/models')

service.getAllMahasiswa = async(data) => {
    let result = await model.td_users.findAll()

    return result
}

module.exports = service