const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
      type: String,
      required: true,
    },
     savedProperties: [{
      type: Schema.Types.ObjectID,
      ref: "Property"}],
  },
    {
      toJSON: {
        virtuals: true,
      },
    },
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('propertyCount').get(function () {
  return this.savedProperties.length;
});

const User = model('User', userSchema);

module.exports = User;
