Ext.define('CRUDY.view.Notes', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.notes',
    // controllers: 'extra',
    title: 'Grid Example',
    xtype:'notes',
    store: { type: 'extraApi' },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    },
    columns: [
        {text: 'Id', dataIndex: 'id', flex:1,
            filter: {
                type: 'number', // can be list, numbers, string..., for list add options
                // options: ['Lea', 'Graham', 'Ervin Howell'],
            }
        },
        {text: 'Note', dataIndex: 'body', flex:1},
        {text: 'Date Created', dataIndex: 'created', flex:1},
    ],
    plugins: 'gridfilters',
    id: 'notesGrid',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel',
    },
    buttons: [
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('notesGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Remove All',
            handler: function () {
                Ext.getCmp('notesGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selected data',
            handler: function () {
                var data = Ext.getCmp('notesGrid').getSelectionModel().getSelection();
                console.warn('data', data)
            }
        },
        // {
        //     text: 'Add data',
        //     handler: function (btn) {
        //         var form = Ext.create('note-add');
        //         var data = Ext.getCmp('note-add').getSelectionModel().getSelection();
        //
        //         Ext.getCmp('body').setValue(data.body);
        //         form.show();
        //     }
        // },
    ]
});


