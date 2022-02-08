Ext.define('CRUDY.model.UsersModel', {
    extend: 'Ext.data.Model',
    alias: 'model.users',
    fields: [
        {id:'name'},
        {first_name: 'first_name'},
        {last_name: 'last_name'},
        {phone:'phone', type: 'int'}
    ]

});