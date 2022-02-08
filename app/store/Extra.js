Ext.define('CRUDY.store.Extra',{
    extend: 'Ext.data.Store',
    alias: 'store.extra',
    model: 'CRUDY.model.Extra',
    itemId: 'extra',
    storeId: 'extra',

    data: {
        items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
            { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
            { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" },
            {name: 'Lee Njiru', email: "leenjiru@gmail.com",            phone: "2547-262-2225"}  
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});