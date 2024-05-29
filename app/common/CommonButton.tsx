import type { SxProps, Theme } from '@mui/material';
import { Button } from '@mui/material';

interface CommonButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const CommonButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  sx,
  children,
}: CommonButtonProps) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
