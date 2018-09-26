document.addEventListener('DOMContentLoaded',function(){
	let db = connect('https://codesign-9a39e.firebaseio.com')

	let params = extract()

  	let path = '/' + params['category'] + /courses/ + params['course']

	db.download(path, function(data){
		replace(".corpo", {
			"name" : data["name"],
			"goals" : data["areas"],
			"objectives" : data["goals"],
			"text" : data["text"]
		})
	})
})



