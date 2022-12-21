const router = require('express').Router();

router.get("/", (req, res) => {
    res.json({
        id: '2323',
        title: 'hello',
        imgUrl: 'lasdfjlkajsdf'
    })
})


router.get('/all', (req, res) => {
    res.json({
        data: [
            {
                title: 'hellow'
            },
            {
                title: 'hi'
            }
        ]
    })
})

module.exports = router;