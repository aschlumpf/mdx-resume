/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.mdx" {
  const Component: React.FC;
  export default Component;
}
