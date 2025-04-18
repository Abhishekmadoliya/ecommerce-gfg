const userController = async (req, res) => {
    try {
        res.send("hello world");
    } catch (err) {
        console.log("error in user controller", err);
    }
};

// Export using exports object (CommonJS style)
exports.userController = userController;
