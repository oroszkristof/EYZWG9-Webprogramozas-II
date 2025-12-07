const express = require("express");
const router = express.Router();
const kapcsolat = require("./kapcsolat");

router.post("/", (req, res) => {
    const { email, jelszo } = req.body;

    if (!email || !jelszo) {
        return res.status(400).json({ error: "Hiányzó adatok!" });
    }

    const sql = `SELECT * FROM felhasznalok WHERE email = ? AND jelszo = ?`;

    kapcsolat.query(sql, [email, jelszo], (err, rows) => {
        if (err) {
            console.error("Hiba:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }

        if (rows.length === 0) {
            return res.status(401).json({ error: "Hibás email vagy jelszó!" });
        }

        res.json({
            message: "Sikeres bejelentkezés!",
            user: rows[0]
        });
    });
});

module.exports = router;

