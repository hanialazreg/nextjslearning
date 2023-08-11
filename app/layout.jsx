import '@styles/globals.css'
import { Children } from 'react';

export const metadata = {
    title: "Promptopia",
    description: 'Descover & Share AI Prompts'
} 

const Rootlayout = ({children}) => {
  return (
   <html>
    <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
            {children}
            {console.log("chiiild",children )}
        </main>
    </body>
   </html>
  )
}

export default Rootlayout