import frappe
from frappe.model.document import Document

class ShippingArea(Document):
    def validate(self):
        if self.expected_delivery:
        	self.expected_delivery = self.expected_delivery + " " + "ساعة"