crypto = require('crypto');

/**
 * Returns password hash for given password.
 * @param {string} password
 */
function hashPassword(password)
{
    const salt = '2lorYmXyAovKNiK8IAfyTmed';
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const value = hash.digest('hex');

    return value;
}

module.exports.hashPassword = hashPassword;
