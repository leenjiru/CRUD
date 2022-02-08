Ext.define('CRUDY.view.main.Edit', {
    extend: 'Ext.form.Panel',
    xtype: 'edit-form',
    controller: 'extra',
    itemId: 'my-form',
    title: 'Edit Details',
    bodyPadding: 5,
    frame: true,
    width: 400,
    height: 350,
    alwaysOnTop: true,
    floating: true,
    closable: true,
    modal: true,
    id: 'dataRecForm',

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
                        fieldLabel: 'ID',
                        name: 'id',
                        id: 'id',
                        labelAlign: top,
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'First Name',
                        name: 'first_name',
                        id: 'first_name',
                        allowBlank:false,
                        labelAlign: top,
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Last Name',
                        name: 'last_name',
                        id: 'last_name',
                        required: true,
                        labelAlign: top,
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Phone',
                        name: 'phone',
                        id: 'phone',
                        regex: /^[(+{254})|(00{1})|(1425{1})|(1445{1})]+([0-9]){7,10}$/,
                        labelAlign: top,
                        cls: 'field-margin',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Email',
                        name: 'email',
                        id: 'email',
                        labelAlign: top,
                        cls: 'field-margin',
                        flex: 1
                    },

                ]
        }
    ],
    buttons:
        [
            {
                text: 'Update',
                formBind:true,
                handler: 'doUpdate'
            },
            // {
            //     text: 'Delete',
            //     handler: 'doDelete'
            // }
        ]
})