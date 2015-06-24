var Obisk={
	url:"http://lalg.fri.uni-lj.si/obisk/obisk.php",
	//url:"obisk.php",
	getBTCVisits: function(from,to,callback){
		var q={};
		q["qid"]=0;
		q["from"]=from;
		q["to"]=to;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},

	getAllBTCVisits: function(callback){
		var q={};
		q["qid"]=1;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},

	getMuzejVisits: function(from,to,callback){
		var q={};
		q["qid"]=2;
		q["from"]=from;
		q["to"]=to;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},

	getAllMuzejVisits: function(callback){
		var q={};
		q["qid"]=3;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},
	
	getBTCVisitsInput: function(loc,from,to,callback){
		var q={};
		q["qid"]=4;
		q["from"]=from;
		q["to"]=to;
		q["loc"]=loc;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},

	getAllBTCVisitsInput: function(loc,callback){
		var q={};
		q["qid"]=5;
		q["loc"]=loc;

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ callback(JSON.parse(data)); });	
	},

}