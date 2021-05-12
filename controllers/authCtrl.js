
const singin = (req, res) => {
    res.send('signin');
}

const singup = (req, res) => {
    res.send('signup');
}

export default {
    singin,
    singup
}