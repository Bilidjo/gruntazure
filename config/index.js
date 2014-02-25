var config = {
    local: {
        mode: 'local',
        port: process.env.PORT || 3005,
        
    },
    staging: {
        mode: 'staging',
        port: process.env.PORT || 4000,
        
    },
    production: {
        mode: 'production',
        port: process.env.PORT || 5000,
        
    }

}
module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}