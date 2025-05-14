
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set favicon
const link = document.createElement('link');
link.rel = 'icon';
link.href = 'https://i.postimg.cc/Vv56WDWq/ma-digital-hub.jpg';
document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);
