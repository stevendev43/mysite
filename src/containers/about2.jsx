import { motion } from 'framer-motion';

const About2 = () => {
    return (
    <>
        <motion.div 
          initial={{
            transform: `translate3d(100%, 0, 0)`,
            opacity: 0,
          }}
            animate= {{
              transform: `translate3d(0%, 0, 0)`,
              opacity: 1,
            }}
            transition={{ duration: 1}}
            className='max-w-7xl mx-auto h-screen flex bg-slate-300'>
            <div className="w-1/2 flex text-4xl pt-60 px-4 text-center text-[#272727]">
              <p>I currently work as a freelancer & I have +3 years of xp, in designing digital products.</p>
            </div>
            <div className="w-1/2 flex text-4xl text-center text-[#272727] pt-96 px-4">
              <p>In each project I leave my life to satisfy the client.</p>
            </div>
        </motion.div>
    </>    
    );
};


export default About2;