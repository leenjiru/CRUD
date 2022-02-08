Ext.define('CRUDY.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    init: function (){
        this.control({
            '#callController': {
                click: 'callOnClick'
            },
            '#button2': {
                click: 'callClick2'
            },
        })
    },
    callOnClick:function()
    {
        alert('Hello from controller')
    },
    callClick2:function(){
        alert('I am button 2')
    },
    /*onItemSelected: function (sender, record) {
        var form = Ext.create('CRUDY.view.main.Edit');

        // console.log('MY data--->', record)
        Ext.getCmp('id').setValue(record.data.id);
        Ext.getCmp('first_name').setValue(record.data.first_name);
        Ext.getCmp('last_name').setValue(record.data.last_name);
        // Ext.getCmp('_date').setValue(record.data.created);
        Ext.getCmp('phone').setValue(record.data.phone);
        Ext.getCmp('email').setValue(record.data.email);

        form.show();
    },*/

    doUpdate: function (btn) {
        // myid = Ext.getCmp('id').getValue()
        // url = 'https://mynotesapilee.herokuapp.com/note/' + myid +'/update/'
        url = BASE_URL + 'UsersController/updateUsers'
        var form = btn.up('edit-form');
        // console.warn('record----->', form)
        form.submit({
            url: url,
            success: function() {
                Ext.Msg.alert('Success', 'update successful');
                var store = Ext.StoreManager.lookup('UsersStore');
                store.reload();
                form.destroy();
             },
             failure: function(form, action) {
                 switch (action.failureType) {
                    case Ext.form.action.Action.CLIENT_INVALID:
                         Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                         break;
                     case Ext.form.action.Action.CONNECT_FAILURE:
                         Ext.Msg.alert('Failure', 'Ajax communication failed');
                         break;
                     case Ext.form.action.Action.SERVER_INVALID:
                        Ext.Msg.alert('Failure', action.result.msg);
                }
             }
        },
        
        )
    },
    onAdd: function (btn) {
        var form = btn.up('form');
        console.warn(form);
        form.submit(
            {
                url:BASE_URL + 'UsersController/saveUsers',
                success: function() {
                    Ext.Msg.alert('Success', 'User saved successfully.')
                    var store = Ext.StoreManager.lookup('UsersStore');
                    store.reload();
                    form.destroy();
                },
                failure: function() {
                    Ext.Msg.alert('Failure', 'Failed to save user.')
                }
            }
        );
    },
    doDelete: function (btn, record)
    {
        var form = btn.up('delete-form');
        if (record.data > 1)
        {
            console.warn('---==========>', 'many')
        }
        form.submit(
            {
                url: BASE_URL + 'UsersController/deleteUser',
                success: function()
                {
                    Ext.Msg.alert('Success', 'Deleted')
                    var store = Ext.StoreManager.lookup('UsersStore');
                    store.reload();
                    form.destroy();
                },
                failure: function() {
                    Ext.Msg.alert('Failure', 'Delete failed')
                }
            }
        )
    }

});