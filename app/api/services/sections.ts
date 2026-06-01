import type { Benefits, Multiply, Tasks } from '../types/sections';
import { apiClient } from '../client';

export function getBenefits() {
  return apiClient<Benefits>('/sections/benefits');
}

export function getMultiply() {
  return apiClient<Multiply>('/sections/multiply');
}

export function getTasks() {
  return apiClient<Tasks>('/sections/tasks');
}
