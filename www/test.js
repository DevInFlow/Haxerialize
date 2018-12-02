// Generated by Haxe 3.4.7
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var model__$Components_BrandLogo_$Impl_$ = {};
model__$Components_BrandLogo_$Impl_$._new = function() {
	var this1 = window.document.createElement("a");
	this1.classList.add("brand-logo");
	return this1;
};
model__$Components_BrandLogo_$Impl_$.setDirection = function(this1,direction) {
	this1.classList.remove("right","left");
	this1.classList.add(direction);
};
model__$Components_BrandLogo_$Impl_$.getDirection = function(this1) {
	if(this1.classList.contains("right")) {
		return "right";
	}
	return "left";
};
var model__$Components_NavWrapper_$Impl_$ = {};
model__$Components_NavWrapper_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("nav-wrapper");
	return this1;
};
var model__$Components_Nav_$Impl_$ = {};
model__$Components_Nav_$Impl_$._new = function() {
	var this1 = window.document.createElement("nav");
	return this1;
};
var model__$Components_NavMobile_$Impl_$ = {};
model__$Components_NavMobile_$Impl_$._new = function() {
	var this1 = window.document.createElement("ul");
	return this1;
};
model__$Components_NavMobile_$Impl_$.setDirection = function(this1,direction) {
	this1.classList.remove("right","left");
	this1.classList.add(direction);
};
model__$Components_NavMobile_$Impl_$.getDirection = function(this1) {
	if(this1.classList.contains("right")) {
		return "right";
	}
	return "left";
};
var model__$Components_BreadcrumbContainer_$Impl_$ = {};
model__$Components_BreadcrumbContainer_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("col");
	return this1;
};
model__$Components_BreadcrumbContainer_$Impl_$.addItem = function(this1,breadcrumb) {
	this1.appendChild(breadcrumb);
};
model__$Components_BreadcrumbContainer_$Impl_$.removeItem = function(this1,breadcrumb) {
	this1.removeChild(breadcrumb);
};
var model__$Components_Breadcrumb_$Impl_$ = {};
model__$Components_Breadcrumb_$Impl_$._new = function() {
	var this1 = window.document.createElement("a");
	this1.classList.add("breadcrumb");
	return this1;
};
var model__$Components_RaisedButton_$Impl_$ = {};
model__$Components_RaisedButton_$Impl_$._new = function(properties) {
	var this1 = window.document.createElement("a");
	this1.classList.add("waves-effect","waves-light","btn");
	if(properties != null) {
		this1.classList.add(Object.prototype.hasOwnProperty.call(properties,"type") ? properties.type : "btn");
	} else {
		this1.classList.add("btn");
	}
	return this1;
};
model__$Components_RaisedButton_$Impl_$.setIcon = function(this1,icon) {
	if($(this1).has("i." + "material-icons").length > 0) {
		$(this1).find("i." + "material-icons").remove();
	}
	this1.appendChild(icon);
};
model__$Components_RaisedButton_$Impl_$.getIcon = function(this1) {
	return $(this1).find("i." + "material-icons").get(0);
};
var model__$Components_FloatingButton_$Impl_$ = {};
model__$Components_FloatingButton_$Impl_$._new = function(properties) {
	var this1 = window.document.createElement("a");
	this1.classList.add("btn-floating","waves-effect","waves-light","red");
	if(properties != null) {
		this1.classList.add(Object.prototype.hasOwnProperty.call(properties,"type") ? properties.type : "btn");
	} else {
		this1.classList.add("btn");
	}
	return this1;
};
model__$Components_FloatingButton_$Impl_$.setIcon = function(this1,icon) {
	if($(this1).has("i." + "material-icons").length > 0) {
		$(this1).find("i." + "material-icons").remove();
	}
	this1.appendChild(icon);
};
model__$Components_FloatingButton_$Impl_$.getIcon = function(this1) {
	return $(this1).find("i." + "material-icons").get(0);
};
var model__$Components_SubmitButton_$Impl_$ = {};
model__$Components_SubmitButton_$Impl_$._new = function(properties) {
	var this1 = window.document.createElement("button");
	this1.classList.add("waves-effect","waves-light");
	this1.type = "submit";
	this1.name = "action";
	if(properties != null) {
		this1.classList.add(Object.prototype.hasOwnProperty.call(properties,"type") ? properties.type : "btn");
	} else {
		this1.classList.add("btn");
	}
	return this1;
};
model__$Components_SubmitButton_$Impl_$.setIcon = function(this1,icon) {
	if($(this1).has("i." + "material-icons").length > 0) {
		$(this1).find("i." + "material-icons").remove();
	}
	this1.appendChild(icon);
};
model__$Components_SubmitButton_$Impl_$.getIcon = function(this1) {
	return $(this1).find("i." + "material-icons").get(0);
};
var model__$Components_Card_$Impl_$ = {};
model__$Components_Card_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card");
	return this1;
};
var model__$Components_CardStickyAction_$Impl_$ = {};
model__$Components_CardStickyAction_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card","sticky-action");
	return this1;
};
var model__$Components_CardContent_$Impl_$ = {};
model__$Components_CardContent_$Impl_$._new = function(content) {
	var this1;
	var i = window.document.createElement("div");
	this1 = window.document.createElement("div");
	this1.classList.add("card-content");
	if(content != null) {
		if((content instanceof Array) && content.__enum__ == null) {
			console.log("it is array");
		} else {
			console.log("it is string");
		}
	}
	return this1;
};
var model__$Components_CardTitle_$Impl_$ = {};
model__$Components_CardTitle_$Impl_$._new = function(text) {
	var this1 = window.document.createElement("span");
	this1.classList.add("card-title");
	if(text != null) {
		this1.innerHTML = text;
	}
	return this1;
};
model__$Components_CardTitle_$Impl_$.appendHtml = function(this1,html) {
	this1.innerHTML += html;
};
var model__$Components_CardAction_$Impl_$ = {};
model__$Components_CardAction_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-action");
	return this1;
};
var model__$Components_CardImage_$Impl_$ = {};
model__$Components_CardImage_$Impl_$._new = function(src) {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-image","waves-effect","waves-light","waves-block");
	var img = window.document.createElement("img");
	img.classList.add("activator");
	img.src = src;
	this1.appendChild(img);
	return this1;
};
var model__$Components_CardStacked_$Impl_$ = {};
model__$Components_CardStacked_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-stacked");
	return this1;
};
var model__$Components_CardReveal_$Impl_$ = {};
model__$Components_CardReveal_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-reveal");
	return this1;
};
var model__$Components_CardTabs_$Impl_$ = {};
model__$Components_CardTabs_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-tabs");
	return this1;
};
var model__$Components_CardPanel_$Impl_$ = {};
model__$Components_CardPanel_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("card-panel");
	return this1;
};
var model__$Components_Tabs_$Impl_$ = {};
model__$Components_Tabs_$Impl_$._new = function() {
	var this1 = window.document.createElement("ul");
	this1.classList.add("tabs");
	return this1;
};
model__$Components_Tabs_$Impl_$.appendTab = function(this1,tab) {
	this1.appendChild(tab);
};
model__$Components_Tabs_$Impl_$.removeTab = function(this1,tab) {
	this1.removeChild(tab);
};
var model__$Components_Tab_$Impl_$ = {};
model__$Components_Tab_$Impl_$._new = function() {
	var this1 = window.document.createElement("li");
	this1.classList.add("tab");
	return this1;
};
var model__$Components_ListCollection_$Impl_$ = {};
model__$Components_ListCollection_$Impl_$._new = function() {
	var this1 = window.document.createElement("ul");
	this1.classList.add("collection");
	return this1;
};
model__$Components_ListCollection_$Impl_$.addItem = function(this1,value) {
	value.classList.add("collection-item");
	this1.appendChild(value);
};
var model__$Components_ListCollectionItem_$Impl_$ = {};
model__$Components_ListCollectionItem_$Impl_$._new = function() {
	var this1 = window.document.createElement("li");
	this1.classList.add("collection-item");
	return this1;
};
model__$Components_ListCollectionItem_$Impl_$.setSecondaryContent = function(this1,secondary) {
	if($(this1).has("." + "secondary-content").length == 0) {
		var div = window.document.createElement("div");
		div.innerHTML = this1.innerHTML;
		secondary.classList.add("secondary-content");
		div.appendChild(secondary);
		this1.innerHTML = div.outerHTML;
	}
};
var model__$Components_AnchorCollection_$Impl_$ = {};
model__$Components_AnchorCollection_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("collection");
	return this1;
};
model__$Components_AnchorCollection_$Impl_$.addItem = function(this1,value) {
	value.classList.add("collection-item");
	this1.appendChild(value);
};
var model__$Components_AnchorCollectionItem_$Impl_$ = {};
model__$Components_AnchorCollectionItem_$Impl_$._new = function() {
	var this1 = window.document.createElement("a");
	this1.classList.add("collection-item");
	return this1;
};
var model__$Components_Icon_$Impl_$ = {};
model__$Components_Icon_$Impl_$._new = function(params) {
	var this1 = window.document.createElement("i");
	this1.classList.add("material-icons");
	if(Object.prototype.hasOwnProperty.call(params,"direction")) {
		var direction = params.direction;
		this1.classList.remove("right","left");
		this1.classList.add(direction);
	} else {
		this1.classList.remove("right","left");
		this1.classList.add("right");
	}
	this1.innerText = params.icon;
	return this1;
};
model__$Components_Icon_$Impl_$.changeIcon = function(this1,icon) {
	this1.innerText = icon;
};
model__$Components_Icon_$Impl_$.setDirection = function(this1,direction) {
	this1.classList.remove("right","left");
	this1.classList.add(direction);
};
model__$Components_Icon_$Impl_$.getDirection = function(this1) {
	if(this1.classList.contains("right")) {
		return "right";
	}
	return "left";
};
var model__$Containers_Container_$Impl_$ = {};
model__$Containers_Container_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("container");
	return this1;
};
var model__$Containers_Row_$Impl_$ = {};
model__$Containers_Row_$Impl_$._new = function() {
	var this1 = window.document.createElement("div");
	this1.classList.add("row");
	return this1;
};
var model__$Containers_Col_$Impl_$ = {};
model__$Containers_Col_$Impl_$._new = function(classes) {
	var this1 = window.document.createElement("div");
	this1.classList.add("col");
	if(classes != null) {
		var _g = 0;
		while(_g < classes.length) {
			var grid = classes[_g];
			++_g;
			this1.classList.add(grid);
		}
	}
	return this1;
};
var model_macro_Macro = function() { };
var test_Test = function() {
	$(window.document).ready(function() {
		M.AutoInit();
		var this1 = window.document.createElement("div");
		this1.classList.add("container");
		var container = this1;
		new test_collection_CollectionTest(container);
		new test_collection_ButtonTest(container);
		new test_collection_BreadcrumbTest(container);
		new test_collection_NavbarTest(container);
		new test_collection_CardTest(container);
		window.document.body.appendChild(container);
	});
};
test_Test.main = function() {
	new test_Test();
};
var test_base_BaseTest = function(container) {
	var classes = ["s12"];
	var this1 = window.document.createElement("div");
	this1.classList.add("col");
	if(classes != null) {
		var _g = 0;
		while(_g < classes.length) {
			var grid = classes[_g];
			++_g;
			this1.classList.add(grid);
		}
	}
	this.col = this1;
	var this11 = window.document.createElement("div");
	this11.classList.add("row");
	this.row = this11;
	this.container = container;
	this.row.appendChild(this.col);
	this.container.appendChild(this.row);
};
test_base_BaseTest.prototype = {
	appendChild: function(value) {
		this.container.appendChild(value);
	}
};
var test_collection_BreadcrumbTest = function(container) {
	test_base_BaseTest.call(this,container);
	var this1 = window.document.createElement("a");
	this1.classList.add("brand-logo");
	var brandLogo = this1;
	brandLogo.textContent = "Logo";
	brandLogo.classList.remove("right","left");
	brandLogo.classList.add("right");
	var headerh3 = window.document.createElement("h3");
	headerh3.classList.add("header");
	headerh3.innerText = "Basic";
	var this2 = window.document.createElement("nav");
	var nav = this2;
	var this3 = window.document.createElement("div");
	this3.classList.add("nav-wrapper");
	var wrapper = this3;
	var this4 = window.document.createElement("div");
	this4.classList.add("col");
	var breadcrumbContainer = this4;
	wrapper.appendChild(breadcrumbContainer);
	var breadcrumb;
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		var this5 = window.document.createElement("a");
		this5.classList.add("breadcrumb");
		breadcrumb = this5;
		breadcrumb.textContent = "" + (i + 1) + " bread";
		breadcrumbContainer.appendChild(breadcrumb);
	}
	nav.appendChild(wrapper);
	this.col.appendChild(headerh3);
	this.col.appendChild(nav);
};
test_collection_BreadcrumbTest.__super__ = test_base_BaseTest;
test_collection_BreadcrumbTest.prototype = $extend(test_base_BaseTest.prototype,{
});
var test_collection_ButtonTest = function(container) {
	test_base_BaseTest.call(this,container);
	this.raisedButton();
	this.floatingButton();
	this.submitButton();
};
test_collection_ButtonTest.__super__ = test_base_BaseTest;
test_collection_ButtonTest.prototype = $extend(test_base_BaseTest.prototype,{
	raisedButton: function() {
		var this1 = window.document.createElement("div");
		this1.classList.add("row");
		var raisedRow = this1;
		var this2 = window.document.createElement("a");
		this2.classList.add("waves-effect","waves-light","btn");
		this2.classList.add("btn");
		var raisedNormal = this2;
		var this3 = window.document.createElement("a");
		this3.classList.add("waves-effect","waves-light","btn");
		this3.classList.add("btn");
		var raisedButtonIconLeft = this3;
		var this4 = window.document.createElement("a");
		this4.classList.add("waves-effect","waves-light","btn");
		this4.classList.add("btn");
		var raisedButtonIconRight = this4;
		raisedNormal.text = raisedButtonIconLeft.text = raisedButtonIconRight.text = "BUTTON";
		var params = { icon : "cloud", direction : "left"};
		var this5 = window.document.createElement("i");
		this5.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this5.classList.remove("right","left");
			this5.classList.add(direction);
		} else {
			this5.classList.remove("right","left");
			this5.classList.add("right");
		}
		this5.innerText = params.icon;
		model__$Components_RaisedButton_$Impl_$.setIcon(raisedButtonIconLeft,this5);
		var params1 = { icon : "cloud", direction : "right"};
		var this6 = window.document.createElement("i");
		this6.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params1,"direction")) {
			var direction1 = params1.direction;
			this6.classList.remove("right","left");
			this6.classList.add(direction1);
		} else {
			this6.classList.remove("right","left");
			this6.classList.add("right");
		}
		this6.innerText = params1.icon;
		model__$Components_RaisedButton_$Impl_$.setIcon(raisedButtonIconRight,this6);
		raisedRow.appendChild(raisedNormal);
		raisedRow.appendChild(raisedButtonIconLeft);
		raisedRow.appendChild(raisedButtonIconRight);
		this.col.appendChild(raisedRow);
	}
	,floatingButton: function() {
		var this1 = window.document.createElement("div");
		this1.classList.add("row");
		var floatingRow = this1;
		var this2 = window.document.createElement("a");
		this2.classList.add("btn-floating","waves-effect","waves-light","red");
		this2.classList.add("btn");
		var floatingButton = this2;
		var params = { icon : "add"};
		var this3 = window.document.createElement("i");
		this3.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this3.classList.remove("right","left");
			this3.classList.add(direction);
		} else {
			this3.classList.remove("right","left");
			this3.classList.add("right");
		}
		this3.innerText = params.icon;
		model__$Components_FloatingButton_$Impl_$.setIcon(floatingButton,this3);
		floatingRow.appendChild(floatingButton);
		this.col.appendChild(floatingRow);
	}
	,submitButton: function() {
		var this1 = window.document.createElement("div");
		this1.classList.add("row");
		var submitRow = this1;
		var properties = { type : "btn-small"};
		var this2 = window.document.createElement("button");
		this2.classList.add("waves-effect","waves-light");
		this2.type = "submit";
		this2.name = "action";
		if(properties != null) {
			this2.classList.add(Object.prototype.hasOwnProperty.call(properties,"type") ? properties.type : "btn");
		} else {
			this2.classList.add("btn");
		}
		var submitButton = this2;
		submitButton.textContent = "Submit";
		var params = { icon : "send"};
		var this3 = window.document.createElement("i");
		this3.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this3.classList.remove("right","left");
			this3.classList.add(direction);
		} else {
			this3.classList.remove("right","left");
			this3.classList.add("right");
		}
		this3.innerText = params.icon;
		model__$Components_SubmitButton_$Impl_$.setIcon(submitButton,this3);
		submitRow.appendChild(submitButton);
		this.col.appendChild(submitRow);
	}
});
var test_collection_CardTest = function(container) {
	test_base_BaseTest.call(this,container);
	this.basicCard();
	this.imageCard();
	this.fabsInCard();
	this.horizontalCard();
	this.revealCard();
	this.revealCardStickyAction();
	this.cardTabs();
};
test_collection_CardTest.__super__ = test_base_BaseTest;
test_collection_CardTest.prototype = $extend(test_base_BaseTest.prototype,{
	basicCard: function() {
		var classes = ["s12","m4"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card");
		var card = this2;
		card.classList.add("blue-grey","darken-1");
		var this3;
		var i = window.document.createElement("div");
		this3 = window.document.createElement("div");
		this3.classList.add("card-content");
		var cardContent = this3;
		cardContent.classList.add("white-text");
		var this4 = window.document.createElement("span");
		this4.classList.add("card-title");
		this4.innerHTML = "Card Title";
		var cardTitle = this4;
		var paragraph = window.document.createElement("p");
		paragraph.textContent = "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.";
		var this5 = window.document.createElement("div");
		this5.classList.add("card-action");
		var cardAction = this5;
		cardAction.innerHTML = "<a href=\"#\">This is a link</a><a href=\"#\">This is a link</a>";
		cardContent.appendChild(cardTitle);
		cardContent.appendChild(paragraph);
		card.appendChild(cardContent);
		card.appendChild(cardAction);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,imageCard: function() {
		var classes = ["s12","m4"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card");
		var card = this2;
		var this3 = window.document.createElement("div");
		this3.classList.add("card-image","waves-effect","waves-light","waves-block");
		var img = window.document.createElement("img");
		img.classList.add("activator");
		img.src = "https://materializecss.com/images/sample-1.jpg";
		this3.appendChild(img);
		var cardImage = this3;
		var this4 = window.document.createElement("span");
		this4.classList.add("card-title");
		this4.innerHTML = "Card Title";
		var cardTitle = this4;
		var this5;
		var i = window.document.createElement("div");
		this5 = window.document.createElement("div");
		this5.classList.add("card-content");
		var cardContent = this5;
		var paragraph = window.document.createElement("p");
		paragraph.innerText = "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.";
		var this6 = window.document.createElement("div");
		this6.classList.add("card-action");
		var cardAction = this6;
		cardAction.innerHTML = "<a href=\"#\">This is a link</a>";
		cardImage.appendChild(cardTitle);
		cardContent.appendChild(paragraph);
		card.appendChild(cardImage);
		card.appendChild(cardContent);
		card.appendChild(cardAction);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,fabsInCard: function() {
		var classes = ["s12","m4"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card");
		var card = this2;
		var this3 = window.document.createElement("div");
		this3.classList.add("card-image","waves-effect","waves-light","waves-block");
		var img = window.document.createElement("img");
		img.classList.add("activator");
		img.src = "https://materializecss.com/images/sample-1.jpg";
		this3.appendChild(img);
		var cardImage = this3;
		var this4 = window.document.createElement("span");
		this4.classList.add("card-title");
		this4.innerHTML = "Card Title";
		var cardTitle = this4;
		var this5 = window.document.createElement("a");
		this5.classList.add("btn-floating","waves-effect","waves-light","red");
		this5.classList.add("btn");
		var floatingButton = this5;
		var params = { icon : "add"};
		var this6 = window.document.createElement("i");
		this6.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this6.classList.remove("right","left");
			this6.classList.add(direction);
		} else {
			this6.classList.remove("right","left");
			this6.classList.add("right");
		}
		this6.innerText = params.icon;
		model__$Components_FloatingButton_$Impl_$.setIcon(floatingButton,this6);
		floatingButton.classList.add("halfway-fab");
		var this7;
		var i = window.document.createElement("div");
		this7 = window.document.createElement("div");
		this7.classList.add("card-content");
		var cardContent = this7;
		var paragraph = window.document.createElement("p");
		paragraph.innerText = "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.";
		cardImage.appendChild(cardTitle);
		cardImage.appendChild(floatingButton);
		cardContent.appendChild(paragraph);
		card.appendChild(cardImage);
		card.appendChild(cardContent);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,horizontalCard: function() {
		var classes = ["s12","m7"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card");
		var card = this2;
		var this3 = window.document.createElement("div");
		this3.classList.add("card-image","waves-effect","waves-light","waves-block");
		var img = window.document.createElement("img");
		img.classList.add("activator");
		img.src = "https://lorempixel.com/100/190/nature/6";
		this3.appendChild(img);
		var cardImage = this3;
		card.classList.add("horizontal");
		var this4;
		var i = window.document.createElement("div");
		this4 = window.document.createElement("div");
		this4.classList.add("card-content");
		var cardContent = this4;
		var this5 = window.document.createElement("div");
		this5.classList.add("card-stacked");
		var cardStacked = this5;
		var paragraph = window.document.createElement("p");
		paragraph.innerText = "I am a very simple card. I am good at containing small bits of information.";
		var this6 = window.document.createElement("div");
		this6.classList.add("card-action");
		var cardAction = this6;
		cardAction.innerHTML = "<a href=\"#\">This is a link</a>";
		cardStacked.appendChild(cardContent);
		cardStacked.appendChild(cardAction);
		cardContent.appendChild(paragraph);
		card.appendChild(cardImage);
		card.appendChild(cardStacked);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,revealCard: function() {
		var classes = ["s12","m5"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card");
		var card = this2;
		var this3;
		var i = window.document.createElement("div");
		this3 = window.document.createElement("div");
		this3.classList.add("card-content");
		var cardContent = this3;
		var this4 = window.document.createElement("div");
		this4.classList.add("card-image","waves-effect","waves-light","waves-block");
		var img = window.document.createElement("img");
		img.classList.add("activator");
		img.src = "https://materializecss.com/images/office.jpg";
		this4.appendChild(img);
		var cardImage = this4;
		var this5 = window.document.createElement("span");
		this5.classList.add("card-title");
		this5.innerHTML = "Card Title";
		var cardTitle = this5;
		var this6 = window.document.createElement("div");
		this6.classList.add("card-reveal");
		var cardReveal = this6;
		var this7 = window.document.createElement("span");
		this7.classList.add("card-title");
		this7.innerHTML = "Card Title";
		var revealTitle = this7;
		var revealParagraph = window.document.createElement("p");
		revealTitle.classList.add("gray-text","text-darken-4");
		var params = { icon : "close", direction : "right"};
		var this8 = window.document.createElement("i");
		this8.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this8.classList.remove("right","left");
			this8.classList.add(direction);
		} else {
			this8.classList.remove("right","left");
			this8.classList.add("right");
		}
		this8.innerText = params.icon;
		model__$Components_CardTitle_$Impl_$.appendHtml(revealTitle,this8.outerHTML);
		revealParagraph.textContent = "Here is some more information about this product that is only revealed once clicked on.";
		cardTitle.classList.add("activator","gray-text","text-darken-4");
		var link = window.document.createElement("p");
		link.innerHTML = "<a href=\"#\">This is a link</a>";
		card.appendChild(cardImage);
		card.appendChild(cardContent);
		card.appendChild(cardReveal);
		cardContent.appendChild(cardTitle);
		cardContent.appendChild(link);
		cardReveal.appendChild(revealTitle);
		cardReveal.appendChild(revealParagraph);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,revealCardStickyAction: function() {
		var classes = ["s12","m5"];
		var this1 = window.document.createElement("div");
		this1.classList.add("col");
		if(classes != null) {
			var _g = 0;
			while(_g < classes.length) {
				var grid = classes[_g];
				++_g;
				this1.classList.add(grid);
			}
		}
		var innerCol = this1;
		var this2 = window.document.createElement("div");
		this2.classList.add("card","sticky-action");
		var card = this2;
		var this3 = window.document.createElement("div");
		this3.classList.add("card-action");
		var cardAction = this3;
		var this4;
		var i = window.document.createElement("div");
		this4 = window.document.createElement("div");
		this4.classList.add("card-content");
		var cardContent = this4;
		var this5 = window.document.createElement("div");
		this5.classList.add("card-image","waves-effect","waves-light","waves-block");
		var img = window.document.createElement("img");
		img.classList.add("activator");
		img.src = "https://materializecss.com/images/office.jpg";
		this5.appendChild(img);
		var cardImage = this5;
		var this6 = window.document.createElement("span");
		this6.classList.add("card-title");
		this6.innerHTML = "Card Title";
		var cardTitle = this6;
		var this7 = window.document.createElement("div");
		this7.classList.add("card-reveal");
		var cardReveal = this7;
		var this8 = window.document.createElement("span");
		this8.classList.add("card-title");
		this8.innerHTML = "Card Title";
		var revealTitle = this8;
		var revealParagraph = window.document.createElement("p");
		revealTitle.classList.add("gray-text","text-darken-4");
		var params = { icon : "close", direction : "right"};
		var this9 = window.document.createElement("i");
		this9.classList.add("material-icons");
		if(Object.prototype.hasOwnProperty.call(params,"direction")) {
			var direction = params.direction;
			this9.classList.remove("right","left");
			this9.classList.add(direction);
		} else {
			this9.classList.remove("right","left");
			this9.classList.add("right");
		}
		this9.innerText = params.icon;
		model__$Components_CardTitle_$Impl_$.appendHtml(revealTitle,this9.outerHTML);
		revealParagraph.textContent = "Here is some more information about this product that is only revealed once clicked on.";
		cardTitle.classList.add("activator","gray-text","text-darken-4");
		var link = window.document.createElement("p");
		link.innerHTML = "<a href=\"#\">This is a link</a>";
		var contentLinks = window.document.createElement("p");
		contentLinks.innerHTML = "<a href=\"#!\">This is a link</a>";
		cardContent.appendChild(cardTitle);
		cardContent.appendChild(contentLinks);
		cardReveal.appendChild(revealTitle);
		cardReveal.appendChild(revealParagraph);
		cardAction.appendChild(link);
		card.appendChild(cardImage);
		card.appendChild(cardContent);
		card.appendChild(cardAction);
		card.appendChild(cardReveal);
		innerCol.appendChild(card);
		this.col.appendChild(innerCol);
	}
	,cardTabs: function() {
		var this1 = window.document.createElement("div");
		this1.classList.add("card");
		var card = this1;
		var content = [window.document.createElement("div")];
		var this2;
		var i = window.document.createElement("div");
		this2 = window.document.createElement("div");
		this2.classList.add("card-content");
		if(content != null) {
			if((content instanceof Array) && content.__enum__ == null) {
				console.log("it is array");
			} else {
				console.log("it is string");
			}
		}
		var content1 = this2;
		var this3;
		var i1 = window.document.createElement("div");
		this3 = window.document.createElement("div");
		this3.classList.add("card-content");
		if(("asdasd" instanceof Array) && "asdasd".__enum__ == null) {
			console.log("it is array");
		} else {
			console.log("it is string");
		}
		var content2 = this3;
		var this4 = window.document.createElement("div");
		this4.classList.add("card-tabs");
		var tabs = this4;
	}
});
var test_collection_CollectionTest = function(container) {
	test_base_BaseTest.call(this,container);
	this.simpleCollection();
	this.linkCollection();
	this.avatarCollection();
};
test_collection_CollectionTest.__super__ = test_base_BaseTest;
test_collection_CollectionTest.prototype = $extend(test_base_BaseTest.prototype,{
	simpleCollection: function() {
		var listItem;
		var this1 = window.document.createElement("ul");
		this1.classList.add("collection");
		var listCollection = this1;
		listCollection.classList.add("with-header");
		var _g = 0;
		while(_g < 5) {
			var i = _g++;
			var this2 = window.document.createElement("li");
			this2.classList.add("collection-item");
			listItem = this2;
			listItem.textContent = "Alvin";
			if(i == 0) {
				listItem.classList.add("collection-header");
				listItem.innerHTML = "<h4>First Names</h4>";
			} else {
				var anchor = window.document.createElement("a");
				var params = { icon : "send"};
				var this3 = window.document.createElement("i");
				this3.classList.add("material-icons");
				if(Object.prototype.hasOwnProperty.call(params,"direction")) {
					var direction = params.direction;
					this3.classList.remove("right","left");
					this3.classList.add(direction);
				} else {
					this3.classList.remove("right","left");
					this3.classList.add("right");
				}
				this3.innerText = params.icon;
				anchor.appendChild(this3);
				anchor.href = "http://www.devinflow.hu";
				model__$Components_ListCollectionItem_$Impl_$.setSecondaryContent(listItem,anchor);
			}
			model__$Components_ListCollection_$Impl_$.addItem(listCollection,listItem);
		}
		this.appendChild(listCollection);
	}
	,linkCollection: function() {
		var this1 = window.document.createElement("div");
		this1.classList.add("collection");
		var anchorCollection = this1;
		var anchorItem;
		var _g = 0;
		while(_g < 5) {
			var i = _g++;
			var this2 = window.document.createElement("a");
			this2.classList.add("collection-item");
			anchorItem = this2;
			anchorItem.href = "http://www.devinflow.hu";
			anchorItem.text = "Alvin";
			anchorItem.target = "_blank";
			model__$Components_AnchorCollection_$Impl_$.addItem(anchorCollection,anchorItem);
		}
		this.appendChild(anchorCollection);
	}
	,avatarCollection: function() {
		var this1 = window.document.createElement("ul");
		this1.classList.add("collection");
		var avatarCollection = this1;
		var avatarItem;
		var _g = 0;
		while(_g < 5) {
			var i = _g++;
			var this2 = window.document.createElement("li");
			this2.classList.add("collection-item");
			avatarItem = this2;
			avatarItem.classList.add("avatar");
			avatarItem.innerHTML = "<img src=\"https://materializecss.com/images/yuna.jpg\" alt=\"\" class=\"circle\">\n      <span class=\"title\">Title</span>\n      <p>First Line <br>\n         Second Line\n      </p>";
			var anchor = window.document.createElement("a");
			var params = { icon : "grade"};
			var this3 = window.document.createElement("i");
			this3.classList.add("material-icons");
			if(Object.prototype.hasOwnProperty.call(params,"direction")) {
				var direction = params.direction;
				this3.classList.remove("right","left");
				this3.classList.add(direction);
			} else {
				this3.classList.remove("right","left");
				this3.classList.add("right");
			}
			this3.innerText = params.icon;
			anchor.appendChild(this3);
			anchor.href = "http://www.devinflow.hu";
			model__$Components_ListCollectionItem_$Impl_$.setSecondaryContent(avatarItem,anchor);
			model__$Components_ListCollection_$Impl_$.addItem(avatarCollection,avatarItem);
		}
		this.appendChild(avatarCollection);
	}
});
var test_collection_NavbarTest = function(container) {
	test_base_BaseTest.call(this,container);
	var this1 = window.document.createElement("div");
	this1.classList.add("row");
	var row = this1;
	var this2 = window.document.createElement("div");
	this2.classList.add("col");
	var col = this2;
	col.classList.add("s12");
	var this3 = window.document.createElement("a");
	this3.classList.add("brand-logo");
	var brandLogo = this3;
	brandLogo.textContent = "Logo";
	brandLogo.classList.remove("right","left");
	brandLogo.classList.add("right");
	var this4 = window.document.createElement("nav");
	var nav = this4;
	var this5 = window.document.createElement("div");
	this5.classList.add("nav-wrapper");
	var wrapper = this5;
	var this6 = window.document.createElement("ul");
	var navMobile = this6;
	navMobile.classList.remove("right","left");
	navMobile.classList.add("left");
	wrapper.appendChild(navMobile);
	wrapper.appendChild(brandLogo);
	var listItem;
	var _g = 0;
	while(_g < 3) {
		var i = _g++;
		listItem = window.document.createElement("li");
		listItem.innerHTML = "<a href=\"#\">Sass " + (i + 1) + "</a>";
		navMobile.appendChild(listItem);
	}
	nav.appendChild(wrapper);
	col.appendChild(nav);
	row.appendChild(col);
	this.container.appendChild(row);
};
test_collection_NavbarTest.__super__ = test_base_BaseTest;
test_collection_NavbarTest.prototype = $extend(test_base_BaseTest.prototype,{
});
test_Test.main();
})();
