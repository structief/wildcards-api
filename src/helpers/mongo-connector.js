const {MongoClient} = require('mongodb');

const config = require('./../config');

const MONGO_URL = 'mongodb://' + config.mongo_url + '/wildcards';

module.exports = async () => {
	const db = await MongoClient.connect(MONGO_URL);
	return {
		Stories: db.collection('collections_Stories5974b6e097ea2'), 
		Cards: db.collection('collections_Cards5974b5a160809'),
		Sources: db.collection('collections_Sources5974b82c30ead'),
		Topics: db.collection('collections_Topics597a53c4e3e5f'),
		Accounts: db.collection('cockpit_accounts'),
		Devices: db.collection('wildcards_accounts'),
		Follows: db.collection('wildcards_follows')
	}
}