let waitForChild = (selector) => {
    return new Promise((resolve) => {
        if (!"MutationObserver" in window) {
            alert("ETMS: Your Browser not supported")
        }
        const target = document.querySelector(selector)
        if (target) {
            return resolve(target)
        }

        const observer = new MutationObserver((mutations) => {
            const target = document.querySelector(selector)
            if (target) {
                resolve(target);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    });
}
function waitForProperty(obj, path, interval) {
    return new Promise(async (resolve) => {
        while (true) {
            await new Promise((r) => {
                setTimeout(r, interval);
            });
            if (path.split('.').every(k => k in obj && (obj = obj[k], true))) {
                resolve(true);
                break;
            }
        }
        // dont continue property must be resolved
        // resolve(false);
    });
}
(async function () {
    var resolved = await waitForProperty(window, "cur_pos.order_summary.load_summary_of", 3000);
    window.waitForPropertyState = resolved;
    var _lso = cur_pos.order_summary.load_summary_of;
    cur_pos.order_summary.load_summary_of = function (doc, after_submission) {
        _lso.apply(this, [doc, after_submission]);
        
        waitForChild("div.print-btn").then(res => {
            jQuery(
                `<div class="summary-btn btn btn-default warranty-btn">${frappe._("Warranty Print")}</div>`
            ).insertAfter("div.print-btn")
            document.querySelector(".warranty-btn").addEventListener("click", function () {
                var d = new frappe.ui.Dialog({
                    title: frappe._("Print Format"),
                    fields: [
                        {
                            label: 'Print Format',
                            fieldname: 'print_format',
                            fieldtype: 'Link',
                            options: 'Print Format',
                            default: 'Default Warranty Print Format'
                        }
                    ],
                    primary_action_label: frappe._('Submit'),
                    primary_action(values) {
                        frappe.utils.print(
                            cur_frm.doc.doctype,
                            cur_frm.doc.name,
                            values.print_format,
                            cur_frm.doc.letter_head,
                            cur_frm.doc.language || frappe.boot.lang
                        );
                        // d.hide();
                    }
                }).show();
            })
        })
    }
})()
