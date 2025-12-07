const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

const lakasRoutes = require("./lakok");
app.use("/api/lakok", lakasRoutes);


const bejelentesekRoutes = require("./bejelentesek");
app.use("/api/bejelentesek", bejelentesekRoutes);

const regisztracioRoutes = require("./regisztracio");
app.use("/api/regisztracio", regisztracioRoutes);

const bejelentkezesRoutes = require("./bejelentkezes");
app.use("/api/bejelentkezes", bejelentkezesRoutes);


app.listen(PORT, () => {
    console.log(`Szerver fut: http://localhost:${PORT}`);
});
