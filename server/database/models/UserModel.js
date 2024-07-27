import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    profilePicture: {
        type: String,
        default: ''
    }
}, { collection: 'User', timestamps: true });


userSchema.pre('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;
        next();
    } catch(err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(password) {
    try {
        const isPasswordMatch = await bcrypt.compare(password, this.password);
        return isPasswordMatch;
    } catch(err) {
        throw err;
    }
};

const User = mongoose.model('User', userSchema);
export default User;
