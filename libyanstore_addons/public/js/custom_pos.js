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