// Ext.define('CRUDY.view.main.Extra', {
//     extend: 'Ext.container.Container', 
//     xtype: 'Extra',
//     controller: 'extra',
//     items: [
//         {
//             title: 'Trying the extras',
//             html: 'Hello there'
//         },
//         {
//             xtype: 'button',
//             name: 'click',
//             text: 'Call controller', 
//             itemId: 'callController'
//         },
//         {
//             xtype: 'button',
//             name: 'another btn',
//             text: 'Click btn 2',
//             itemId: 'button2'
//         },
//     ]
// });
// var user = Ext.create('CRUDY.model.Personnel', {
//     name: 'Conan',
// });
// user.changeName();

Ext.define('CRUDY.view.Extra', {
    extend: 'Ext.grid.Panel',
    xtype: 'Extra',
    title: 'Grid Example',
    // store: { type: 'extraApi' },
    store: 'UsersStore',
    controller: 'extra',
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
        {text: 'First Name', dataIndex: 'first_name', flex:1},
        {text: 'Last Name', dataIndex: 'last_name', flex:1},
        {text: 'Phone Number', dataIndex: 'phone', flex:1},
        {text: 'Phone Number', dataIndex: 'email', flex:1},
    ],
    listeners: {
        itemdblclick: function (sender, record)
        {
            var form = Ext.create('CRUDY.view.main.Edit');

            // console.log('MY data--->', record)
            Ext.getCmp('id').setValue(record.data.id);
            Ext.getCmp('first_name').setValue(record.data.first_name);
            Ext.getCmp('last_name').setValue(record.data.last_name);
            Ext.getCmp('phone').setValue(record.data.phone);
            Ext.getCmp('email').setValue(record.data.email);

            form.show();
        }
    },
    // layout: 'hbox',
    // height: 300,
    // width: 700,
    plugins: 'gridfilters',
    id: 'testGrid',
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
                Ext.getCmp('testGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Remove All',
            handler: function () {
                Ext.getCmp('testGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selected data',
            handler: function () {
                var data = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                console.warn('data', data)
            }
        },
        {
            text: 'Show PopUp',
            handler: function () {
                pop = Ext.create('CRUDY.view.main.Delete');
                pop.show();

            }
        },
        {
            text: 'Add data',
            handler: function (btn) {
                var form = Ext.create('CRUDY.view.main.Add');
                var data = Ext.getCmp('testGrid').getSelectionModel().getSelection();

                Ext.getCmp('first_name').setValue(data.first_name);
                Ext.getCmp('last_name').setValue(data.last_name);
                // Ext.getCmp('upd_date').setValue(record.data.created);
                Ext.getCmp('phone').setValue(data.phone);
                Ext.getCmp('email').setValue(data.email);
                form.show();
            }
        },
        {
            text: 'Delete data',

            listeners: {
                click: function()
                {
                    var records = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                    if (records.length > 0)
                    {
                        var data = records[0];
                        console.log('==========>', data)
                        var form = Ext.create('CRUDY.view.main.Delete');

                        Ext.getCmp('id').setValue(data.get('id'));
                        Ext.getCmp('first_name').setValue(data.get('first_name'));
                        Ext.getCmp('last_name').setValue(data.get('last_name'));
                        Ext.getCmp('phone').setValue(data.get('phone'));
                        Ext.getCmp('email').setValue(data.get('email'));
                        form.show();
                    }
                    else
                    {
                        Ext.Msg.alert('Status', 'Please choose a record to delete.')
                    }
                }

            }
        }

    ]
});


