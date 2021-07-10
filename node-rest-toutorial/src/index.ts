import express from 'express';

let app = express();

app.use(express.urlencoded({
    extended: true
}))

// 모든 http method 허용, 스트링 리턴
app.use('/hello', (req, res) => {
    res.send('hello world');
})

// GET만 허용
app.get('/hello2', (req, res) => {
    res.send('hello test');
})

// GET + query 파라메터로 데이터 전송
app.get('/hello3', (req, res) => {
    const {name} = req.query;
    res.send(`Hello ${name}`);
})

// GET + uri 파라메터로 데이터 전송
app.get('/hello32/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Hello ${name}`);
})

// POST + query 파라메터로 데이터 전송
app.post('/hello33', (req, res) => {
    const {name} = req.query;
    res.send(`Hello ${name}`);
})

// post 전송, x-www-form-urlcoded 방식
app.post('/hello4', (req,res) => {
  const {name} = req.body;
  res.send(`Hello ${name}`);

})

app.post('/hello5', (req,res) => {
    const result = {
        code: 0,
        message: 'success'

    };
    res.send(result);

})

app.post('/hello6', (req, res) => {
    console.log(req.body);
    const result = req.body;
    res.send(result);

})

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

app.listen(8080, () => {
    console.log('server is listening 8080');
});