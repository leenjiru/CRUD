Ext.define('CRUDY.view.PopUp', {
    extend: 'Ext.window.Window',
    height: 200,
    width: 400,
    layout: 'fit',
    items: {
        xtype: 'grid',
        border: false,
        columns: [
            {header: 'Name'},
            {header: 'email'}
        ],
        store: []
    }
})