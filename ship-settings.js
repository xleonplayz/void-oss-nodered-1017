// Deployment configuration only. Node-RED application sources remain upstream.
const path = require('path');
if (!process.env.SHIP_ADMIN_HASH) {
    throw new Error('SHIP_ADMIN_HASH is required to protect the editor');
}
module.exports = {
    uiPort: Number(process.env.PORT || 1880),
    uiHost: '0.0.0.0',
    userDir: process.env.SHIP_DATA_DIR || path.join(__dirname, '.ship-data'),
    flowFile: 'flows.json',
    httpAdminRoot: '/admin',
    httpNodeRoot: '/',
    adminAuth: {
        type: 'credentials',
        users: [{ username: 'ship-admin', password: process.env.SHIP_ADMIN_HASH, permissions: '*' }]
    },
    functionExternalModules: false,
    externalModules: { palette: { allowInstall: false }, modules: { allowInstall: false } },
    editorTheme: { tours: false, projects: { enabled: false } },
    logging: { console: { level: 'info', metrics: false, audit: false } }
};
