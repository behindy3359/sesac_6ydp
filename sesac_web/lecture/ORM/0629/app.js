const express = require('express');
const { sequelize } = require('./models/index');
const { mainMiddleware } = require('./middleware/mainMiddleware');
const { routerMiddleware } = require('./middleware/routerMiddleware');

const app = express();
const portNo = 8080;

mainMiddleware(app);
routerMiddleware(app);

// 404 핸들링
app.use((req, res) => {
  const user = req.session.user;
  res.status(404).render('404', { title : '죄송합니다! 페이지를 찾을 수 없습니다.', message : '죄송합니다! 페이지를 찾을 수 없습니다.', user: user});
});

sequelize
  .sync({ force: false })// 처음 기동시 true 할 필요가 있음!
  .then(() => {
    console.log('데이터베이스 연결 확인!');
    app.listen(portNo, () => {
      console.log(`Server started on port ${portNo} at ${new Date().toLocaleString()}`);
    });
  })
  .catch((err) => {
    console.error('마음이 아픔, DB 에서 몬가 에러가 났음', err);
  });