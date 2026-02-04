
import ActionButton from '../../Components/ActionButton'
import Box from '../../Components/Box'
import ContactInfo from './ContactInfo'

interface propType{
    setShowContact:React.Dispatch<React.SetStateAction<boolean>>
}

export default function ContactPage({setShowContact}:propType) {   
    return (
    <div id='contact' className='max-w-full pointer-events-auto min-h-dvh xl:flex-row flex-col gap-0.5 relative p-0.5 flex text-text font-grotesk'>
        <Box className='w-full flex justify-start flex-col gap-6 items-start max-w-full'>
            <div className="flex justify-center font-semibold items-center p-1.5 sm:p-3 px-5 border-muted border-1 rounded-full gap-2">
                <span className="size-2 rounded-full bg-yellow"></span>
                CONTACT
            </div>
            <ContactInfo/>
        </Box>

        <Box transparent className='flex items-start bg-blurple max-w-full justify-center gap-40 flex-col text-text w-full py-20 xl:min-h-dvh'>
            <div className='flex font-offbit flex-col text-3xl xs:text-5xl gap-6'>
                <p>Want to say hi ?</p>
                <p className='font-offbit'>Lets Connect</p>

            </div>

            <div className='flex flex-col gap-8 '>
                <p className='max-w-lg text-lg font-medium'>I’m always happy to chat with other developers, founders, or anyone working on interesting things. Whether you want to swap ideas, ask something about my work, or just say hi, feel free to reach out.</p>
                <ActionButton setShowContact={setShowContact} />
            </div>
            
        </Box>
    </div>
    )
}
