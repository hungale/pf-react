import styled from "styled-components";
import PropTypes from "prop-types";
import COLORS from "../../utils/styles";

/*
A square monogram with text inside.
*/
const Monogram = styled.p`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

Monogram.propTypes = {
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

Monogram.defaultProps = {
  bg: COLORS.SEAGREEN,
  color: "white",
  size: "2rem",
};

export default Monogram;
