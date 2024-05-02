const User = require('../models/user');

class UserRepository {
    async create(data) {
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }
    async getSeleted(id, col) {
        try {
            const data = await User.find({ id: id }, col);
            return data;
        } catch (error) {
            throw error;
        }
    }
    async createBooking(id, data) {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw 'User not present';
            }
            user.pastBooking.push(data);
            user.save();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;