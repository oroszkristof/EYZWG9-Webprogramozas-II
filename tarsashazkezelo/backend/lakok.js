const express = require("express");
const router = express.Router();

const kapcsolat = require("./kapcsolat");


router.get("/", (req, res) => {
    const sql = "SELECT * FROM lakok";

    kapcsolat.query(sql, (err, result) => {
        if (err) {
            console.error("Hiba a lekérdezés során:", err);
            return res.status(500).json({ error: "Adatbázis hiba" });
        }
        res.json(result);
    });
});


router.post("/", (req, res) => {
    const {
        felhasznaloId,
        nev,
        lakasszam,
        emelet,
        telefonszam,
        koltseg,
        megjegyzes
    } = req.body;

    const sql = `
        INSERT INTO lakok 
        (felhasznaloId, nev, lakasszam, emelet, telefonszam, koltseg, megjegyzes)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const adatok = [
        felhasznaloId,
        nev,
        lakasszam,
        emelet,
        telefonszam,
        koltseg,
        megjegyzes
    ];

    kapcsolat.query(sql, adatok, (err, result) => {
        if (err) {
            console.error("Hiba az új lakó felvételekor:", err);
            return res.status(500).json({ error: "Adatbázis hiba" });
        }

        res.json({ message: "Lakó sikeresen felvéve!", id: result.insertId });
    });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;

    const {
        felhasznaloId,
        nev,
        lakasszam,
        emelet,
        telefonszam,
        koltseg,
        megjegyzes
    } = req.body;

    const sql = `
        UPDATE lakok SET
        felhasznaloId = ?,
        nev = ?,
        lakasszam = ?,
        emelet = ?,
        telefonszam = ?,
        koltseg = ?,
        megjegyzes = ?
        WHERE id = ?
    `;

    const adatok = [
        felhasznaloId,
        nev,
        lakasszam,
        emelet,
        telefonszam,
        koltseg,
        megjegyzes,
        id
    ];

    kapcsolat.query(sql, adatok, (err, result) => {
        if (err) {
            console.error("Hiba módosítás közben:", err);
            return res.status(500).json({ error: "Adatbázis hiba" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Nincs ilyen lakó!" });
        }

        res.json({ message: "Lakó módosítva!" });
    });
});



router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM lakok WHERE id = ?";

    kapcsolat.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Hiba törlés közben:", err);
            return res.status(500).json({ error: "Adatbázis hiba" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Nincs ilyen lakó!" });
        }

        res.json({ message: "Lakó törölve!" });
    });
});


module.exports = router;
