const PORT = 8080;
const app = require('./server');
const chalk = require('chalk');

app.listen(PORT, () => {
  chalk.green.bold('Server listening on port: ') +
    chalk.cyan.bold(`localhost:${PORT}`);
});
