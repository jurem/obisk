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

		$.post(this.url, {"query": JSON.stringify(q) }).done(function(data){ alert(data); callback(JSON.parse(data)); });	
	}

}