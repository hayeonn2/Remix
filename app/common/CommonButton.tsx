// import type { SxProps, Theme } from '@mui/material';
// import { Button } from '@mui/material';
// import {
//   deepPurple, indigo, purple, red,
// } from '@mui/material/colors';
// import { styled } from '@mui/material/styles';

// type GradientButtonProps = {
//   colors?: string[];
// }

// const GradientButton = styled(Button)<GradientButtonProps>(({ colors }) => ({
//   color: 'white',
//   ...(colors && {
//     background: `linear-gradient(to right bottom, ${colors.join(',')})`,
//   }),
// }));

// const CommonButton = ({
//   variant = 'contained',
//   color = 'primary',
//   size = 'medium',
//   disabled = false,
//   startIcon,
//   endIcon,
//   onClick,
//   sx,
//   children,
// }: CommonButtonProps) => {
//   return (
//     <Button
//       variant={variant}
//       color={color}
//       size={size}
//       disabled={disabled}
//       startIcon={startIcon}
//       endIcon={endIcon}
//       onClick={onClick}
//       sx={{
//         borderRadius: '9999px', ...sx,
//       }}
//     >
//       {children}
//       <GradientButton
//         variant="contained"
//         colors={[
//           red[50],
//           deepPurple[500],
//           purple[500],
//         ]}
//       >
//         ㅇ우앙ㅂ
//       </GradientButton>
//     </Button>
//   );
// };

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
  gradient?: string[];
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
  gradient,
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
      sx={{
        borderRadius: '9999px',
        ...sx,
        ...(gradient && {
          background: `linear-gradient(to bottom, ${gradient.join(',')})`,
          color: 'white',
        }),
      }}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
