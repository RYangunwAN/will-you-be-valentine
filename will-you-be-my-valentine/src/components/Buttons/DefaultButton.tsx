import { Button } from "react-bootstrap";
import "../../styles/DefaultButton.css";


interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <Button className="custom-button" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default DefaultButton;
