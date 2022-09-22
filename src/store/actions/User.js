export const userId = "Guest";

const register = (user) => {
    try {
        return user;
    } catch (err) {
        throw err;
    }
};

export const RegisterUser = (user) => ({
    type: "REGISTER_USER",
    payload: register(user),
});
