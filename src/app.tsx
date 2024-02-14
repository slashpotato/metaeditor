//import { ipcRenderer } from 'electron';
import { createRoot } from 'react-dom/client';

alert(__dirname)

const root = createRoot(document.body);
root.render(
    <main className='m-0 p-0'>
        Hello from React!
    </main>
);

console.log('!!!!!!!!!' + __dirname)
//ipcRenderer.send('set-title', 'a')