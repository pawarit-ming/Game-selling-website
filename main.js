/* Import modules */
const dotenv = require("dotenv");
const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const fs = require('fs');
dotenv.config();
const app = express();
const router = express.Router();
const cp = require("cookie-parser");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cp());
app.use(router)


/* Connection to MySQL */
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

/* Connect to DB */
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`);
});

/* Create path */
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use('/image', express.static(path.join(__dirname, 'image')));

app.use('/little_png', express.static(path.join(__dirname, 'little_png')));

/* Create route */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/main.html'));
})

router.get('/main.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/main.html'));
})

router.get('/html/search.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/search.html'));
})

router.get('/html/about_us.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/about_us.html'));
})


// admin login
router.get('/html/adminlogin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/adminlogin.html'));
})

router.post('/form-login', function (req, res) {
    const { login_email, login_passwd } = req.body;

    const sql = 'SELECT email, pass_word FROM admin_ WHERE email = ? AND pass_word = ?';
    connection.query(sql, [login_email, login_passwd], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            console.log('Login successful!');
            res.cookie('user', { email: login_email, password: login_passwd });
            console.log({ email: login_email, password: login_passwd });
            res.redirect('/html/admin.html');

        } else {
            console.log('Login failed. Invalid email or password.');
            res.redirect('/html/adminlogin.html')
        }
    });
});

router.get('/html/Action%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Action Game.html'));
})

router.get('/html/Open%20Word%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Open Word Game.html'));
})

router.get('/html/Farming%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Farming Game.html'));
})

router.get('/html/Sport%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Sport Game.html'));
})

router.get('/html/Violent%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Violent Game.html'));
})

router.get('/html/under500bahtgame.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/under500bahtgame.html'));
})

router.get('/html/500-1000%20game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/500-1000 game.html'));
})

router.get('/html/1000-1500%20game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/1000-1500 game.html'));
})

router.get('/html/1500-2000%20game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/1500-2000 game.html'));
})

router.get('/html/2012-2014%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2012-2014 Game.html'));
})

router.get('/html/2015-2017%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2015-2017 Game.html'));
})

router.get('/html/2018-2020%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2018-2020 Game.html'));
})

router.get('/html/2021-2023%20Game.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2021-2023 Game.html'));
})

router.get('/html/God%20of%20war.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/God of war.html'));
})

router.get('/html/God%20of%20war.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/God of war.html'));
})

router.get('/html/Fifa24.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Fifa24.html'));
})

router.get('/html/EldenRing.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/EldenRing.html'));
})

router.get('/html/GtaV.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/GtaV.html'));
})

router.get('/html/ResidentEvil4.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/ResidentEvil4.html'));
})

router.get('/html/Dokapon-Kingdom.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Dokapon-Kingdom.html'));
})

router.get('/html/Stardew.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Stardew.html'));
})

router.get('/html/Sekiro.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Sekiro.html'));
})

router.get('/html/NBA%202K24.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/NBA 2K24.html'));
})

router.get('/html/Spider-Man.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Spider-Man.html'));
})

router.get('/html/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/admin.html'));
})

router.get('/html/search%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/search admin.html'));
})

router.get('/html/about_us%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/about_us admin.html'));
})

router.get('/html/updateitem.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/updateitem.html'));
})


router.get('/products', function (req, res) {
    connection.query('SELECT * FROM product', function (error, results) {
        if (error) throw error;
        return res.send({ data: results });
    });
});



// insert product
router.get('/html/additem.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/additem.html'));
})

router.post('/form-insert', (req, res) => {
    const { item_id, item_name, price, yr, tag, image } = req.body;

    const sql = "insert into product SET item_id = ?, item_name = ?, price = ?, yr = ?, tag = ?, image = ?"
    connection.query(sql, [item_id, item_name, price, yr, tag, image], (err, result) => {
        if (err) {
            console.error('Error insert data:', err);
            res.status(500).send('Error insert data');
            return;
        }
        console.log('Data insert successfully');
        res.redirect('/html/updateitem.html');
    });
});

router.post('/insert-product', function (req, res) {
    let product = req.body.product;

    if (!product) {
        return res.status(400).send({ error: true, message: 'Please provide product information' });
    }
    connection.query("INSERT INTO product SET ? ", [product], function (error, results) {
        if (error) throw error;
        return res.send('New created successfully.');
    });
});
// Testing insert a new product
// method: post
// URL: http://localhost:3000/insert-product
// body: raw JSON
// {
//     "product":{
//         "item_id": 20,
//         "item_name": "Hogwarts Legacy",
//         "price": 1890,
//         "yr": 2023,
//         "tag": "Action,Open World",
//         "image": "https://drive.google.com/uc?id=1fAHRyZXzkkW3hDFIDlz5X6gLLlRLw3rU"
//     }
// }


// update product
router.get('/html/edititem.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/edititem.html'));
})

router.post('/form-update', (req, res) => {
    const { item_id, item_name, price, yr, tag, image } = req.body;

    const sql = "update product SET item_name = ?, price = ?, yr = ?, tag = ?, image = ? where item_id = ?";
    connection.query(sql, [item_name, price, yr, tag, image, item_id], (err, result) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('Error updating data');
            return;
        }
        console.log('Data updated successfully');
        res.redirect('/html/updateitem.html');
    });
});

router.put('/update-product', function (req, res) {
    let product_info_id = req.body.product.item_id;
    let product_info = req.body.product;

    if (!product_info || !product_info_id) {
        return res.status(400).send('Please provide information');
    }
    connection.query("UPDATE product SET ? WHERE item_id = ?", [product_info, product_info_id], function (error, results) {
        if (error) throw error;
        return res.send('updated successfully.')
    });
});
// Testing update a product
// method: put
// URL: http://localhost:3000/update-product
// body: raw JSON
// {
//     "product":{
//         "item_id": 20,
//         "item_name": "Hogwarts Legacy",
//         "price": 1290,
//         "yr": 2023,
//         "tag": "Action,Open World",
//         "image": "https://drive.google.com/uc?id=1fAHRyZXzkkW3hDFIDlz5X6gLLlRLw3rU"
//     }
// }


// delete product
router.get('/html/delitem.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/delitem.html'));
})

router.post('/form-delete', (req, res) => {
    const { item_id } = req.body;

    const sql = "delete from product where item_id = ?";
    connection.query(sql, [item_id], (err, result) => {
        if (err) {
            console.error('Error delete data:', err);
            res.status(500).send('Error delete data');
            return;
        }
        console.log('Data delete successfully');
        res.redirect('/html/updateitem.html');
    });
});

router.delete('/delete-product', function (req, res) {
    let product_info_id = req.body.item_id;

    if (!product_info_id) {
        return res.status(400).send('Please provide item_id');
    }
    connection.query('DELETE FROM product WHERE item_id = ?', [product_info_id], function (error, results) {
        if (error) throw error;
        return res.send('deleted successfully.');
    });
});
// Testing delete a product
// method: delete
// URL: http://localhost:3000/delete-product
// body: raw JSON
// {
//     "item_id": 20
// }


router.get('/html/edit%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/edit admin.html'));
})


// insert admin
router.get('/html/ad%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/ad admin.html'));
})

router.post('/form-add-admin', (req, res) => {
    const { ad_id, ad_name, email, pass_word } = req.body;

    const sql = "insert into admin_ SET ad_id = ?, ad_name = ?, email = ?, pass_word = ?";
    connection.query(sql, [ad_id, ad_name, email, pass_word], (err, result) => {
        if (err) {
            console.error('Error insert data:', err);
            res.status(500).send('Error insert data');
            return;
        }
        console.log('Data insert successfully');
        res.redirect('/html/edit%20admin.html');
    });
});

router.post('/insert-admin', function (req, res) {
    let admin_ = req.body.admin_;

    if (!admin_) {
        return res.status(400).send({ error: true, message: 'Please provide admin_ information' });
    }
    connection.query("INSERT INTO admin_ SET ? ", [admin_], function (error, results) {
        if (error) throw error;
        return res.send('New created successfully.');
    });
});

// update admin
router.get('/html/ch%20ad.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/ch ad.html'));
})

router.post('/form-update-admin', (req, res) => {
    const { ad_id, ad_name, email, pass_word } = req.body;

    const sql = "update admin_ SET ad_name = ?, email = ?, pass_word = ? where ad_id = ?";
    connection.query(sql, [ad_name, email, pass_word, ad_id], (err, result) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('Error updating data');
            return;
        }
        console.log('Data update successfully');
        res.redirect('/html/edit%20admin.html');
    });
});

router.put('/update-admin', function (req, res) {
    let admin_info_id = req.body.admin_.ad_id;
    let admin_info = req.body.admin_;

    if (!admin_info || !admin_info_id) {
        return res.status(400).send('Please provide information');
    }
    connection.query("UPDATE admin_ SET ? WHERE ad_id = ?", [admin_info, admin_info_id], function (error, results) {
        if (error) throw error;
        return res.send('updated successfully.')
    });
});


// delete admin
router.get('/html/del%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/del admin.html'));
})

router.post('/form-delete-admin', (req, res) => {
    const { ad_id } = req.body;

    const sql = "delete from admin_ where ad_id = ?";
    connection.query(sql, [ad_id], (err, result) => {
        if (err) {
            console.error('Error delete data:', err);
            res.status(500).send('Error delete data');
            return;
        }
        console.log('Data delete successfully');
        res.redirect('/html/edit%20admin.html');
    });
});

router.delete('/delete-admin', function (req, res) {
    let admin_info_id = req.body.ad_id;

    if (!admin_info_id) {
        return res.status(400).send('Please provide ad_id');
    }
    connection.query('DELETE FROM admin_ WHERE ad_id = ?', [admin_info_id], function (error, results) {
        if (error) throw error;
        return res.send('deleted successfully.');
    });
});


router.get('/html/Action%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Action Game Admin.html'));
})

router.get('/html/Open%20World%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Open World Game Admin.html'));
})

router.get('/html/Farming%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Farming Game Admin.html'));
})

router.get('/html/Sport%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Sport Game Admin.html'));
})

router.get('/html/Violent%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Violent Game Admin.html'));
})

router.get('/html/under500bahtgame%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/under500bahtgame admin.html'));
})

router.get('/html/500-1000%20game%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/500-1000 game admin.html'));
})

router.get('/html/1000-1500%20game%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/1000-1500 game admin.html'));
})

router.get('/html/1500-2000%20game%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/1500-2000 game admin.html'));
})

router.get('/html/2012-2014%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2012-2014 game admin.html'));
})

router.get('/html/2015-2017%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2015-2017 game admin.html'));
})

router.get('/html/2018-2020%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2018-2020 game admin.html'));
})

router.get('/html/2021-2023%20Game%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/2021-2023 game admin.html'));
})

router.get('/html/god%20of%20war%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/god of war admin.html'));
})

router.get('/html/Fifa24%20admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Fifa24 admin.html'));
})

router.get('/html/EldenRing%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/EldenRing Admin.html'));
})

router.get('/html/GtaV%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/GtaV Admin.html'));
})

router.get('/html/ResidentEvil4%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/ResidentEvil4 Admin.html'));
})

router.get('/html/Dokapon-Kingdom%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Dokapon-Kingdom Admin.html'));
})

router.get('/html/Stardew%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Stardew Admin.html'));
})

router.get('/html/Sekiro%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Sekiro Admin.html'));
})

router.get('/html/NBA%202K24%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/NBA 2K24 Admin.html'));
})

router.get('/html/Spider-Man%20Admin.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/Spider-Man Admin.html'));
})

/* Bind our server to the port */
app.listen(process.env.PORT, function () {
    console.log("Server listening at Port " + process.env.PORT);
});
