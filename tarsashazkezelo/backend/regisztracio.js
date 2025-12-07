const express = require("express");
const router = express.Router();
const kapcsolat = require("./kapcsolat");

router.post("/", (req, res) => {
    const { nev, email, jelszo } = req.body;

    
    if (!nev || !email || !jelszo) {
        return res.status(400).json({ error: "Hiányzó adatok!" });
    }

    const sql = `
        INSERT INTO felhasznalok (nev, email, jelszo)
        VALUES (?, ?, ?)
    `;

    kapcsolat.query(sql, [nev, email, jelszo], (err, result) => {
        if (err) {
            console.error("Hiba:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }

        res.json({ message: "Sikeres regisztráció!", id: result.insertId });
    });
});

module.exports = router;

