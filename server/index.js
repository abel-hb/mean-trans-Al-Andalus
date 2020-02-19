const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./database');
const cors = require('cors');
//Setting
app.set('port', process.env.PORT || 3500);



//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routers
app.use('/api/transport', require('./routers/transport.routers'));
app.use('/api/aplication', require('./routers/aplication.routers'));
app.use('/api/places', require('./routers/places.routers'));
app.use('/api/type_trans', require('./routers/type_trans.routers'));

app.use('/api/users/', require('./routers/users.routers'));


//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3500');
});