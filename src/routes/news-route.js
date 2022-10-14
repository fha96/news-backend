'use strict';

const {express} = require('../config/index');
const { getAllNews } = require('../controllers/news-controller');

const router = express.Router();

// read all news
router.get('/news', getAllNews);



module.exports = router;


