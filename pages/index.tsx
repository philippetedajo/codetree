import dynamic from "next/dynamic";

const Playground = () => {
  const PlaygroundPage = dynamic(() => import("../modules/PlaygroundPage"), {
    ssr: false,
  });
  return <PlaygroundPage />;
};

export default Playground;
