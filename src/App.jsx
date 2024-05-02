import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/splash/SplashScreen'
import Dashboard from './pages/dashboard/Dashboard'
import ContentPage from './pages/content/ContentPage'
import UserPage from './pages/user/UserPage'
import ScreenPage from './pages/screen/ScreenPage'
import Settings from './pages/settings/Settings'
import UserSettings from './pages/settings/userSettings/UserSettings'
import Playlist from './pages/playlist/Playlist'
import AddUserPage from './pages/user/addUserPage/AddUserPage'
import AddScreenPage from './pages/screen/addScreenPage/AddScreenPage'
import AddContentPage from './pages/content/addContentPage/AddContentPage'
import AddPlaylistPage from './pages/playlist/addPlaylistPage/AddPlaylistPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} >

            <Route path='' element={<Dashboard />} />
            <Route path='content' element={<ContentPage />} />
            <Route path='content/add-content' element={<AddContentPage />} />
            <Route path='user' element={<UserPage />} />
            <Route path='user/add-user' element={<AddUserPage />} />
            <Route path='screen' element={<ScreenPage />} />
            <Route path='screen/add-screen' element={<AddScreenPage />} />
            <Route path='playlist' element={<Playlist />} />
            <Route path='playlist/add-playlist' element={<AddPlaylistPage />} />
            <Route path='settings' element={<Settings />} />
            <Route path='settings/user-profile' element={<UserSettings />} />

            <Route path='*' element={<div>Page not found</div>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
