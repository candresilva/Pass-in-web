import { ComponentProps, ReactNode } from 'react';

interface NavText extends ComponentProps<'button'> {
  children: ReactNode;
}

function IconButton(props: NavText) {
  return (
    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
      {props.children}
    </button>
  );
}

export default IconButton;
