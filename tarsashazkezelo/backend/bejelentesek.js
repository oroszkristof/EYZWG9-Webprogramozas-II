const express = require("express");
const router = express.Router();
const kapcsolat = require("./kapcsolat");


router.get("/", (req, res) => {
    const sql = `
        SELECT id, lakoId, tipus, leiras
        FROM bejelentesek
    `;

    kapcsolat.query(sql, (err, result) => {
        if (err) {
            console.error("Hiba a bejelentések lekérése közben:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }
        res.json(result);
    });
});

router.post("/", (req, res) => {
    const { lakoId, tipus, leiras } = req.body;

    if (!lakoId || !tipus || !leiras) {
        return res.status(400).json({ error: "Hiányzó kötelező adatok!" });
    }

    const sql = `
        INSERT INTO bejelentesek (lakoId, tipus, leiras)
        VALUES (?, ?, ?)
    `;

    kapcsolat.query(sql, [lakoId, tipus, leiras], (err, result) => {
        if (err) {
            console.error("Adatbázis hiba:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }

        res.json({
            message: "Bejelentés sikeresen felvéve!",
            id: result.insertId
        });
    });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;
    const { lakoId, tipus, leiras } = req.body;

    const sql = `
        UPDATE bejelentesek 
        SET lakoId = ?, tipus = ?, leiras = ?
        WHERE id = ?
    `;

    kapcsolat.query(sql, [lakoId, tipus, leiras, id], (err, result) => {
        if (err) {
            console.error("Hiba módosítás közben:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }

        res.json({ message: "Bejelentés módosítva!" });
    });
});


router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM bejelentesek WHERE id = ?";

    kapcsolat.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Hiba törlés közben:", err);
            return res.status(500).json({ error: "Adatbázis hiba!" });
        }

        res.json({ message: "Bejelentés törölve!" });
    });
});

module.exports = router;
