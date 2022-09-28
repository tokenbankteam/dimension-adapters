import { FeeAdapter } from "../utils/adapters.type";
import { BITCOIN } from "@defillama/adapters/volumes/helper/chains";
import { chainAdapter } from "../helpers/getChainFees";

const feeAdapter = chainAdapter(BITCOIN, "btc", 1230958800);

const adapter: FeeAdapter = {
  fees: feeAdapter,
  adapterType: "chain"
}

export default adapter;