Ext.define('CRUDY.store.ExtraApi', {
    extend: 'Ext.data.Store',
    alias: 'store.extraApi', 
    pageSize: 2,
    proxy: {
        type: 'ajax',
        url: 'https://mynotesapilee.herokuapp.com/notes/',
    },
    autoLoad: true,

})