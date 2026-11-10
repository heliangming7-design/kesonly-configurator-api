const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("KESONLY API is running");
});

app.post("/proxy/validate", (req, res) => {
  const { product_handle, variant_id, options } = req.body;

  if (!product_handle || !variant_id || !options) {
    return res.status(400).json({
      ok: false,
      message: "缺少配置参数"
    });
  }

  res.json({
    ok: true,
    variant_id: Number(variant_id),
    sku: "KES-RND-SOL-14Y-07",
    price: "680.00",
    supplier_code: "SUP-A",
    lead_time_days: 15,
    properties: {
      Metal: options.metal || "",
      "Ring size": options.ring_size || "",
      Engraving: options.engraving || "",
      _supplier_code: "SUP-A",
      _lead_time_days: "15",
      _price_snapshot: "680.00 USD"
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`KESONLY API running on port ${port}`);
});