Ext.define('CRUDY.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id: 'Viewport',
    items: [
        {
            region: 'north',
            html: '<h1>OUR HEADER</h1>'
        },
        {
            region: 'center',
            xtype: 'tabpanel',
            activeTab: 0,
            itemId: 'viewport-target'
        },
        {
            region: 'south',
            html: '<h1>OUR FOOTER</h1>'
        },
    ]
});