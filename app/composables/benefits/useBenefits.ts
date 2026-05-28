import type { Benefits } from '~/api/types';
import { getBenefits } from '~/api/services';

function _useBenefits() {
  const isLoading = ref(false);
  const isError = ref(false);
  const error = ref<string | null>(null);

  const benefitsInfo = ref<Benefits>({ title: '', description: '', benefits: [] });

  async function fetchBenefits() {
    try {
      isLoading.value = true;
      benefitsInfo.value = await getBenefits();
    }
    catch (e) {
      isError.value = true;
      error.value = String(e);
    }
    finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    isError,
    error,
    fetchBenefits,
    benefitsInfo,
  };
}

export const useBenefits = createSharedComposable(_useBenefits); // нужно для прелоадера, чтоб отслеживать состояние загрузки
