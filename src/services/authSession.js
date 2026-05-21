import { getCurrentProfile } from '../api/profilesApi'

export const getName = (profile) => {
  if (!profile) return ''
  return profile.name === undefined ? profile.email : profile.name
}

export const isLoggedin = () => Boolean(localStorage.getItem('authToken'))

export const logOut = async () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('profile')
}

export const getProfile = async () => {
  if (!isLoggedin()) return null

  try {
    const data = await getCurrentProfile()
    return data.user
  } catch {
    return null
  }
}

export const isAdmin = async () => {
  const profile = await getProfile()
  return Boolean(profile?.is_admin)
}
