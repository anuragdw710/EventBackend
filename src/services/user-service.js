const UserRepository = require('../repository/user-repository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            const response = this.userRepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserService;