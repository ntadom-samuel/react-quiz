function Main({ children }) {
  return <main className="main">{children}</main>;
}

export default Main;
//Creating fake APIs with the json-server npm package
//To use this, I created a script called server. It looks like this: "server": "json-server --watch data/questions.json --p 8000".
//To run this, type npm run server in your terminal
//Checkout questions.js. The first field in questions.js will be the endpoint for the URL
