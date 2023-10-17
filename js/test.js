import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const Home = () => {
  // Connect your marketplace smart contract here (replace this address)
const { contract } = useContract("<0xCcbF5a8DF1C88304B381b7aca396DFa1bD3b6763>", "opensea")

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

  return <div></div>;
};

export default Home;