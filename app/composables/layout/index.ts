import { useAnimationsState } from '~/composables/animations';

const _isLayoutFaded = ref<boolean>(false);

export function useLayoutFading() {
  const isLayoutFaded = computed(() => !useAnimationsState().isAnimationsDisabled.value && _isLayoutFaded.value);
  function fadeLayout() {
    _isLayoutFaded.value = true;
  }

  function unfadeLayout() {
    _isLayoutFaded.value = false;
  }

  return { isLayoutFaded, fadeLayout, unfadeLayout };
}
