enyo.kind({


name: "Classic.WebService",
kind: enyo.Component,
published: {
cacheBust: true,
url: "",
method: "GET",
handleAs: "json",
postBody: "",
contentType: "application/x-www-form-urlencoded",
headers: null,
username: "",
password: ""
},
events: {
onSuccess: "",
onFailure: ""
}, 
call: function(parameters) {
this.service = new enyo.Ajax({cacheBust: this.cacheBust, url: this.url, handleAs: this.handleAs, method: this.method, headers: this.headers, contentType: this.contentType, username: this.username, password: this.password, postBody: this.postBody})
			.response(this, "processResponse")
			.go(parameters)
			;
	},
processResponse: function(inSender, inResponse){
if (inSender.xhr.status >= 400) {
this.doFailure({response: inResponse, status: inSender.xhr.status});
}
else {
	// you may get a status 0 positive response or it could mean that you don't have a connection: code appropriately
this.doSuccess({response: inResponse, status: inSender.xhr.status});
}
},
create: function() {
this.inherited(arguments);
if(this.published.cacheBust){
	this.cacheBust = this.published.cacheBust;
}
if(this.published.handleAs) {
this.handleAs = this.published.handleAs;
}
if(this.published.url) {
this.url= this.published.url;
}
if(this.published.method) {
this.method = this.published.method;
}
if(this.published.headers) {
this.headers = this.published.headers;
}
if(this.published.contentType) {
this.contentType = this.published.contentType;
}
if(this.published.username) {
this.username = this.published.username;
}
if(this.published.password) {
this.password = this.published.password;
}
if(this.published.postBody){
	this.postBody = this.published.postBody;
}
}
});
