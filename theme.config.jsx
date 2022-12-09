export default {
  logo: <img src="/logo-satset.png" className="h-8 w-40 object-contain" />,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  primaryHue: {
    dark: 106,
    light: 106,
  },
  toc: {
    component: <></>,
  },
  main: ({ children }) => <div className="relative">{children}</div>,
  nextThemes: {
    color: '#16B3AC',
  },
};
