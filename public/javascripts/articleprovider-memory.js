
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
		this.dummyData[this.dummyData.length] = apps[i];
	}
	callback(null, apps);
};
/* Lets bootstrap with dummy data */
new ArticleProvider().save([
	{
		name : 'Test App',
		blurb: 'Please ignore.',
		download: {
			windows: 'http://www.yahoo.com',
			mac: 'http://www.google.com',
			other: 'http//www.askjeeves.com',
		},
		icon: '/images/wut.png',
		info: 'Blah, blah, blah. Yada, yada, yada.',
	},
	{
		name : 'Notepad++',
		blurb: 'All purpose text-editing sweetness.',
		download: {
			windows: 'http://download.tuxfamily.org/notepadplus/6.1/npp.6.1.Installer.exe',
			mac: 'http://notepad-plus-plus.org/download/v6.1.html',
			other: 'http://notepad-plus-plus.org/download/v6.1.html',
		},
		icon: '/images/npp.png',
		info: 'Much better than Notepad.',
	}
], function(error, articles) {
});

exports.ArticleProvider = ArticleProvider;
