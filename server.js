const express = require("express");
const app = express();

const {
  SmartThingsClient,
  BearerTokenAuthenticator,
} = require("@smartthings/core-sdk");
const client = new SmartThingsClient(
  new BearerTokenAuthenticator('3b53e338-dafc-49da-ab94-332b808049a4')
);
//device id = a61b1e72-9c7a-482a-8fe6-449bfad184d5
let list;
let command = {
	capability: "switch",
	component: "main",
	command: "on"
}
app.get("/", (request, response) => {
  client.devices.list().then((devices) => {
    list = devices;
  });
  client.devices.executeCommand("a61b1e72-9c7a-482a-8fe6-449bfad184d5", command);
  response.json(list);
});

const listener = app.listen(4000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
