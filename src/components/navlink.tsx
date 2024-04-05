import { ComponentProps } from 'react';

interface NavText extends ComponentProps<'a'> {
  texto: string;
  href: string;
}

function NavLink(props: NavText) {
  return (
    <nav className="flex items-center gap-5">
      <a
        {...props}
        className="font-medium text-sm text-zinc-300 hover:text-zinc-50 antialiased"
        href={props.href}
      >
        {props.texto}
      </a>
    </nav>
  );
}

export default NavLink;
