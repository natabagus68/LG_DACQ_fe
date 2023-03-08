export const config = {
    apibaseUrl: import.meta.env.VITE_API_BASE_URL || `${(window?.location?.protocol || 'https:')}//${(window?.location?.host || 'localhost')}/api/`,
    assetUrl: import.meta.env.VITE_API_ASSET_URL || 'http://localhost/',
    pathPrefix: import.meta.env.VITE_PATH_PREFIX || '/',
    mockApi: import.meta.env.VITE_MOCK_API == 'true',
    socketPort: import.meta.env.VITE_SOCKET_PORT || 88
};
