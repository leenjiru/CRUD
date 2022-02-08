Ext.define('CRUDY.model.Notes', {
    extend: 'Ext.data.Model',
    alias: 'model.notes',
    fields: [
        {id:'id', type: 'int'},
        {body:'body'},
        {created:'created'}
    ]

});