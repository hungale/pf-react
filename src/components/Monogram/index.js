import styled from "styled-components";
import PropTypes from "prop-types";
import COLORS from "../../utils/styles";

/*
A square monogram with text inside.
*/

const flexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Monogram = styled(flexCenter)`
  color: ${(props) => props.color};
  background-color: var(--color-seagreen);
  
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // font-family: 'Iceland', cursive;
  // font-size: 1.25rem;
}
`;
// background-color: var(--color-green)

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
