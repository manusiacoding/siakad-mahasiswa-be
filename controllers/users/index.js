const controller = {}
const service = require('./service')

controller.getAllMahasiswa = async(req, res) => {
    try {
        let result = await service.getAllMahasiswa(req.body)

        res.status(200).json({
            code: 200,
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = controller