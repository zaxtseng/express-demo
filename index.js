const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// 解析json
app.use(express.json())
// 解析url编码请求体
app.use(bodyParser.urlencoded({extended: true}))

// 路由
app.get('/',(req, res) => {
	res.send('hello!')
})

app.post('/msg',(req, res) => {
	console.log(req.body)
	const msg = {
		message: 'get msg'
	}
	res.json(JSON.parse(JSON.stringify(msg)))
})

app.listen(5001, () => {
	console.log('server is running localhost:5000');
})

