import express from "express";

//database
import User from "./database/models/user.js";
import sequelize from "./database/util/database.js";
import Immobilie from "./database/models/immobilie.js";
import FurtherImages from "./database/models/furtherimages.js";

//auth
import admin_login from "./auth/admin_login.js";
import verifyJWT from "./auth/verifyJWT.js";
import checkPermissionMiddleware from "./auth/checkPermissionMiddleware.js";

import Sequelize from "sequelize";

const app = express();
app.use(express.json({ limit: '450mb'}));

const PORT = 5000;
const appName = process.env.APP_NAME;

//init one and only admin user
sequelize.sync({ force: true})/*
.then((result) => {
    return User.create({ username: "administrator", admin: true, password: "1111" });
})*/

app.post('/api/admin/login', admin_login);

app.use('/api/verifyJWT', verifyJWT);

app.post('/api/admin/saveNewImmoForm', checkPermissionMiddleware, async (req, res) => {
    const { mapImage64, titleImage64, furtherImages64, formData } = req.body;
    saveImmobilie(mapImage64, titleImage64, formData, furtherImages64, res);
    
})

const saveImmobilieFurtherImages = async (furtherImages64, objectnr, res) => {
    
}

const saveImmobilie = async (mapImage64, titleImage64, formData, furtherImages64, res) =>{
    let success = false;
    try{
        const immo = await Immobilie.create({
            objectnr: formData.objectnr || 0,
            city: formData.city || "",
            description: formData.description || "",
            house: formData.house ?? true,
            price: formData.price || 0,
            squareMeters: formData.squareMeters || 0,
            bathroom: formData.bathroom ?? true,
            supermarket: formData.supermarket ?? true,
            electricity: formData.electricity ?? true,
            water: formData.water ?? true,
            pool: formData.pool ?? false,
            garden: formData.garden ?? false,
            atOcean: formData.atOcean ?? false,
            paymentDuration: formData.paymentDuration || 0,
            buildingFinished: formData.buildingFinished || "01.2026",
            uberDasProjekt: formData.uberDasProjekt || "",
            uberStandort: formData.uberStandort || "",
            mapImage: mapImage64,
            titleImage: titleImage64
        })
        if(immo.objectnr){
            success = true;
        }
    }catch(err){
        //Logging
        return handleDatabaseInsertError(formData.objectnr, err, res);
    }

    try{
        let i = 0;
        for(const currentImage of furtherImages64){
            console.log(i);
            i++;
            const a = await FurtherImages.create({
                image: currentImage,
                objectnr: formData.objectnr
            })
            console.log(a);
        }

        const responseString = `Neues Object ${formData.objectnr} wurde erfolgreich gespeichert!`;
        return res.json({ message: responseString });
    }catch(err){
        return handleDatabaseInsertError(objectnr, err, res);
    }
    if(success){
        return saveImmobilieFurtherImages(furtherImages64, formData.objectnr, res);
    }
}

const handleDatabaseInsertError = (objectnr, err, res) => {
    if(err instanceof Sequelize.UniqueConstraintError){
        return res.json({ message: `Das Objekt mit der Objektnr ${objectnr} existiert bereits`})
    }else if (err instanceof Sequelize.ValidationError) {
        // Validierung schlägt fehl
        return res.json({ message: `Validierungsfehler: ${err.errors.map(e => e.message).join(', ')}` });
    } else if (err instanceof Sequelize.ForeignKeyConstraintError) {
        // Falscher ForeignKey-Wert
        return res.json({ message: `Ungültige Referenz: Prüfe die Foreign-Key-Beziehungen.` });
    } else if (err instanceof Sequelize.DatabaseError) {
        // Allgemeiner DB-Fehler (Syntaxfehler, falsche Spalten etc.)
        return res.json({ message: `Datenbankfehler: ${err.message}` });
    } else if (err instanceof Sequelize.ConnectionError) {
        return res.json({ message: `Datenbankverbindung fehlgeschlagen. Bitte später erneut versuchen.` });
    }
    return res.json({ message: `Ein unbekannter Fehler für das Objekt ${objectnr} auf. Errorname: ${err.name} | Errorcode: ${err.message}`})
}


app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});
