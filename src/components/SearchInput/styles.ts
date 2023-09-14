import { InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const InputContainer = styled(InputGroup)`
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme["gray-200"]};

  min-width: 170px;
  max-width: 600px;
  width: 100%;
`;

export const SearchIcon = styled(FaSearch)`
  color: ${(props) => props.theme["gray-200"]};
`;

export const CloseIcon = styled(IoMdClose)`
  color: ${(props) => props.theme["gray-200"]};
`;
