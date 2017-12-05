export const info = [
	{
		name: "Liifye",
		des: "A fully mobile responsive E-commerce mock up website built on top of bootstrap grid system. It has user authorization with persistent sessions. It makes use of Express' templating engine backend to dynamically serve products, cart and user account pages. Mock order placement and tracking system is in place.",
		img: "static/liifye.png",
		live: "https://secure-castle-21415.herokuapp.com/home",
		github: "https://github.com/three-body-physics/heights",
		tools: ["static/html5.png", "static/css3.png", "static/bootstrap.png", "static/node.png", "static/express.png", "static/mongodb.png"]
	},

	{
		name: "Travelog",
		des: "A fully mobile responsive SPA written in VueJS framework. It is entirely decoupled from a backend REST API which it consumes via HTTP calls to provide users with JWT based authorization, CRUD operations and user account system. Components views are dynamically generated and reacts to data changes meaning operations such as comments, post creations are immediately visible without having to refresh the page. Once authenticated, user session is persistent through route changes.",
		img: "static/project5.png",
		live: "https://salty-chamber-39698.herokuapp.com/",
		github: "https://github.com/three-body-physics/vuelodge",
		tools: ["static/html5.png", "static/css3.png", "static/semantic.png", "static/Vue.png", "static/node.png", "static/express.png", "static/mongodb.png"]
	},

	{
		name: "REST API",
		des: "A JSON api which provides authorization, Database queries, admin privilges, CRUD operations etc. to Frontend clients via HTTP calls. Authentication is implemented through signed JSON Web Tokens which the Frontend client must return embedded in successive HTTP calls to access protected routes and associated user data.",
		img: "static/project7.png",
		live: "https://young-sands-22811.herokuapp.com/api/home",
		github: "https://github.com/three-body-physics/restapi",
		tools: ["static/node.png", "static/express.png", "static/mongodb.png"]
	},

	{
		name: "VibeCiti",
		des: "An audio visualizer written in vanilla javascript as an excercise in DOM manipulation.",
		img: "static/vibeciti2.png",
		live: "",
		github: "",
		tools: ["static/html5.png", "static/css3.png", "static/js5.png"]
	},

	{
		name: "Senti-Bot",
		des: "A sentiment analysis tool written in VueJS with Node and Socket.io backend. It pulls data from twitter's public stream API and funnel the data to the frontend client through a web socket. The client then renders the data reactively for visualization.",
		img: "static/senti.png",
		live: "https://shielded-ocean-84949.herokuapp.com/",
		github: "https://github.com/three-body-physics/senti-bot",
		tools: ["static/Vue.png", "static/node.png", "static/express.png", "static/socketio.png"]

	}
]