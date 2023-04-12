import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import NextLink from 'next/link';

export default function LinkButton(props: ButtonProps<'a'>) {
  return <Button component={NextLink} {...props} />;
}
