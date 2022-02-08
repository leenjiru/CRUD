Ext.define('CRUDY.model.Extra', {
    extend: 'Ext.data.Model',
    alias: 'model.extra',
    fields: [
        {name:'name', type: 'string'},
        {email:'email',},
        {phone:'phone', type: 'int'}
    ]

});