import styled from "styled-components"; // styled-components

// framer motion
import { motion } from "framer-motion";

// Display section for the weview
export const Display = ({ sourceCode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DisplayWrapper>
        <FrameHere
          title="display-area"
          style={{ sandbox: "allow-scripts", frameBorder: "0" }}
          srcDoc={sourceCode}
        />
      </DisplayWrapper>
    </motion.div>
  );
};

// styled components
const DisplayWrapper = styled.div`
  height: 93vh;
  width: 48vh;
  background-color: antiquewhite;
  margin: 10px;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  object-fit: contain;
  overflow-x: hidden;
  overflow-y: auto;
`;

const FrameHere = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
