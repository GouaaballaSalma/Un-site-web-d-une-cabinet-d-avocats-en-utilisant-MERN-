const express=require("express");
const mysql=require('mysql');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sign"
});
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected successfully');
    }
});

app.post('/sign', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES(?, ?, ?)"; 
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => { 
        if (err) {
            return res.json("Erreur");
        }
        return res.json(data);
    });
});

app.post('/log', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Error during login:', err);
            return res.json('Erreur');
        }
        if (data.length > 0) {
            console.log('User logged in successfully:', data);
            return res.json('Success');
        } else {
            console.log('Login failed: Invalid credentials');
            return res.json('failed');
        }
    });
});

app.post('/reservation', (req, res) => {
    const sql = "INSERT INTO reservation (`nom`, `numerotel`, `datepicker`, `time`) VALUES (?, ?, ?, ?)"; 
    const values = [
        req.body.nom,
        req.body.numerotel,
        req.body.datepicker,
        req.body.time
    ];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion :", err);
            return res.status(500).json({ error: "Erreur lors de l'insertion dans la base de données." });
        }
        
        console.log("Nouvelle réservation insérée avec succès :", result);
        return res.status(201).json({ message: "Réservation ajoutée avec succès.", reservation: result });
    });
});
app.get('/admin', (req, res) => {
    db.query("SELECT * FROM reservation ORDER BY datepicker ASC ,time ASC", (err, result) => {
        if (err) {
            console.log("Erreur lors de la récupération des réservations :", err);
            res.status(500).send("Erreur lors de la récupération des réservations");
        } else {
            console.log("Réservations récupérées avec succès :", result);
            res.send(result);
        }
    });
});

app.delete('/admin/:id', (req, res) => {
    const reservationId = req.params.id;
  
    db.query("DELETE FROM reservation WHERE id = ?", [reservationId], (err, result) => {
      if (err) {
        console.log("Erreur lors de la suppression de la réservation :", err);
        res.status(500).send("Erreur lors de la suppression de la réservation");
      } else {
        console.log("Réservation supprimée avec succès");
        res.sendStatus(200);
      }
    });
  });


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
