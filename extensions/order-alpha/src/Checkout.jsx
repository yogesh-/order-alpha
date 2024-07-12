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
  return (
    <Banner>
      <Text>Order Status block extension...</Text>
    </Banner>
  );
}
