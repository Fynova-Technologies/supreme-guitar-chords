interface ExtraButton {
  text: string;
  action: () => void;
}

export interface MailVerificationModelProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonAction?: () => void;
  extraButtons?: ExtraButton[];
  onClose?: () => void;
}