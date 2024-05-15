import { motion } from 'framer-motion';


const Home = () => {
    

    return (
    <>
        <div name='home' className='max-w-7xl mx-auto  h-screen bg-[#272727] flex'>
            <motion.h1 
                initial ={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ duration: 1 }}
                className='text-9xl font-light text-slate-300 pt-20 font-sans leading-tight m-'>web && <br />apps developer<br />graphic designer</motion.h1>
            <div className='flex pt-96 justify-center items-center text-2xl'>
                <a href="contact" className="bg-transparent hover:bg-slate-300 text-slate-300 font-semibold hover:text-[#272727] py-4 px-8 border border-slate-300 hover:border-transparent rounded">Contact</a>
            </div>
        </div>
    </>    
    );
};


export default Home;