const express = require('express')
const router = express.Router()

const {
    registerUser,
    loginUser,
} = require("../controllers/userController");

router.post("/", loginUser);
router.post("/registeration_page", registerUser);

// router.get('/login_page', (req, res) => {
//     res.render('login_page')
// });

module.exports = router;