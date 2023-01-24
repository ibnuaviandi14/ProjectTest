# INTRODUCTION
ANDROID TESTING

# AIM
Perform the Android Automation Testing for HappyDayShopping
Trying to buy an item on the application and ensure the item has been added into the bag

# Mechanism
TEST STEP: startApplication
TEST STEP: tap FlashSale_button
TEST STEP: tap Product_button
TEST STEP: clearTextQuantity1_button
TEST STEP: setText Quantity5_button
TEST STEP: tap AddtoBag_button
TEST STEP: tapCheckProduct_button
TEST STEP: getText AssertProduct_button
TEST STEP: tap Checkout_button
TEST STEP: getText AssertBag_button
TEST STEP: delay(5, STOP_ON_FAILURE)
TEST STEP: closeApplication
