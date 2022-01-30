import Clients from '../models/clients';
import Storages from '../models/storages';
import Settings from '../models/setting';

Storages.belongsTo(Clients, {foreignKey: 'id_client'});
Settings.belongsTo(Storages, {foreignKey: 'id_storages'});

export {
    Clients,
    Settings,
    Storages
}
