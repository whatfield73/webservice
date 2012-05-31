Webservice beta for Enyo 2.0

To change WebService object for Enyo 1.0 or Mojo:  change the 'components' to 'published' and remove the [ ] from the components (now published) object.   If you need access to the xhr object, it can be accessed from inSender.service.


Example code:

{name: "WebService1", kind: "Classic.WebService",
  	onSuccess: "gottext",
		onFailure: "gettextfail",
		published: {
      method: "GET",
      handleAs: "text",
      headers: null,
      contentType: "application/x-www-form-urlencoded"
      } 
}

gottext: function(inSender, inResponse) {
// process Response
inResponse = inResponse.response;  // because Enyo 2.0 requires events passed as objects not values
}

gettextfail: function(inSender, inResponse){
//process Failure
inResponse = inResponse.response;  //because Enyo 2.0 requires events passed as objects not values
}
this.$.WebService1.setUrl("www.google.com");
this.$.WebService1.call();
or
this.$.WebService1.call(<parameters for your request>);

