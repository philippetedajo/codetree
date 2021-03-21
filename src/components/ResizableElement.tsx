import { ResizableBox } from "react-resizable";
import "./styles/resizable-element.css";

interface resizableProps {
  direction: "horizontal" | "vertical";
}

const ResizableElement: React.FC<resizableProps> = ({
  direction,
  children,
}) => {
  return (
    <ResizableBox
      className="horizontal-resize-element"
      height={Infinity}
      width={window.innerWidth * 0.45}
      resizeHandles={["e"]}
      minConstraints={[window.innerWidth * 0.2, Infinity]}
      maxConstraints={[window.innerWidth * 0.8, Infinity]}
    >
      {children}
    </ResizableBox>
  );
};

export default ResizableElement;
