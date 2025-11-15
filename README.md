# ⚖️ Site Web d’un Cabinet d’Avocats – MERN Stack

Un site web professionnel conçu pour un **cabinet d’avocats**, développé avec la stack **MERN** (React + Node.js + Express + MySQL).  
Le projet inclut l’authentification des utilisateurs, la réservation de rendez-vous et une interface d’administration.

---

## 🚀 Fonctionnalités

### 👤 Authentification
- Inscription (Sign Up)
- Connexion (Login)
- Mot de passe oublié (si ajouté plus tard)

### 📅 Réservations
- Formulaire de réservation (nom, téléphone, date, heure)
- Stockage dans MySQL
- Page **Admin** pour afficher toutes les réservations
- Suppression d’une réservation

### 🧑‍⚖️ Pages du Site
- Hero / Landing Page
- À propos
- Avocats
- Associés
- Livres
- Contact
- Vidéo
- Footer

---

## 🛠️ Technologies Utilisées

### Frontend
- React.js
- React Router
- Axios
- CSS Modules / Custom CSS

### Backend
- Node.js
- Express.js
- MySQL
- CORS

---

## 📁 Structure du Projet

Projet/ <br/>
├─ Frontend// <br/>
│  ├─ src/                             # Code React + composants UI/ <br/>
│  │  ├─ components/ <br/>
│  │  │  ├─ Navbar/   <br/>
│  │  │  ├─ Hero/  <br/>
│  │  │  ├─ About/ <br/>
│  │  │  ├─ Avocats/ <br/>
│  │  │  ├─ Associes/ <br/>
│  │  │  ├─ Contact/  <br/>
│  │  │  ├─ Video/  <br/>
│  │  │  ├─ Footer/ <br/>
│  │  │  ├─ Sign/ <br/>
│  │  │  ├─ Log/ <br/>
│  │  │  ├─ ForgotMD/ <br/>
│  │  │  ├─ Reservation/  <br/>
│  │  │  ├─ Admin/  <br/>
│  │  │  └─ Book/ <br/>
│  │  ├─ App.jsx                       # Composant principal  <br/>
│  │  └─ index.js                      # Point d’entrée React   <br/>
│  ├─ package.json                     # Dépendances & scripts React   <br/>
│  └─ public/                          # Fichiers statiques  <br/>
│  <br/>
├─ Backend/  <br/>
│  ├─ server.js                        # API Express (auth, réservation)  <br/>
│  └─ package.json                     # Dépendances Node.js  <br/>
│ <br/>
└─ README.md <br/>



## 🔧 Installation & Utilisation

### 1️⃣ Cloner le projet
```bash
git clone <URL_DU_REPO>
cd projet-avocat


⚙️ Installation du Backend
2️⃣ Installer les dépendances
cd backend
npm install express mysql cors


3️⃣ Configurer MySQL
Créer la base :

CREATE DATABASE sign;
Créer les tables :
CREATE TABLE login (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE reservation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  numerotel VARCHAR(50),
  datepicker DATE,
  time VARCHAR(50)
);

4️⃣ Lancer le serveur
node server.js
Serveur disponible sur :
👉 http://localhost:8081

Installation du Frontend
5️⃣ Installer les dépendances frontend
cd frontend
npm install


6️⃣ Démarrer le frontend
npm start


Site disponible sur :
👉 http://localhost:3000

🔗 Endpoints API
🔐 Authentification
Méthode	Route	Description
POST	/sign	Inscription utilisateur
POST	/log	Connexion utilisateur
📅 Réservations
Méthode	Route	Description
POST	/reservation	Ajouter une réservation
GET	/admin	Récupérer toutes les réservations
DELETE	/admin/:id	Supprimer une réservation

---

👩‍💻 Développeuse

Salma Gouaaballa
Développeuse Full-Stack | Étudiante en ingénierie  
Projet réalisé dans le cadre d’un stage professionnel en 2024.
