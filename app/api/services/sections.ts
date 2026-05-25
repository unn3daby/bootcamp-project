import { apiClient } from '../client'
import type { Benefits, Multiply, Tasks } from '../types/sections'

export const getBenefits = () =>
  apiClient<Benefits>('/sections/benefits')

export const getMultiply = () =>
  apiClient<Multiply>('/sections/multiply')

export const getTasks = () =>
  apiClient<Tasks>('/sections/tasks')
