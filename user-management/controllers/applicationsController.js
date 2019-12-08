// let application = require('../models/applications');
var db = require('../db');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

// INDEX
exports.index = function (req, res, next) {
    let response_msg = req.query.message;
    db.query('SELECT * FROM db_user', function (err, rows, fields) {
        if (err) throw err;
        res.render('index', {
            title: 'Manajemen Pengguna',
            message: response_msg,
            data: rows
        });
    })
}

// LIHAT
exports.lihat = function (req, res, next) {
    let id = req.params.id;
    db.query('SELECT * FROM db_user WHERE ?', { id: id }, function (err, results) {
        if (err) throw err;
        let result = results[0]
        res.render('lihat', {
            title: 'Detail Pengguna',
            data: result
        });
    })
}

// TAMBAH
exports.tambah = function (req, res, next) {
    res.render('tambah', { title: 'Tambah Pengguna' });
}

exports.tambah_pengguna = function (req, res, next) {
    let data = {
        nama: req.body.nama,
        jabatan: req.body.jabatan,
        divisi: req.body.divisi,
        userid: req.body.userid,
        password: bcrypt.hashSync(req.body.password1, salt),
        alamat: req.body.alamat,
        tanggal: req.body.tanggal
    }

    db.query('INSERT INTO db_user SET ?', data, function (err, result) {
        if (err) {
            res.redirect('/index?message=Data gagal ditambah!');
        } else {
            res.redirect('/index?message=Data berhasil ditambah!');
        }
    })
}

// UBAH
exports.ubah = function (req, res, next) {
    let id = req.params.id
    db.query('SELECT * FROM db_user WHERE ?', { id: id }, function (err, results) {
        if (err) throw err;
        let result = results[0]
        res.render('ubah', {
            title: 'Ubah Data Pengguna',
            data: result
        });
    });
};

exports.ubah_pengguna = function (req, res, next) {
    let id = req.body.id;
    let data = {
        nama: req.body.nama,
        jabatan: req.body.jabatan,
        divisi: req.body.divisi,
        alamat: req.body.alamat,
        tanggal: req.body.tanggal
    };

    db.query('UPDATE db_user SET ? WHERE id = ' + id, data, function (err, result) {
        if (err) {
            res.redirect('/index?message=Data gagal diubah!');
        } else {
            res.redirect('/index?message=Data berhasil diubah!');
        }
    })
}

// PASSWORD
exports.password = function (req, res, next) {
    let id = req.params.id
    res.render('password', {
        title: 'Ubah Password Pengguna',
        id: id
    });
};

exports.password_pengguna = function (req, res, next) {
    let id = req.body.id;
    let data = {
        password: bcrypt.hashSync(req.body.password1, salt),
    };

    db.query('UPDATE db_user SET ? WHERE id = ' + id, data, function (err, result) {
        if (err) {
            res.redirect('/index?message=Password gagal diubah!');
        } else {
            res.redirect('/index?message=Password berhasil diubah!');
        }
    })
}

// HAPUS
exports.hapus = function (req, res, next) {
    let id = req.params.id;
    db.query('DELETE FROM db_user WHERE ?', { id: id }, function (err, result) {
        if (err) {
            res.redirect('/index?message=Data gagal dihapus!');
        } else {
            res.redirect('/index?message=Data berhasil dihapus!');
        }
    })
}