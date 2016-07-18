var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

var brandRouter = require('./src/routers/v1/article-brand-router');
brandRouter.applyRoutes(server);

var categoryRouter = require('./src/routers/v1/article-category-router');
categoryRouter.applyRoutes(server);

var counterRouter = require('./src/routers/v1/article-counter-router');
counterRouter.applyRoutes(server);

var materialRouter = require('./src/routers/v1/article-material-router');
materialRouter.applyRoutes(server);

var motifRouter = require('./src/routers/v1/article-motif-router');
motifRouter.applyRoutes(server);

var originRouter = require('./src/routers/v1/article-origin-router');
originRouter.applyRoutes(server);

var seasonRouter = require('./src/routers/v1/article-season-router');
seasonRouter.applyRoutes(server);

var themeRouter = require('./src/routers/v1/article-theme-router');
themeRouter.applyRoutes(server);

var typeRouter = require('./src/routers/v1/article-type-router');
typeRouter.applyRoutes(server);

var variantRouter = require('./src/routers/v1/article-variant-router');
variantRouter.applyRoutes(server);

var articleRouter = require('./src/routers/v1/article-router');
articleRouter.applyRoutes(server);

server.listen(process.env.PORT, process.env.IP);
console.log(`server created at ${process.env.IP}:${process.env.PORT}`)