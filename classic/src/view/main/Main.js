/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CRUDY.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'CRUDY.view.main.MainController',
        'CRUDY.view.main.MainModel',
        'CRUDY.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'Extra'
        }]
    }, {
        title: 'Add Note',
        iconCls: 'fa-plus-circle',
        controller: 'extra',
        url: 'https://mynotesapilee.herokuapp.com/note/create/',
        xtype: 'form',
        itemId: 'note-add',
        alias: 'note-add',
        items: [
            {
                xtype: 'container',
                layout: 'form',
                items: [{
                    xtype: 'textarea',
                    fieldLabel: 'Body',
                    name: 'body',
                    id: 'thisID',
                    labelAlign: 'top',
                    cls: 'field-margin',
                    flex: 1,
                }]
            }
        ],
        buttons: [
            {
                text: 'Add Note',
                handler: function (btn) {
                    form = btn.up('form').getForm();
                    form.submit(
                        {
                            success: function (form, action)
                            {
                                var store = Ext.StoreManager.lookup('ExtraApi');
                                store.reload();
                            },
                            failure: function (form, action)
                            {
                                Ext.Msg.alert('Status', 'Successfully added note')
                            }

                        }
                    );
                }
            }
        ]
    }, {
        title: 'Notes',
        iconCls: 'fa-sticky-note',
        items: [{
            xtype: 'notes',
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
