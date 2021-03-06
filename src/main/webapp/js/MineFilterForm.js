/**
 * Builds updateCSWRecords form panel for Mine filters
 * @param id to specify the id of this formpanel instance
 * @param serviceUrl the service url for submit
 */
MineFilterForm = function(id, serviceUrl) {
    /*var mineNamesStore = new Ext.data.Store({
        baseParams: {serviceUrl: serviceUrl},
        proxy: new Ext.data.HttpProxy(new Ext.data.Connection({url: '/getMineNames.do', timeout:180000})),
        reader: new Ext.data.JsonReader({
            root:'data'
        }, [{name:'mineDisplayName', mapping:'mineDisplayName'}])
    });*/

    Ext.FormPanel.call(this, {
        //region: "center",
        //collapsible: true,
        //title: "Filter Properties",
        //url: loadUrl,
        id: 'my-id-'+id,
        border: false,
        autoScroll:true,
        hideMode:'offsets',
        width: '100%',
        buttonAlign: 'right',
        labelAlign: 'right',
        labelWidth: 60,

        //labelWidth: 140,
        timeout: 180, //should not time out before the server does

        items: [{
            xtype:'fieldset',
            title: 'Mine Filter Properties',

            autoHeight:true,
            anchor: '100%',

            items :[
            {
                anchor: '100%',
                xtype: 'textfield',
                fieldLabel: 'Mine Name',
                name: 'mineName'
            }
            /*new Ext.form.ComboBox({
                anchor: '100%',
                autoWidth: true,
                name: 'mineName',
                displayField:'mineDisplayName',
                editable: true,
                fieldLabel: 'Mine Name',
                forceSelection: true,
                listWidth: 300,            // 'auto' does not work in IE6
                mode: 'remote',
                selectOnFocus: true,
                store: mineNamesStore,
                triggerAction: 'all',
                typeAhead: true,
                valueField:'mineDisplayName',
                xtype: 'combo'
            })*/
            ]
        }]
        /*buttons: [{
            text: 'Show Me >>',
            handler: function() {
                preSubmitFunction();
                thePanel.getForm().submit({
                    url:submitUrl,
                    waitMsg:'Running query...',
                    params: {serviceUrl: serviceUrl},
                    success: successFunction,
                    failure: function(form, action) {
                        Ext.MessageBox.show({
                            title: 'Filter Failed',
                            msg: action.result.msg,
                            buttons: Ext.MessageBox.OK,
                            animEl: 'mb9',
                            icon: Ext.MessageBox.ERROR
                        });
                    }
                });
            }
        }]*/
    });
    //return thePanel;
};

MineFilterForm.prototype = new Ext.FormPanel();
