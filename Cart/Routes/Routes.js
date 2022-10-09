const router = require("express").Router;

let user = {
    username: null,
    email: null,
    mob: null,
    password: null
};

router.post("/signup", (req, res) => {
    
    user = {
        username: req.body.username,
        email: req.body.email,
        mob: req.body.mob,
        password:req.body.password

    }
    res.send("signup successful");

});


router.post("/login", (req, res) => {
    if (req.body.username == user.username && req.body.password == user.password) {
        res.send("login successful");
        
    }
    else {
        res.send("Login failed");

    }

})

router.get("/home", (req, res) => {
    res.send("Home Page");
});

router.post("/faculty", (req, res) => {
    res.send("1.Sanjoy 2.Shakul 3.Aishwariya");
});

router.get("*", (req, res) => {
    res.send("Page does not exists!");
});


module.exports = router
