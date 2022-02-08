/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CRUDY.Application',

    name: 'CRUDY',

    requires: [
        // This will automatically load all classes in the CRUDY namespace
        // so that application classes do not need to require each other.
        'CRUDY.*'
    ],
    // launch: function () {
    //     viewport=Ext.getCmp('Viewport');
    //     target=viewport.down('#viewport-target');
    //     view=Ext.create('CRUDY.view.Extra');
    //     target.add(view);
    // },

    // The name of the initial view to create.
    mainView: 'CRUDY.view.main.Main',
    // autoCreateViewport: true,
});
