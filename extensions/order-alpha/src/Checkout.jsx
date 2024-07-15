import React, { useState, useEffect } from "react";
import {
  reactExtension,
  Choice,
  ChoiceList,
  Icon,
  InlineStack,
} from "@shopify/ui-extensions-react/checkout";
import { Page, Layout, Card } from "@shopify/polaris";

const orderDetailsBlock = reactExtension(
  "customer-account.order-status.block.render",
  () => <OrderStatusBanner />,
);
export { orderDetailsBlock };

function OrderStatusBanner() {
  const [selectedValue, setSelectedValue] = useState("ship");

  // fetch is giving an error - URL cant be parsed, most likely remix/framework issue
  // prepending the below url with localhost or preview url also does not work
  async function fetchShippingMethods() {
    const data = await fetch("/api/shipping-methods");

    // console.log(data);
  }
  useEffect(() => {
    fetchShippingMethods();
  }, []);

  return (
    // <InlineStack>
    <ChoiceList
      name="group-single"
      variant="group"
      value={selectedValue}
      onChange={(value) => {
        setSelectedValue(value);
        // console.log(`onChange event with value: ${value}`);
      }}
    >
      <Choice secondaryContent={<Icon source="truck" />} id="ship" value="ship">
        Ship
      </Choice>

      <Choice
        secondaryContent={<Icon source="marker" />}
        id="ship-to-pickup-point"
        value="ship-to-pickup-point"
      >
        Ship to pickup point
      </Choice>

      <Choice
        secondaryContent={<Icon source="store" />}
        id="pick-up"
        value="pick-up"
      >
        Pick up in store
      </Choice>
    </ChoiceList>
    // </InlineStack>
  );
}
