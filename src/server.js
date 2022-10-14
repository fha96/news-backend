'use strict';

const { express, cors} = require('./config');
const {genericErrorHandler, notFoundHandler} = require('./controllers/errorControllers');
const app = express();
const newsRoute = require('./routes/news-route');
app.use(cors({
    
}));
app.use(express.json());
app.use(newsRoute);

app.get('/test', (req, res) => {
    res.status(200).send('Server up !');
});

app.use(genericErrorHandler);
app.all("*",notFoundHandler);

function run(port) {

app.listen(port, () => {
    console.log(`Sever listening on PORT ${port}`);
});
}


module.exports = {
    run
}