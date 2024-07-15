import { json } from "@remix-run/node";
import { shopify } from "~/shopify.server";

export async function loader({ request }) {
  try {
    const { admin } = await shopify.authenticate.admin(request);
    const data = await admin.rest.resources.ShippingZone.all({
      session: session,
    });
    return json(data);
  } catch (err) {
    console.error(err);
    return json({ error: err.message }, { status: 500 });
  }
}
