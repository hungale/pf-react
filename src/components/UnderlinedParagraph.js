import styled from "styled-components";
import PropTypes from "prop-types";

const UnderlinedParagraph = styled.p`
  color: ${props => props.color};
  border-bottom: ${props => props.thickness} solid ${props => props.underlineColor};
  align-self: center;
`;

UnderlinedParagraph.propTypes = {
  underlineColor: PropTypes.string.isRequired
};

UnderlinedParagraph.defaultProps = {
  color: "white",
  underlineColor: "#6FDEA9",
  thickness: "3px"
}

export default UnderlinedParagraph;

