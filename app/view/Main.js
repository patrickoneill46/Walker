Ext.define("Ennis.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ennis.view.Map',
        'Ennis.view.Routes',
        'Ennis.view.Directions'
    ],
    xtype: 'mainpanel',
    config: {
        tabBarPosition: 'bottom',
        //id: 'mainpanel',
        items: [
            {
                xtype: 'routeselection'
            },
            {
                xtype: 'mapview'
            },
            {
                xtype: 'directionspanel'
            }
        ]
    }
});
