import { breakpointsTailwind } from '@vueuse/core';

export function useAnimationsState() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const lgAndSmaller = breakpoints.smallerOrEqual('lg');

  return { isAnimationsDisabled: lgAndSmaller };
}
