define([
       'ko',
       'uiComponent'
    ], function (ko, Component) {
       'use strict';
       return Component.extend({
           initialize: function () {
               //initialize parent Component
               this._super();
               this.qty = ko.observable(this.defaultQty);
           },
           decreaseQty: function() {
               var newQty = this.qty() - 1;
               if (newQty < 1) 
               {
                   newQty = 1;
               }
               this.qty(newQty);
           },
           increaseQty: function() {
               var newQty = this.qty() + 1;
               this.qty(newQty);
           }
       });
    });

/**     'use strict';
define([
    'ko',
    'uiElement'
], function (ko, Element) {
    return Element.extend({
        defaults: {
            template: 'Magento_Catalog/input-counter'
        },
 
        initObservable: function () {
            this._super()
                .observe('qty');
 
            return this;
        },
 
        getDataValidator: function() {
            return JSON.stringify(this.dataValidate);
        },
 
        decreaseQty: function() {
            var qty;
 
            if (this.qty() > 1) {
                qty = this.qty() - 1;
            } else {
                qty = 1;
            }
 
            this.qty(qty);
        },
 
        increaseQty: function() {
            var qty = this.qty() + 1;
 
            this.qty(qty);
        }
    });
});
*/