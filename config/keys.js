if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://mdimdha:mdimdha@cluster0.6nau9.mongodb.net/?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/meven_auth",
        secret: 'yoursecret'
    };
}