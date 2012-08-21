Ext.application({
    name: 'Ennis',
    // my googleApps api AIzaSyDlpGCFNSz5KMeknwL4YxqoV5BpMwuYjnc

    requires: [
        'Ext.MessageBox'
    ],

    models: ['Leg', 'Marker', 'Point', 'Route'],

    stores: ['Legs', 'Points', 'Routes'],

    views: ['Detail', 'Directions', 'Main', 'Map', 'Routes'],

    controllers: ['Router', 'Map'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    phoneStartUpScreen: 'resources/images/loading.png',

    startupImage: {
        '320x460': 'resources/images/loading-320x460.png',
        '640x920': 'resources/images/loading.png',
        '768x1004': 'resources/images/loading.png',
        '748x1024': 'resources/images/loading.png',
        '1536x2008': 'resources/images/loading.png',
        '1496x2048': 'resources/images/loading.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        
        // Initialize the main view
        Ext.Viewport.add(Ext.create('Ennis.view.Main'));

        Ext.Viewport.on('cardswitch', function(newCard, oldCard){
            console.log('cardswitch event');
        });

        Ext.Viewport.onAfter('activeitemchange', function() {
            
            if(Ext.Viewport.getActiveItem()!==Ext.getCmp('detailpanel')){
                console.log('hello');
                //Ext.Viewport.remove(Ext.getCmp('detailpanel'));
                //Ext.Viewport.destroy();
                //Ext.getCmp('detailpanel').destroy();
            }   
        });
    },



    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
