/**
 * Config
 */

// App

export const ENV = process.env.NODE_ENV
export const API_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '')
