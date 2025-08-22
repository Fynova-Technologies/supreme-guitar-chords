export interface AuthPopupProps {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
  onSignup: () => void;
  isLoading?: boolean;
}