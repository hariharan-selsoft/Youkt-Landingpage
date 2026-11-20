declare module "next" {
  const content: any;
  export default content;
  export type Metadata = any;
  export type NextConfig = any;
}

declare module "next/image" {
  import { ComponentProps, FC } from "react";
  const Image: FC<ComponentProps<"img"> & { 
    src: any; 
    alt: string; 
    width?: number | string; 
    height?: number | string; 
    fill?: boolean; 
    priority?: boolean;
    preload?: boolean;
  }>;
  export default Image;
}

declare module "next/navigation" {
  export const useRouter: () => any;
  export const usePathname: () => string;
  export const useSearchParams: () => any;
}

declare module "next/types.js" {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
  const content: any;
  export default content;
}

declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type Metadata = any;
  export type ResolvedMetadata = any;
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module "next/dist/build/segment-config/app/app-segment-config.js" {
  export type AppSegmentConfig = any;
  export type InstantConfigForTypeCheckInternal = any;
  export type Prefetch = any;
  export type EnsureStatic = any;
}
