const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/create",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	MongoClient.connect(url,(err,database)=>{
		if (err){ 
			console.log(err); res.send(err);
		}
		else{
			const dbo=database.db("sms9apr23");
			const data ={"_id":req.body.rNo,"name":req.body.name,"marks":req.body.marks,"subject":req.body.subject};
			dbo.collection("student").insertOne(data,(err,result)=>{
				if (err) { console.log(err); res.send(err);}
				else{ console.log(err); res.send(result); }
			});
		}
	});

});


app.get("/read",(req,res)=>{
	const url = "mongodb://0.0.0.0:27017";
	MongoClient.connect(url,(err,database)=>{
		if (err){ console.log(err); res.send(err)}
		else{
			const dbo=database.db("sms9apr23");
			dbo.collection("student").find({}).toArray((err,result)=>{
				if (err){ console.log(err); res.send(err)}
				else res.send(result);
			});
		}
	
	});

});

app.put("/change",(req,res)=>{
	const url="mongodb://0.0.0.0:27017";
	MongoClient.connect(url,(err,database)=>{
		if (err){ console.log(err); res.send(err)}
		else{
			const dbo=database.db("sms9apr23");	
			const data ={"name":req.body.name,"marks":req.body.marks};		
			dbo.collection("student").updateOne({"_id":req.body.rNo},{$set:data},(err,result)=>{
				if (err){ console.log(err); res.send(err)}
				else res.send(result);
			});	
		}

	});
});



app.delete("/remove",(req,res)=>{
	const url="mongodb://0.0.0.0:27017";
	const data = {"_id":req.body.rNo};
	console.log(data)
	MongoClient.connect( url, (err,database)=>{
	if (err) { console.log(err);	res.send(err);}
	else{
		const dbo=database.db("sms9apr23");

		dbo.collection("student").deleteOne(data,(err,result)=>{
			if(err) {console.log(err);	res.send(err);}
			else{console.log(result); res.send(result);}
		});
	}	
	});
});

app.listen(1111,()=>{ console.log("server ready @ 1111");});

