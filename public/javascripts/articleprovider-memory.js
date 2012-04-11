var articleCounter = 1;
ArticleProvider = function() {
};
ArticleProvider.prototype.dummyData = [];

ArticleProvider.prototype.findAll = function(callback) {
	callback(null, this.dummyData)
};

ArticleProvider.prototype.findById = function(id, callback) {
	var result = null;
	for(var i = 0; i < this.dummyData.length; i++) {
		if(this.dummyData[i]._id == id) {
			result = this.dummyData[i];
			break;
		}
	}
	callback(null, result);
};

ArticleProvider.prototype.save = function(apps, callback) {
	var app = null;

	if( typeof (apps.length) === "undefined")
		apps = [apps];

	for(var i = 0; i < apps.length; i++) {
		app = apps[i];
		app.id = articleCounter++;
		this.dummyData[this.dummyData.length] = app;
	}
	callback(null, apps);
};
/* Lets bootstrap with dummy data */
new ArticleProvider().save([{
	id : articleCounter++,
	name : 'Test App',
	blurb: 'Please ignore.',
	download: {
		windows: 'http://www.yahoo.com',
		mac: 'http://www.google.com',
		other: 'http//www.askjeeves.com',
	},
	icon: '/images/wut.png',
	info: 'Blah, blah, blah. Yada, yada, yada.',
}], function(error, articles) {
});

exports.ArticleProvider = ArticleProvider;
