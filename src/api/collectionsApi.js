import { apiGet } from '../apiClient'

// Compatibility-only escape hatch for legacy collection-shaped callers.
// Prefer resource APIs such as patientsApi, formsApi, profilesApi, and queuesApi.
export function getCollection(collection) {
  return apiGet(`/getCollection?collection=${encodeURIComponent(collection)}`)
}

export function getCollectionPatientNames(collection) {
  return apiGet(`/patientNames?collection=${encodeURIComponent(collection)}`)
}

export function getRecordByDocumentId(patientId, collectionName) {
  return apiGet(
    `/savedData?patientId=${encodeURIComponent(patientId)}&collectionName=${encodeURIComponent(collectionName)}`,
  )
}

export function getRecordByPatientId(patientId, collectionName) {
  return apiGet(
    `/patientSavedData?patientId=${encodeURIComponent(patientId)}&collectionName=${encodeURIComponent(collectionName)}`,
  )
}

export function getRecordByInitials(initials, collection) {
  return apiGet(
    `/patients/by-initials/${encodeURIComponent(initials)}?collection=${encodeURIComponent(collection)}`,
  )
}
