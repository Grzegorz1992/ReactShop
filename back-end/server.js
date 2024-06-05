const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serwuj statyczne pliki Reacta
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint API (przykład)
app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

// Przechwytywanie wszystkich pozostałych żądań i zwracanie pliku index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
