//bootstrap database
var db = Ti.Database.open('TiBountyHunter');
var fugitiveFields = [
	'id INTEGER PRIMARY KEY',
	'name TEXT',
	'captured INTEGER',
	'url TEXT',
	'capturedLat REAL',
	'capturedLong REAL',
	'heightInches INTEGER',
	'heightFeet INTEGER',
	'description TEXT'
];
db.execute('CREATE TABLE IF NOT EXISTS fugitives('+fugitiveFields.join(',')+');');
db.close();

var Fugitive = require_once('js/app/model/Fugitive').Fugitive;

function list(_captured) {
	var fugitiveList = [];
	var db = Ti.Database.open('TiBountyHunter');
	var result = db.execute('SELECT * FROM fugitives WHERE captured = ? ORDER BY name ASC', (_captured) ? 1 : 0);
	while (result.isValidRow()) {
		fugitiveList.push(new Fugitive({
			//add these attributes for the benefit of a table view
			id: result.fieldByName('id'),
			name: result.fieldByName('name'),
			captured: (Number(result.fieldByName('captured')) === 1),
			url: result.fieldByName('url'),
			capturedLat: Number(result.fieldByName('capturedLat')),
			capturedLong: Number(result.fieldByName('capturedLong')),
			heightInches: Number(result.fieldByName('heightInches')),
			heightFeet: Number(result.fieldByName('heightFeet')),
			description: result.fieldByName('description')
		}));
		
		result.next();
	}
	result.close(); //make sure to close the result set
	db.close();

	return fugitiveList;
};
exports.list = list;

function add(fugitive) {
	var db = Ti.Database.open('TiBountyHunter');
	db.execute(
		'INSERT INTO fugitives(name,captured,capturedLat,capturedLong,url,heightFeet,heightInches,description) VALUES(?,?,?,?,?,?,?,?)',
		fugitive.name,
		(fugitive.captured) ? 1:0,
		fugitive.capturedLat,
		fugitive.capturedLong,
		fugitive.url,
		fugitive.heightFeet,
		fugitive.heightInches,
		fugitive.description
	);
	db.close();

	//Dispatch a message to let others know the database has been updated
	Ti.App.fireEvent("databaseUpdated");
}
exports.add = add;

function update(fugitive) {
	var db = Ti.Database.open('TiBountyHunter');
	db.execute(
		'UPDATE fugitives SET name = ?, captured = ?, capturedLat = ?, capturedLong = ?, url = ?, heightFeet = ?, heightInches = ?, description = ? WHERE id = ?',
		fugitive.name,
		(fugitive.captured) ? 1:0,
		fugitive.capturedLat,
		fugitive.capturedLong,
		fugitive.url,
		fugitive.heightFeet,
		fugitive.heightInches,
		fugitive.description,
		fugitive.id
	);
	db.close();

	//Dispatch a message to let others know the database has been updated
	Ti.App.fireEvent("databaseUpdated");
}
exports.update = update;

function remove(fugitive) {
	var db = Ti.Database.open('TiBountyHunter');
	db.execute("DELETE FROM fugitives WHERE id = ?",fugitive.id);
	db.close();

	//Dispatch a message to let others know the database has been updated
	Ti.App.fireEvent("databaseUpdated");
}
exports.remove = remove;

//determine if the database needs to be seeded
var net = require_once('js/app/common/network');
if (!Ti.App.Properties.hasProperty('seeded')) {
	net.fetchFugitives(function(data) {
		for (var i = 0;i<data.length;i++) {
			add(new Fugitive({
				name:data[i].name
			}));
		}
	});
	Ti.App.Properties.setString('seeded','yuppers');
}