console.log('loading customization!2');
frappe.provide("erpnext.PointOfSale")
frappe.provide("erpnext.PointOfSale.PastOrderSummary")


// var interval = setInterval(function() {
//     if (erpnext.PointOfSale.PastOrderSummary.prototype.get_condition_btn_map == 'undefined') return;
//     clearInterval(interval);
    
//     erpnext.PointOfSale.PastOrderSummary.prototype = function(after_submission) {
//         console.log('TF!');
//         if (after_submission)
//             return [{ condition: true, visible_btns: ['Print Receipt', 'Email Receipt', 'New Order'] }];
    
//         return [
//             { condition: this.doc.docstatus === 0, visible_btns: ['Edit Order', 'Delete Order'] },
//             { condition: !this.doc.is_return && this.doc.docstatus === 1, visible_btns: ['Print Warranty2', 'Print Receipt', 'Email Receipt', 'Return']},
//             { condition: this.doc.is_return && this.doc.docstatus === 1, visible_btns: ['Print Receipt', 'Email Receipt']}
//         ];
//     }
// }, 50)


$.extend(
    erpnext.PointOfSale, {
        get_condition_btn_map: function(after_submission) {
        
            if (after_submission)
                return [{ condition: true, visible_btns: ['Print Receipt', 'Email Receipt', 'New Order'] }];

            return [
                { condition: this.doc.docstatus === 0, visible_btns: ['Edit Order', 'Delete Order'] },
                { condition: !this.doc.is_return && this.doc.docstatus === 1, visible_btns: ['Print Warranty2', 'Print Receipt', 'Email Receipt', 'Return']},
                { condition: this.doc.is_return && this.doc.docstatus === 1, visible_btns: ['Print Receipt', 'Email Receipt']}
            ];
      }
  });
  

// erpnext.PointOfSale.PastOrderSummary = class {
//     constructor() {
//         console.log('pfff');
//     }
// }

$.extend(
    erpnext.PointOfSale.PastOrderSummary, {
        print_receipt: function() {
          console.log("PREPARE?")
      }
  });

// erpnext.PointOfSale.PastOrderSummary.prototype.prepare_dom = function() {
//     console.log('append: D');
//     this.wrapper.append(
//         `<section class="past-order-summary">
//             <div class="no-summary-placeholder">
//                 Select an invoice to load summary data
//             </div>
//             <div class="invoice-summary-wrapper">
//                 <div class="abs-container">
//                     <div class="upper-section"></div>
//                     <div class="label">Items</div>
//                     <div class="items-container summary-container"></div>
//                     <div class="label">Totals</div>
//                     <div class="totals-container summary-container"></div>
//                     <div class="label">Payments</div>
//                     <div class="payments-container summary-container"></div>
//                     <div class="summary-btns"></div>
//                 </div>
//             </div>
//         </section>`
//     );

//     this.$component = this.wrapper.find('.past-order-summary');
//     this.$summary_wrapper = this.$component.find('.invoice-summary-wrapper');
//     this.$summary_container = this.$component.find('.abs-container');
//     this.$upper_section = this.$summary_container.find('.upper-section');
//     this.$items_container = this.$summary_container.find('.items-container');
//     this.$totals_container = this.$summary_container.find('.totals-container');
//     this.$payment_container = this.$summary_container.find('.payments-container');
//     this.$summary_btns = this.$summary_container.find('.summary-btns');
// }


// class PItm extends POSItems {

// }
// $( document ).ready(function() {
//     // Handler for .ready() called.
//     frappe.pages["point-of-sale"].page.add_button("Print Warranty", function(arg) {
//         console.log(arg, "GOGOGO")
//     });
//   });
// window.addEventListener('DOMContentLoaded', (event) => {
// });
// frappe.pages['point-of-sale'].refresh = function(wrapper) {
//     console.log('wrapper!');
// 	if (document.scannerDetectionData) {
//         onScan.detachFrom(document);
// 		wrapper.pos.wrapper.html(`""`);
// 		wrapper.pos.check_opening_entry();
// 	}
//     cur_pos.page.add_button("Print Warranty", function(arg) {
//         console.log(arg, "GOGOGO")
//     });
// }