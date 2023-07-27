import frappe


def validate(doc, method):
    item_prices = frappe.get_all(
        "Item Price",
        filters={
            "item_code": doc.item_code
        }
    )

    for item_price in item_prices:
        frappe.db.set_value(
            "Item Price",
            item_price["name"],
            "generated_barcode",
            doc.generated_barcode
        )
