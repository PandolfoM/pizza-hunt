const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

const m_url = 'mongodb://127.0.0.1:27017/',
    db_name = 'pizza-hunt',       // use your db name
    m_options = {
        'auto_reconnect': true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }

mongoose.connect(m_url + db_name, m_options, function (err) {
    if (err) {
        console.log('Mongo Error ' + err);
    } else {
        console.log('MongoDB Connection Established');
    }
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
