// import {
//   reactExtension,
//   Banner,
//   BlockStack,
//   Checkbox,
//   Text,
//   useApi,
//   useApplyAttributeChange,
//   useInstructions,
//   useTranslate,
// } from "@shopify/ui-extensions-react/checkout";

// // 1. Choose an extension target
// export default reactExtension("purchase.checkout.block.render", () => (
//   <Extension />
// ));

// function Extension() {
//   const translate = useTranslate();
//   const { extension } = useApi();
//   const instructions = useInstructions();
//   const applyAttributeChange = useApplyAttributeChange();

//   // 2. Check instructions for feature availability, see https://shopify.dev/docs/api/checkout-ui-extensions/apis/cart-instructions for details
//   if (!instructions.attributes.canUpdateAttributes) {
//     // For checkouts such as draft order invoices, cart attributes may not be allowed
//     // Consider rendering a fallback UI or nothing at all, if the feature is unavailable
//     return (
//       <Banner title="order-alpha" status="warning">
//         {translate("attributeChangesAreNotSupported")}
//       </Banner>
//     );
//   }

//   // 3. Render a UI
//   return (
//     <BlockStack border={"dotted"} padding={"tight"}>
//       <Banner title="order-alpha">
//         {translate("welcome", {
//           target: <Text emphasis="italic">{extension.target}</Text>,
//         })}
//       </Banner>
//       <Checkbox onChange={onCheckboxChange}>
//         {translate("iWouldLikeAFreeGiftWithMyOrder")}
//       </Checkbox>
//     </BlockStack>
//   );

//   async function onCheckboxChange(isChecked) {
//     // 4. Call the API to modify checkout
//     const result = await applyAttributeChange({
//       key: "requestedFreeGift",
//       type: "updateAttribute",
//       value: isChecked ? "yes" : "no",
//     });
//     console.log("applyAttributeChange result", result);
//   }
// }

import {
  reactExtension,
  Text,
  Banner,
  
} from "@shopify/ui-extensions-react/checkout";

//this works - Thank You

// const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => (
//   <Extension />
// ));
// // export { thankYouBlock };

// function Extension() {
//   return (
//     <Banner>
//       <Text>Thank you block extension</Text>
//     </Banner>
//   );
// }

//this does not work - Order Status

const orderDetailsBlock = reactExtension(
  "customer-account.order-status.block.render",
  () => <OrderStatusBanner />,
);
export { orderDetailsBlock };

function OrderStatusBanner() {
  // if (order) {
  //   return <Banner>Please include your order ID in support requests</Banner>;
  // }

  // logger.info("Extension loaded final, no order found");

  // return null;
  return (
    <Banner>
      <Text>Order Status block extension...</Text>
    </Banner>
  );
}
