
import "./App.css";
import Sidebar from "./Components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {AboutUs} from "./Pages/AboutUs"
import {
	Files, FilesOne, FilesTwo
} from "./Pages/Files";
import { Calender } from "./Pages/Calender";
import {
	Webinars,
} from "./Pages/Webinars";
import Contact from "./Pages/ContactUs";
import { Users } from "./Pages/Users";
import { Settings } from "./Pages/Settings";
import { Dashboard } from "./Pages/Dashboard";
import Schedule from "./Meeting/Schedule";
import AppointmentsList from "./Meeting/AppointmentsList";
function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route
					path="/home"
					element={<AboutUs/>}
				/>
				<Route path="/calender" element={<Calender />} />
				<Route
					path="/files"
					element={<Files />}
				/>
				<Route
					path="/files/files1"
					element={<FilesOne />}
				/>
				<Route
					path="/files/files2"
					element={<FilesTwo />}
				/>

				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/webinars"
					element={<Webinars />}
				/>


				<Route path="/user" element={<Users />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/schedule" element={<Schedule/>}/>
				<Route path="/appointmentslist" element={<AppointmentsList/>}/>
			</Routes>
		</Router>
	);
}

export default App;
