Ext.define('CRUDY.view.Search', {
    extend: 'Ext.form.Panel',
    title: 'SEARCH FORM',
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First Name',
            name: 'firstName'
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName'
        },
        {
            fieldLabel: 'email',
            name: 'email'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'DOB',
            name: 'dob'
        }
    ],
    buttons: [
        {
            text: 'SUBMIT',
            handler: function (btn) {
                var data = this.up('form');
                console.warn('form data:', data.getForm().getValues());
            }
        }
    ]
});