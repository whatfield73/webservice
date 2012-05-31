enyo.kind({


name: "Classic.WebService",
kind: enyo.Component,
published: {
url: "",
method: "GET",
handleAs: "json",
contentType: "application/x-www-form-urlencoded",
headers: {},
username: "",
password: ""
},
events: {
onSuccess: "",
onFailure: ""
}, 
call: function(parameters) {
this.service = new enyo.Ajax({url: this.url, handleAs: this.handleAs, method: this.method, headers: this.headers, contentType: this.contentType, username: this.username, password: this.password})
			.response(this, "processResponse")
			.go(parameters)
			;
	},
processResponse: function(inSender, inResponse){
if (inSender.xhr.status >= 400 || inSender.xhr.status == 0) {
this.doFailure({response: inResponse});
}
else {
this.doSuccess({response: inResponse});
}
},
create: function() {
this.inherited(arguments);
this.handleAs = this.published.handleAs;
this.url= this.published.url;
this.method = this.published.method;
this.headers = this.published.headers;
this.contentType = this.published.contentType;
this.username = this.published.username;
this.password = this.published.password;
}
});
