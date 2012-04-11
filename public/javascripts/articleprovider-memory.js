
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
			mac: null,
			other: null,
		},
		icon: '/images/npp.png',
		info: 'Much better than Notepad.',
	},
	{
		name : 'Aptana',
		blurb: 'The Web IDE',
		download: {
			windows: '',
			mac: '',
			other: '',
		},
		icon: '/images/aptana.png',
		info: 'Built on Eclipse.',
	},
	{
		name : 'Eclipse',
		blurb: 'All encompassing IDE',
		download: {
			windows: '',
			mac: '',
			other: '',
		},
		icon: '/images/eclipse.png',
		info: 'Java, C++, etc.',
	},
	{
		name : 'Google Chrome',
		blurb: 'Super Fast Browser',
		download: {
			windows: '',
			mac: '',
			other: '',
		},
		icon: '/images/chrome.png',
		info: 'Based on open source Chromium browser',
	},
	{
		name : 'Mozilla Firefox',
		blurb: 'Fast Browser',
		download: {
			windows: '',
			mac: '',
			other: '',
		},
		icon: '/images/firefox.png',
		info: 'Either use this or Chrome',
	},
	{
		name : 'Pidgin',
		blurb: 'Instant Message Client',
		download: {
			windows: '',
			mac: null,
			other: '',
		},
		icon: '/images/pidgin.png',
		info: 'Customizable, Extensable, Awesome',
	},
	{
		name : '7-zip',
		blurb: 'Compression',
		download: {
			windows:'',
			mac:'',
			other:'',
		},
		icon: '/images/7zip.png',
		info: 'Really good compression',
	},
	{
		name :'CCleaner',
		blurb:'Free up HD space',
		download: {
			windows:'',
			mac:'',
			other:'',
		},
		icon:'/images/ccleaner.png',
		info:'Removes unnecessary files to free space',
	},
	{
		name :'Evernote',
		blurb:'Remember Stuff on all the things',
		download: {
			windows:'',
			mac:'',
			other:'',
		},
		icon:'/images/evernote.png',
		info:'Cross platform lists in the cloud',
	},
	{
		name :'Launchy',
		blurb:'Launch Apps Fast',
		download: {
			windows:'',
			mac:null,
			other:null,
		},
		icon:'/images/launchy.png',
		info:'Text based app launcher',
	},
	{
		name :'Windows Grep',
		blurb:'GUI Grep',
		download: {
			windows:'',
			mac:null,
			other:null,
		},
		icon:'/images/wingrep.png',
		info:'GUI Grep tool for Windows',
	},
	{
		name :'WinMerge',
		blurb:'Pretty Diffs',
		download: {
			windows:'',
			mac:null,
			other:null,
		},
		icon:'/images/winmerge.png',
		info:'Diff all the things',
	},
	{
		name :'VLC',
		blurb:'Play all the things!',
		download: {
			windows:'',
			mac:'',
			other:'',
		},
		icon:'/images/vlc.png',
		info:'Media player that plays everything',
	},
], function(error, articles) {
});

exports.ArticleProvider = ArticleProvider;
