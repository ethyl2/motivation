app.get('/', (req, res) => {
  res.status(200).send("Hello, world!");
});
//[END hello_world]

if (module === require.main) {
  //[START server]
  //start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log('App listening on port ${port}');
  });
  //[END server]
}

module.exports = app;
