const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let foodData = [
	{
		foodName: 'Burger',
		price: '200rs'
	},
	{
		foodName: 'Butter Chicken',
		price: '300rs'
	},
	{
		foodName: 'Chole Bhature',
		price: '200rs'
	}
];

let drinksData = [
	{
		drinkName: 'Mojito',
		price: '150rs'
	},
	{
		drinkName: 'pina colada',
		price: '170rs'
	}
];

let data = [
	foodData,drinksData
]

app.get("/data",(req,res)=>{
	res.json(data);
});


app.post("/login",(req,res)=>{
	let userData = {
		userName: req.body.userName,
		password: req.body.password
	}
	
	if(userData.password == '123' && userData.userName == 'abc'){
		res.json({flag:true, msg: 'Login successful'});
	}else{
		res.json({flag:false, msg: 'Login failed'});
	}
	
});

app.listen(3200,()=>{console.log("backend application running at port 3200");});