Ext.define('CRUDY.view.main.Add', {
    extend: 'Ext.form.Panel',
    xtype: 'add-form',
    controller: 'extra',
    // url: 'https://mynotesapilee.herokuapp.com/note/create/',
    // url:BASE_URL + 'UsersController/saveUsers',

    title: 'Add data',
    bodyPadding: 5,
    frame: true,
    width: 450,
    height: 300,
    alwaysOnTop: true,
    floating: true,
    closable: true,
    modal: true,
    id: 'addRecForm',

    fieldDefaults: {
        labelWidth: 110,
        anchor: '100%'
    },

    items: [
        {
            xtype: 'container',
            layout: 'form',
            items:
                [
                {
                xtype: 'textfield',
                fieldLabel: 'First Name',
                name: 'first_name',
                id: 'first_name',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
            },{
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                name: 'last_name',
                id: 'last_name',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                },{
                xtype: 'textfield',
                fieldLabel: 'Phone',
                name: 'phone',
                id: 'phone',
                regex: /^[(+{254})|(00{1})|(1425{1})|(1445{1})]+([0-9]){7,10}$/,
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
            },{
                xtype: 'textfield',
                fieldLabel: 'email',
                vtype:'email',
                name: 'email',
                id: 'email',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
            }
            ]
        }

    ],
    buttons: [
        {
            text: 'Add User',
            formBind: true,
            handler: 'onAdd'
        }
    ]
})