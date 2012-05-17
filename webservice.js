enyo.kind({

name: "Classic.WebService",
kind: enyo.Control,
published: {
url: "",
method: "GET",
handleAs: "json",
contentType: "application/x-www-form-urlencoded",
headers: {},
},
events: {
onSuccess: "",
onFailure: ""
}, 
call: function(parameters) {
this.service = new enyo.Ajax({url: this.url, handleAs: this.handleAs, method: this.method, headers: this.headers, contentType: this.contentType})
			.response(this, "processResponse")
			.go(parameters)
			;
	},
processResponse: function(inSender, inResponse){
if (inSender.xhr.status >= 400 || inSender.xhr.status == 0) {
this.doFailure(inResponse);
}
else {
this.doSuccess(inResponse);
}
},
create: function() {
this.inherited(arguments);
this.handleAs = this.published.handleAs;
this.url= this.published.url;
this.method = this.published.method;
this.headers = this.published.headers;
this.contentType = this.published.contentType;
}
});
