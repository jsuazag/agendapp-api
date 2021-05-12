import moongose from 'mongoose';

const url = 'mongodb+srv://agendapp_user:agenda2021@cluster0.eig00.mongodb.net/db_agendapp?retryWrites=true&w=majority';
moongose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = moongose.connection;
db.on('error', () => console.log('Error connecting with database'));
db.once('open', () => console.log('Success connecting with database'));

export default db;