import { getDexChainFeesRaw, getDexChainFees } from "../helpers/getUniSubgraphFees";
import { Adapter } from "../adapters/types";
import volumeAdapter from "../volumes/quickswap";
import { POLYGON } from "../helpers/chains";
import { Chain } from "@defillama/sdk/build/general";

// const endpoints = {
//   [POLYGON]: "https://api.fura.org/subgraphs/name/quickswap",
// };

// const TOTAL_FEES = 0.003;
// const PROTOCOL_FEES = 0.0005;

// const graphs = getDexChainFeesRaw({
//   graphUrls: {
//     [POLYGON]: endpoints[POLYGON]
//   },
//   totalFees: TOTAL_FEES,
//   protocolFees: PROTOCOL_FEES
// });

// const fees = Object.keys(endpoints).reduce(
//   (acc, chain) => ({
//     ...acc,
//     [chain]: {
//       fetch: graphs(chain as Chain),
//       start: async ()  => 1602115200,
//     },
//   }),
//   {}
// );

// const adapter: FeeAdapter = {
//     fees,
// };

const TOTAL_FEES = 0.003;
const PROTOCOL_FEES = 0.0005;

const feeAdapter = getDexChainFees({
  totalFees: TOTAL_FEES,
  protocolFees: PROTOCOL_FEES,
  volumeAdapter
});

const adapter: Adapter = {
  adapter: feeAdapter
};

export default adapter;