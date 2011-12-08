function Fugitive(args) {
	this.id = args.id;
	this.name = args.name||'John Doe';
	this.captured = args.captured||false;
	this.description = args.description||'Wanted dead or alive';
	this.url = args.url;
	this.capturedLat = args.capturedLat;
	this.capturedLong = args.capturedLong;
	this.heightFeet = args.heightFeet;
	this.heightInches = args.heightInches;
}
exports.Fugitive = Fugitive;
