'use strict'


const Service = require('egg').Service;
let md5 = require('md5-node');

class UserService extends Service {


    async login(username, password) {
        try {

            let passwordMd5 = md5(password);
            const user = await this.app.model.User.findOne({
                where: {
                    username
                }
            })
            if (user) {
                let psd = user.dataValues.password
                let usr = user.dataValues.username
                if (username == usr && passwordMd5 == psd) {
                    const token = this.app.jwt.sign({
                        username: username
                    }, this.app.config.jwt.secret);
                    return token
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            return false
        }
    }
}

module.exports = UserService;