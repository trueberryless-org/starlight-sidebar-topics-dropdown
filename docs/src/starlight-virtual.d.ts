declare module "virtual:starlight/components/*" {
  const Component: (props: Record<string, unknown>) => any;
  export default Component;
}

declare module "virtual:starlight/user-config" {
  const config: { credits: boolean };
  export default config;
}
