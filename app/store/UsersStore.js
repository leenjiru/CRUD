Ext.define('CRUDY.store.UserStore', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'UsersStore',
    storeId: 'UsersStore',
    proxy: {
        url:BASE_URL + 'UsersController/getUsers',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total'
        }
    }
});