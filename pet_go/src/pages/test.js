import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';

function Test() {
    const container = document.getElementById('home');
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Router tab="home" />);
}
export default Test;
