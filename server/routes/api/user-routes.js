const router = require('express').Router();

const {
    createUser,
    getSingleUser,
    login,
    saveProperty,
    removeProperty,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveProperty);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/properties/:propertyId').delete(authMiddleware, removeProperty);

module.exports = router;