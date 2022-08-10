module.exports = {
	"env": {
		"browser": false, // NODE
		"commonjs": true,
		"es2021": true
	},
	"extends": "airbnb",
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"linux"
		],
		"quotes": [
			2,
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
};
