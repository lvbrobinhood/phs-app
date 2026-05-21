import { apiGet } from '../apiClient'

export function getCurrentProfile() {
  return apiGet('/profile')
}

export function getProfiles() {
  return apiGet('/profiles')
}

export function getVolunteerProfiles() {
  return apiGet('/profiles/volunteers')
}

export function getVolunteerProfileCount() {
  return apiGet('/profiles/volunteers/count')
}
